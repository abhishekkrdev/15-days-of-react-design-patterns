# Day 01 - Container-Presenter Design Pattern

## **🎯 Goal of This Lesson**

- About Day 01
- What Will We Learn?
- Prerequisites
- The Template
- Code Setup
- Code Smells
- Container-Presenter Pattern
- Applying the Pattern - Container
- Applying the Pattern - Presenter
- Break the Presenter Component
- Where to Use this Pattern?
- Pitfalls and Anti-Patterns
- Tasks
- What’s Next!

## 🫶 Support

Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

    > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work

I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Cofee](https://buymeacoffee.com/tapasadhikary)**.

## Video

Here is the video for you to go through and learn:

[![day-01](./banner.jpg)](https://youtu.be/1UHbhikwg-s "Video")

My Notes:

1. Container-Presenter Pattern also called Smart-Dumb Components Pattern
2. Identify code smells, implement the pattern , real-world use case and potential pitfall
3. Don't do anti-patterns
4. In (day-01/container-presenter-pattern/src/messy-way/components/UserProfile.jsx) following code smell 
   a. SRP is violated. It manages multiple states, multiple api calls. It also handles form logic.
   b. Lack of reusability. If Error happens elsewhere it cannot be reused. Same thing for loading.
   c. Poor Testability
   d. Difficult to maintain
5. If you have messy component, create a container component which would fetch the data and maintain the data.
6. Once container has got the data, now it is passed to presenter component and it renders. Presenter component might grows bigger. 
   Break the presenter component into multiple component.
7. Form Data Handling can be done by presenter component.
8. Use the above pattern for data heavy component, eg. user dashboard, catalog page, real time analytics etc. Form Heavy Component also can use above pattern. Separate data layer with render elements.
9. Don't overcomplicate and overengineer simple component. 
10. If you get to pass props through more than 3 layers, the above pattern can't be used. For those things, we have more advance pattern.
