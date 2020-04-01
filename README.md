# General

This code is for use as a playgound to discuss approach in React-Native.

# Run

`yarn install`

`cd ios && pod install`

go back to root directory

`yarn ios`

# Overall Approach

- redux-persist: is very handy to cache locally the application state. The mobile app lifecycle is easier to maintain be able to hydrate the redux store when the app comes to foreground.
- redux: the way to go to manage application state. The caveat is that not everything should go to application state and neither should be a cache request (though I did that just to quick prototype). It is a curated place to hold your application state.
- redux-saga: hooks help with fetch data but my experience shows that often, some data transformation, exceptions, racing, is necessary. The LLT (long live transactions) approach helps to solve these scenarios and I still feel that redux-saga is not overkill in a hooks environment.
- react-navigation: it allows us to access native components to stack scenes and the latest version brought a lot of improvements that make it the way to go solution for navigation.

# Caveats

In order to not invest to much time on the code challenge, I decide to not go further in other items that is essencial in a real world implementation as:

- Testing (Jest & Detox)
- Better define types
- Reusable styles
- Wireless & LTE & No Connection
- Loadings
- ...

Hope you understand and we can discuss those items during the chat.
