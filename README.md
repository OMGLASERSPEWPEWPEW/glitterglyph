npm start, browse to [localhost](http://localhost:3000/) or http://localhost:3000/upload

Right now upload doesn't work because of CORS, but if you did, the goal would be to take the uploaded file parse it, store it, and then pull it and show it in the the artist's feed.

Some of the things I am thinking about here:
(1) Social apps have a post button and then, within that post, you can do various things (add media, add poll).  I want to approach this slightly differently by adding a post-type to select and then taking you to an appropriate screen based on that post-type. 

Artist experience:
(a) I want this section to be like a default post-type with the ability to add new ones (kind of like a vertical hot bar -- think some creators are writers and post blogs and short stories so they may have those content types pre-loaded, and others are more visual with short-form videos, etc.
(b) On artist end, lets say they choose story, they get taken to a form to upload their piece to GlitterGlyph. Upon upload, GlitterGlyph will strip, store, format the file, then send it off for inference for language translation (openai API) and audio conversion (Eleven Labs / Whisper)

Audience experience:
(a) The way the posts are displayed in the artist's feed are dependent on the type of content.  If it's a short story, it might be a thumbnail image, a title, a summary, etc.  When audience clicks on it, the app opens up a kindle-like reader with a few buttons (language selection, listen/read toggle)

Would like to get this wired up for normal posts and the ability to upload episodic content, translate to Spanish, and create two audio files, one for Spanish and one for English first



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
