// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_slug_ from "./routes/[...slug].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $group_slug_ from "./routes/group/[slug].tsx";
import * as $index from "./routes/index.tsx";
import * as $offline from "./routes/offline.tsx";
import * as $Editor from "./islands/Editor.tsx";
import * as $ProgressBar from "./islands/ProgressBar.tsx";
import * as $ProgressCheck from "./islands/ProgressCheck.tsx";
import * as $ProgressSection from "./islands/ProgressSection.tsx";
import * as $ThemeToggle from "./islands/ThemeToggle.tsx";
import * as $Toast from "./islands/Toast.tsx";
import * as $signals_store from "./islands/signals/store.ts";
import * as $useToast from "./islands/useToast.ts";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[...slug].tsx": $_slug_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/group/[slug].tsx": $group_slug_,
    "./routes/index.tsx": $index,
    "./routes/offline.tsx": $offline,
  },
  islands: {
    "./islands/Editor.tsx": $Editor,
    "./islands/ProgressBar.tsx": $ProgressBar,
    "./islands/ProgressCheck.tsx": $ProgressCheck,
    "./islands/ProgressSection.tsx": $ProgressSection,
    "./islands/ThemeToggle.tsx": $ThemeToggle,
    "./islands/Toast.tsx": $Toast,
    "./islands/signals/store.ts": $signals_store,
    "./islands/useToast.ts": $useToast,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
