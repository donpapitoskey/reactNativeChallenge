This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React Challenge - Of Rick & Morty 

This is a project developed to explore the design of an application to consume Back-end information of topic -Rick & Morty-. 

The application itself allows the user to search for names of characters, episodes or locations of the series and retrieve the informatión from this [API](https://rickandmortyapi.com/graphql).

In the left section of the page, the user can select the type of search the application will perform between "Characters", "Locations" and "Episodes". In the upper section, the user can write down the search criteria words in two search boxes; one for the "Name" field and another for "Type" field. A screenshot of the main view is shown below: 
![mainView](https://user-images.githubusercontent.com/59004502/92009119-a5308680-ed0d-11ea-9423-d987434f0b47.PNG)

For the search to work properly, the user must write down more than 3 letters in one of the fields and press `Enter`. The search will obtain cards with information related to the criteria searche fields. In example, for obtaining information cards about the characters with the letters `rick`, the application will display some the screen shown below:
![image](https://user-images.githubusercontent.com/59004502/92009022-803c1380-ed0d-11ea-88a9-7e2de6361c29.png)

Once obtained the cards, the user can click the cards and display further information about the selected character/location/episode as shown in the image below:
![image](https://user-images.githubusercontent.com/59004502/92009872-baf27b80-ed0e-11ea-8f79-f0fe7b95ba2a.png).

If the back end could not resolve the search, a screen will be displayed as shown below:

![image](https://user-images.githubusercontent.com/59004502/92010234-2f2d1f00-ed0f-11ea-8b1b-0f99c7328e7e.png)

##

## Main libraries

The necessary libraries for the development of this project were:

    - "@apollo/client": "^3.1.5",
    - "@apollo/react-hooks": "^4.0.0",
    - "@react-native-community/masked-view": "^0.1.10",
    - "graphql": "^15.3.0",
    - "react": "16.13.1",
    - "react-apollo": "^3.1.5",
    - "react-native": "0.63.2",
    - "react-native-elements": "^2.3.2",
    - "react-native-gesture-handler": "^1.8.0",
    - "react-native-ionicons": "^4.6.5",
    - "react-native-paper": "^4.1.0",
    - "react-native-reanimated": "^1.13.0",
    - "react-native-safe-area-context": "^3.1.7",
    - "react-native-screens": "^2.10.1",
    - "react-native-vector-icons": "^7.1.0",
    - "react-navigation": "^4.4.0",
    - "react-navigation-material-bottom-tabs": "^2.3.0",
    - "react-navigation-stack": "^2.8.2",
    - "react-navigation-tabs": "^2.9.0"

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the necessary libraries listed above.

### `yarn android`

Runs the app in a connected Android device.
For the development and debugging an Xiaomi MI Lite 8 was used. 

### `yarn lint`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
