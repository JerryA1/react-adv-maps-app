export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (error) => {
        alert("error while obtain geolocation");
        console.log(error);
        reject();
      }
    );
  });
};
