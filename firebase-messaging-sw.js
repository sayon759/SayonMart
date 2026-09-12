importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyADeZCx2WUbDOg1QiIXWpbe9hccPWXuMCA",
  authDomain: "sayonmart-90156.firebaseapp.com",
  projectId: "sayonmart-90156",
  storageBucket: "sayonmart-90156.firebasestorage.app",
  messagingSenderId: "207742677482",
  appId: "1:207742677482:web:42d6302521e3f1895cc293",
  measurementId: "G-GD5BHTE8RN"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle =
    payload.notification?.title || "SayonMart";

  const notificationOptions = {
    body:
      payload.notification?.body ||
      "SayonMart থেকে নতুন notification এসেছে।",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    data: {
      url: payload.fcmOptions?.link || "/"
    }
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url =
    event.notification?.data?.url || "/";

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          client.navigate(url);
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});