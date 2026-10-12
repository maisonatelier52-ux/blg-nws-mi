"use client";

import React from "react";
import { ChronicleHeader } from "./ChronicleHeader";

export { NAV_LINKS } from "./ChronicleHeader";

export function SiteHeader() {
  return <ChronicleHeader isSticky={false} />;
}
