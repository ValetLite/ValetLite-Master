import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import LoginReducer from '../components/Login/LoginReducer';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  auth: LoginReducer
});

export default rootReducer;
