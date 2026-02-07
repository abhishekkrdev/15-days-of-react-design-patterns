# Day 05 - HOC

## **🎯 Goal of This Lesson**

- Day 05
- We Will Learn
- Higher Order Function(HOF)
- Higher Order Component(HOC)
- The Movie App
- HOC in Code(Setup)
- Coding Movie App With HOC
- Use Cases
- Pitfalls and Alternatives
- Tasks and Wrapping Up

## Video

Here is the video for you to go through and learn:

[![day-05](./banner.jpg)](https://youtu.be/spDQ4oCKSPY "Video")

# Higher Order Components (HOCs) -- Senior Engineer Guide

## 1. Definition

A **Higher Order Component (HOC)** is a function that takes a component
and returns a new component with additional behavior.

```js
const EnhancedComponent = withSomething(WrappedComponent);
```

- HOC is a **pattern**, not a React API.
- Used to **reuse component logic** across multiple components.

---

## 2. Core Principles

### 2.1 Pure Function

HOCs should: - Not mutate the original component. - Return a new
component.

Bad:

```js
function withBadBehavior(Component) {
    Component.prototype.componentDidMount = function () {
        console.log("Mutating component");
    };
    return Component;
}
```

Good:

```js
function withLogger(WrappedComponent) {
    return function Enhanced(props) {
        console.log("Props:", props);
        return <WrappedComponent {...props} />;
    };
}
```

---

### 2.2 Composition Over Mutation

HOCs use composition, not inheritance.

---

## 3. Standard HOC Structure

```js
function withFeature(WrappedComponent) {
    return function EnhancedComponent(props) {
        // logic
        return <WrappedComponent {...props} />;
    };
}
```

---

## 4. Common Real‑World Use Cases

### 4.1 Authentication Guard

```js
function withAuth(WrappedComponent) {
    return function (props) {
        const isLoggedIn = useAuth();

        if (!isLoggedIn) {
            return <Login />;
        }

        return <WrappedComponent {...props} />;
    };
}
```

### 4.2 Data Fetching

```js
function withData(fetchFn) {
    return function (WrappedComponent) {
        return function (props) {
            const [data, setData] = useState(null);

            useEffect(() => {
                fetchFn().then(setData);
            }, []);

            return <WrappedComponent {...props} data={data} />;
        };
    };
}
```

### 4.3 Permission Control

```js
function withPermission(permission) {
    return function (WrappedComponent) {
        return function (props) {
            const user = useUser();

            if (!user.permissions.includes(permission)) {
                return <Forbidden />;
            }

            return <WrappedComponent {...props} />;
        };
    };
}
```

---

## 5. HOC Composition

Multiple HOCs can be composed.

```js
const enhance = compose(withAuth, withLogger, withTheme);

export default enhance(MyComponent);
```

Without compose:

```js
export default withAuth(withLogger(withTheme(MyComponent)));
```

---

## 6. Passing Props Through HOCs

Always forward props.

```js
return <WrappedComponent {...props} extraProp="value" />;
```

Avoid:

```js
return <WrappedComponent />; // breaks props
```

---

## 7. Display Name for Debugging

Important for React DevTools.

```js
function withLogger(WrappedComponent) {
    function Enhanced(props) {
        return <WrappedComponent {...props} />;
    }

    Enhanced.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;

    return Enhanced;
}
```

---

## 8. Ref Forwarding

HOCs do not automatically pass refs.

### Solution: forwardRef

```js
function withFocus(WrappedComponent) {
    const Enhanced = React.forwardRef((props, ref) => {
        return <WrappedComponent {...props} ref={ref} />;
    });

    return Enhanced;
}
```

---

## 9. Static Method Hoisting

HOCs can hide static methods.

Example:

```js
MyComponent.fetchData = () => {};
```

After wrapping, static methods disappear.

### Fix: hoist-non-react-statics

```js
import hoistNonReactStatics from "hoist-non-react-statics";

function withFeature(WrappedComponent) {
    function Enhanced(props) {
        return <WrappedComponent {...props} />;
    }

    hoistNonReactStatics(Enhanced, WrappedComponent);
    return Enhanced;
}
```

---

## 10. TypeScript HOC Pattern

Basic typed HOC:

```ts
function withLogger<P>(
  WrappedComponent: React.ComponentType<P>
) {
  return function Enhanced(props: P) {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
}
```

With injected props:

```ts
type InjectedProps = {
  isLoading: boolean;
};

function withLoading<P extends InjectedProps>(
  Component: React.ComponentType<P>
) {
  return function(props: Omit<P, keyof InjectedProps>) {
    const isLoading = true;

    return (
      <Component
        {...(props as P)}
        isLoading={isLoading}
      />
    );
  };
}
```

---

## 11. Performance Considerations

### 11.1 Avoid Creating HOCs Inside Render

Bad:

```js
function App() {
    const Enhanced = withLogger(Component);
    return <Enhanced />;
}
```

This recreates the component every render.

Good:

```js
const Enhanced = withLogger(Component);

function App() {
    return <Enhanced />;
}
```

---

### 11.2 Memoization

Use `React.memo` if needed.

```js
return React.memo(EnhancedComponent);
```

---

## 12. Common Pitfalls

### 12.1 Props Collision

Injected props may override existing ones.

Solution: - Use unique prop names - Document injected props

---

### 12.2 Wrapper Hell

Too many HOCs:

    withAuth(withTheme(withData(withLogger(Component))))

Solution: - Use composition utilities - Or switch to hooks

---

### 12.3 Ref Not Forwarded

Fix using `forwardRef`.

---

## 13. HOC vs Hooks vs Render Props

| Pattern \| Concept \| Modern Usage \|

\|--------\|--------\|-------------\| HOC \| Wrap component to reuse
logic \| Legacy / specific cases \| \| Render Props \| Function as child
\| Rare \| \| Hooks \| Reusable logic inside component \| Preferred \|

---

## 14. When to Use HOCs in Modern React

Still useful for:

1.  Cross‑cutting concerns
2.  Library APIs
3.  Backward compatibility
4.  Codebase using class components

Common examples: - Redux `connect` - React Router wrappers - Error
boundaries (class-based)

---

## 15. Senior Engineer Checklist

Before writing an HOC, verify:

- [ ] Is a hook sufficient?
- [ ] Does it mutate the component? (It shouldn't)
- [ ] Are props forwarded correctly?
- [ ] Are static methods preserved?
- [ ] Is displayName set?
- [ ] Are refs forwarded if needed?
- [ ] Is it created outside render?
- [ ] Is TypeScript typing correct?

---

## 16. Interview‑Level Summary

A Higher Order Component:

- Is a function that takes a component and returns a new component.
- Used for logic reuse via composition.
- Should not mutate the original component.
- Must pass props through.
- Needs ref forwarding and static hoisting in advanced cases.
- Mostly replaced by hooks in modern React, but still relevant in
  libraries and legacy systems.
