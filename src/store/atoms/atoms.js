import { atom, selector } from "recoil";
import axios from "axios";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 1,
// });

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 0,
// });
// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 0,
// });

//Should call the api inside the atom only
// export const notificationsAtom = atom({
//   key: "notificationsAtom",
//   default: { network: 0, jobs: 0, messaging: 0, notifications: 0 },
// });

//Asynchronous Data Queries
export const notificationsAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "apiData",
    get: async () => {
      await new Promise((r) => setTimeout(r, 5000)); //sleeps for 5 sec
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const totalNotifications = get(notificationsAtom);

    return (
      totalNotifications.network +
      totalNotifications.jobs +
      totalNotifications.messaging +
      totalNotifications.notifications
    );
  },
});

//can say bettr approach then useMemo as here derived states are using if they change it calculates again
// export const sumSelector = selector({
//   key: "sumSelector",
//   get: ({ get }) => {
//     const sum =
//       get(networkAtom) +
//       get(jobsAtom) +
//       get(messagingAtom) +
//       get(notificationsAtom);
//     return sum;
//   },
// });
