import { useEffect } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  // jobsAtom,
  // messagingAtom,
  // networkAtom,
  notificationsAtom,
  // sumSelector,
  totalNotificationsSelector,
} from "./store/atoms/atoms";
import axios from "axios";

function App() {
  const [notification, setNotification] = useRecoilState(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);
  // const networkCount = useRecoilValue(networkAtom);
  // const jobscount = useRecoilValue(jobsAtom);
  // const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  // const notificationsCount = useRecoilValue(notificationsAtom);
  // const totalSum = useRecoilValue(sumSelector);

  //Now dynamic data
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNotification(res.data);
    });
  }, []);

  return (
    <div>
      <button>Home</button>
      <button>
        My Network ({notification.network > 100 ? "99+" : notification.network})
      </button>
      <button>Jobs ({notification.jobs})</button>
      <button>Messaging ({notification.messaging})</button>
      <button>
        Notifications (
        {notification.notifications > 100 ? "99+" : notification.notifications})
      </button>

      <button>Me ({totalNotifications})</button>
      {/* <button>Home</button>
      <button>My Network ({networkCount > 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobscount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>
        Notifications ({notificationsCount > 100 ? "99+" : notificationsCount})
      </button>

      <button
        onClick={() => {
          setMessagingCount((c) => c + 1);
        }}
      >
        Me ({totalSum})
      </button> */}
    </div>
  );
}

export default App;
