import { environment } from 'src/environments/environment.local';

export  class Constant {
  public static URL_API = environment.backendPath;
  public static PREFIX = "api";

  //192.168.78.114:9999/API
  public static COMMON_URL = [Constant.URL_API].join('/');

  public static LOGIN_URL = [Constant.URL_API, 'admin', 'login'].join('/');

  public static USERS_PROFILE_URL = [Constant.URL_API, Constant.PREFIX, 'me'].join('/');

  public static USERS_URL = [Constant.URL_API, Constant.PREFIX, 'users'].join('/');

  public static USER_URL = [Constant.URL_API, Constant.PREFIX, 'user'].join('/');

  public static POSTS_URL = [Constant.URL_API, Constant.PREFIX, 'posts'].join('/');
}
