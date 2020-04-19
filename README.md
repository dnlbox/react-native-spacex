[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

# General

The purpose of this application is a basic setup to support discussions of React-Native architecture, approaches, libraries, among others.

# Setting up environment

React-Native team and the community has a up-to-date walkthrough to install all dependencies that is necessary to develop and run a React-Native application. Also, the new React Native [site](https://reactnative.dev/) is getting better and better with detailed information of the API.

For setup, see: https://reactnative.dev/docs/environment-setup

# Run

In your terminal, run the following commands to build and run the application on an iOS simulator.

&#8594; &nbsp; <code>yarn install</code>

&#8594; &nbsp; <code>cd ios && pod install && cd ..</code>

&#8594; &nbsp; <code>yarn ios</code>

# Overall Approach

- **redux**: the way to go to manage application state. The caveat is that not everything should go to application state and neither should be a cache request (though I did that just to quick prototype). It is a curated place to hold your application state.
- **redux-persist**: is very handy to cache locally the application state. The mobile app lifecycle is easier to maintain be able to hydrate the redux store when the app comes to foreground.
- **redux-saga**: hooks help with fetch data but my experience shows that often, some data transformation, exceptions, racing, is necessary. The LLT (long live transactions) approach helps to solve these scenarios and I still feel that redux-saga is not overkill in a hooks environment.
- **react-navigation**: it allows us to access native components to stack scenes and the latest version brought a lot of improvements that make it the way to go solution for navigation.

# Roadmap

- [ ] Testing (Jest & Detox)
- [ ] Better define types
- [ ] Reusable styles
- [ ] Wireless & LTE & No Connection
- [ ] Loadings
