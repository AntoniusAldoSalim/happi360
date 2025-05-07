import amplitude from "amplitude-js";

const amp = amplitude.getInstance();

/** Call once when the app starts */
export function initAmplitude() {
  amp.init("db0288670c56529147180a7897e4f106", null, {
    defaultTracking: { // auto-captures page-view, sessions, etc.
      pageViews : true,
      sessions  : true,
    },
  });
}

export function log(event, props = {}) {
  amp.logEvent(event, props);
}
