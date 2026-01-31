# Day 02 - Controlled and Uncontrolled Component Patterns

## **🎯 Goal of This Lesson**

- About Day 02
- What Will We Learn?
- Prerequisites
- State vs Refs
- State as Source of Truth
- Refs Usages
- Ref for DOM
- State, Refs, and Rerendering
- A Messy Feedback Form
- Controlled Component
- When Ref Needed With State
- Uncontrolled Component
- Use Cases
- React 19 Forms
- Task

## 🫶 Support

Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

  > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work

I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Cofee](https://buymeacoffee.com/tapasadhikary)**.

## Video

Here is the video for you to go through and learn:

[![day-02](./banner.jpg)](https://youtu.be/jPMCouXondI "Video")

My Notes:

State

- State is React's way of managing dynamic data that drives rendering.
- Think of state as "source of truth" for your UI.
- When state changes, the component re-renders.
- State is reactive - the UI always reflects the current state.
- Managed via the useState hook in functional components.

Refs(References)

- React is declarative. Do the DOM related stuff using ref. Refs let you access and manipulate DOM elements
- Refs allows you to access persistent values without triggering re-renders.

1. If form needs state as well as dom related stuff, we can use ref along with controlled components stuff. For example, we need to do validation and focus the box which are not passing validation.
2. As much as possible, use controlled way of handling forms

Use Cases

1. Use controlled form with complex form. When you need data driven apps, use controlled forms.
2. Newsletter signup, small forms. Not recommended.

Pitfalls

- Don't use state and ref unnecessarily together.
- When you have one input in your form. Using Controlled component form is overkill.
- Using uncontrolled forms in large forms are harder to test, maintain and debug.
