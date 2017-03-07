import HomeView from './components/HomeView';
import { fetchContent } from './modules/content';

export default store => ({
  component : HomeView,
  onEnter: () => store.dispatch(fetchContent())
});
