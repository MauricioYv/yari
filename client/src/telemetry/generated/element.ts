/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v14.0.1. DO NOT EDIT. DO NOT COMMIT.

import EventMetricType from "@mozilla/glean/private/metrics/event";

/**
 * MDN Page element clicks.
 *
 * Generated from `element.clicked`.
 */
export const clicked = new EventMetricType<{
  source?: string;
  subscription_type?: string;
}>(
  {
    category: "element",
    name: "clicked",
    sendInPings: ["action"],
    lifetime: "ping",
    disabled: false,
  },
  ["source", "subscription_type"]
);
