export interface ILaunch {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}

export interface ILaunchOriginal {
  id: string;
  name: string;
  pad: {
    latitude: string;
    longitude: string;
  };
}

export interface IGetAllLaunchesParams {
  window_start__gte: string;
}
