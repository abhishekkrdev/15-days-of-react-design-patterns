# Day 04 - Render Props Pattern

## **🎯 Goal of This Lesson**

- Should We Learn Render Props?
- We Will Learn
- Prerequisites
- The Problem
- Code Setup
- Messy Tracker Problem
- What is Render Props Pattern?
- Implement Render Props Pattern
- Children Prop
- Use Cases
- Pitfalls & Alternatives
- Task and What’s Next?

## Video

Here is the video for you to go through and learn:

[![day-04](./banner.jpg)](https://youtu.be/tIdJj0n1mg4 "Video")

NOTES:

1. We copy logic and duplicate logic many times , like for tracking mouse movements, data fetching etc.
2. Render Props Pattern was used a lot before hook were used.
3. Uses a prop. Value of prop expects a function which return a jsx. Takes control on your rendering.
4. Uses resusable lib with flexibility. Mostly used in legacy code.
5. Not a perfect pattern . The functions which we pass doens't come in devtool.

# Render Props -- Interview Cheat Sheet

## 1) One-line Definition

**Render Props** is a React pattern where a component **receives a
function as a prop** and uses that function to decide **what to
render**, while the component itself manages the logic or state.

---

## 2) 10-second Interview Answer

> Render props is a pattern in React where a component shares its logic
> by passing data to a function prop. The parent provides the function,
> which returns the UI. This allows logic reuse with flexible rendering.

---

## 3) Core Concept

A component: - Handles logic/state internally - Calls a function prop -
Passes data into that function - That function returns JSX

**Structure:**

```jsx
<Component render={(data) => <UI using data />} />
```

---

## 4) Minimal Example

```jsx
function Counter({ render }) {
    const [count, setCount] = React.useState(0);

    return render({
        count,
        increment: () => setCount(count + 1),
    });
}
```

**Usage:**

```jsx
<Counter
    render={({ count, increment }) => (
        <button onClick={increment}>Count: {count}</button>
    )}
/>
```

---

## 5) How It Works (Step-by-Step)

1.  `Counter` manages state (`count`).
2.  Parent passes a function as `render`.
3.  `Counter` calls `render()` and passes data.
4.  The function returns JSX.
5.  React renders that JSX.

---

## 6) Common Variations

### A) `render` prop

```jsx
<Component render={(data) => <UI />} />
```

### B) Function as `children` (more common)

```jsx
<Component>{(data) => <UI />}</Component>
```

---

## 7) Why Use Render Props

**Main goal:** Reuse logic with flexible UI.

**Benefits:** - Logic reuse - UI customization - Clear separation of
concerns

---

## 8) Render Props vs Other Patterns

Pattern How it works Modern usage

---

Render Props Pass function as prop Older but still used
HOC Wrap component with logic Less common now
Custom Hooks Extract logic into hook **Preferred today**

---

## 9) Render Props vs Custom Hooks (Interview Favorite)

**Render Props**

```jsx
<Mouse render={(pos) => <UI />} />
```

**Custom Hook**

```jsx
function Component() {
    const pos = useMouse();
    return <UI />;
}
```

**Key Difference:** - Render props: logic shared through components -
Hooks: logic shared through functions

**Modern answer:** \> Hooks are preferred today because they are
simpler, cleaner, and avoid extra component nesting.

---

## 10) When to Use Render Props

Use when: - You must support class components - You're building a
reusable logic component - Hooks aren't available or suitable

---

## 11) Common Interview Example (Mouse Tracker)

```jsx
function Mouse({ children }) {
    const [pos, setPos] = React.useState({ x: 0, y: 0 });

    return (
        <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
            {children(pos)}
        </div>
    );
}
```

**Usage:**

```jsx
<Mouse>
    {({ x, y }) => (
        <h1>
            {x}, {y}
        </h1>
    )}
</Mouse>
```

---

## 12) Downsides (Important for Interviews)

- Can cause deeply nested JSX
- Harder to read than hooks
- Slight performance overhead if functions are recreated each render

---

## 13) Real Libraries That Used Render Props

- Formik (older API)
- React Router v5
- Downshift

---

## 14) Key Interview Sound-bite

> Render props were a popular pattern for sharing logic in React before
> hooks. Today, most of those use cases are handled by custom hooks, but
> render props are still useful for flexible component APIs and
> class-based components.

- Render props is a React pattern for sharing stateful logic between components by passing a function as a prop. The component that owns the logic calls that function and provides its internal state or handlers, and the function returns the UI. This allows you to decouple behavior from presentation and gives the consumer full control over how the result is rendered.

- Before hooks were introduced, render props were one of the main solutions to logic reuse, along with higher-order components. For example, a component could manage mouse position, form state, or data fetching, and expose that logic through a render function so different UIs could consume it.

- The main trade-offs are increased component nesting and potential performance issues if new functions are created on every render. With the introduction of hooks, most render-prop use cases are now handled with custom hooks, which provide the same logic reuse without additional component layers.

- That said, render props are still useful when you need highly flexible component APIs, need to support class components, or want to give consumers full control over rendering while encapsulating complex behavior.

# React Render Props -- Complete Interview Cheat Sheet

## 1) One-line Definition

**Render Props** is a React pattern where a component **receives a
function as a prop** and uses that function to decide **what to
render**, while the component itself manages the logic or state.

---

## 2) 10-second Interview Answer

> Render props is a pattern in React where a component shares its logic
> by passing data to a function prop. The parent provides the function,
> which returns the UI. This allows logic reuse with flexible rendering.

---

## 3) 30-second Spoken Answer

> Render props is a React pattern used to share logic between
> components. Instead of hard-coding the UI, a component receives a
> function as a prop. That function gets the component's state or
> behavior and returns the JSX to render. This makes the logic reusable
> while keeping the UI flexible. It was popular before hooks, but today
> most of those use cases are handled with custom hooks.

---

## 4) 1-minute Senior-level Explanation

> Render props is a React pattern for sharing stateful logic between
> components by passing a function as a prop. The component that owns
> the logic calls that function and provides its internal state or
> handlers, and the function returns the UI. This decouples behavior
> from presentation and gives the consumer full control over rendering.\
> Before hooks, render props and HOCs were the main logic reuse
> patterns. However, render props can cause nested component trees and
> performance issues if functions are recreated on each render. Today,
> custom hooks handle most of these use cases, but render props are
> still useful for flexible component APIs or class component support.

---

## 5) Core Concept

A component: - Manages logic/state - Calls a function prop - Passes data
into that function - That function returns JSX

**Structure:**

```jsx
<Component render={(data) => <UI using data />} />
```

---

## 6) Minimal Example

```jsx
function Counter({ render }) {
    const [count, setCount] = React.useState(0);

    return render({
        count,
        increment: () => setCount(count + 1),
    });
}
```

**Usage:**

```jsx
<Counter
    render={({ count, increment }) => (
        <button onClick={increment}>Count: {count}</button>
    )}
/>
```

---

## 7) Common Variation: Children as Function

```jsx
<Mouse>{(pos) => <UI pos={pos} />}</Mouse>
```

---

## 8) Why Use Render Props

**Main goal:** Reuse logic with flexible UI.

**Benefits:** - Logic reuse - UI customization - Separation of concerns

---

## 9) Render Props vs Other Patterns

Pattern How it works Modern usage

---

Render Props Function prop returns UI Older but still used
HOC Wrap component with logic Less common now
Custom Hooks Logic in reusable hook Preferred today

---

## 10) Downsides

- Deeply nested JSX ("render prop hell")
- Harder to read than hooks
- Performance issues due to new functions each render

---

## 11) Common Trick Questions

### Is render props the same as passing a component as a prop?

No. - Render prop: function returning JSX - Component prop: fixed
component

### Why performance issues?

New function created on each render, breaking memoization.

### What problem did render props solve?

Logic reuse across components before hooks.

### Why less common today?

Custom hooks are simpler and avoid extra nesting.

### Is it a React feature?

No. It's a design pattern.

---

## 12) When to Use Render Props Today

- Flexible component APIs
- Dynamic rendering control
- Class component support
- When hooks aren't suitable

---

## 13) Real-world Libraries

- Downshift
- Older Formik APIs
- React Router v5

---

## 14) Quick Interview Recap

**What is it?**\
Function prop that returns UI

**Why use it?**\
Logic reuse with flexible rendering

**Main downside?**\
Nested components and performance

**Modern replacement?**\
Custom hooks
