import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        void getCLS(onPerfEntry); // Use void operator to ignore void type
        void getFID(onPerfEntry);
        void getFCP(onPerfEntry);
        void getLCP(onPerfEntry);
        void getTTFB(onPerfEntry);
      })
      // eslint-disable-next-line
      .catch((err) => console.error(err)); // Handle import errors
  }
};

export default reportWebVitals;
