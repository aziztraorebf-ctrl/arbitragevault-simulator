import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// --- Utility helpers ---
function fmt(n: number, opts: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0, ...opts }).format(n);
}
function money(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(isFinite(n) ? n : 0);
}
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));
}

// Core types
type CategoryParams = {
  name: string;
  allocationPct: number;
  buyPrice: number;
  sellPrice: number;
  referralFeePct: number;
  fbaFee: number;
  sellThroughM1: number;
  sellThroughCarryNext: number;
};

// (Code continues...)
