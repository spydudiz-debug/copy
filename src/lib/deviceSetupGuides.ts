export type DeviceGuide = {
  id: string;
  title: string;
  intro: string;
  steps: readonly string[];
  tips?: readonly string[];
};

export const deviceSetupGuides: readonly DeviceGuide[] = [
  {
    id: "amazon-firestick-fire-tv",
    title: "Amazon Firestick & Fire TV",
    intro:
      "Setting up IPTV on a Fire TV Stick or Fire TV device is one of the most popular choices for cord-cutters. This walkthrough covers how to install IPTV on Fire TV using Downloader and how to allow apps from unknown sources safely. Whether you use a Firestick 4K, Fire TV Cube, or Fire TV Stick Lite, the same core IPTV Firestick setup steps apply—get your player installed, enter your subscription details, and start streaming.",
    steps: [
      "From the Fire TV home screen, open **Settings** (gear icon) and select **My Fire TV** (or **Device & Software** on some models).",
      "Choose **Developer options**. Turn **ADB debugging** on if your IPTV provider recommends it, then enable **Apps from Unknown Sources** (or **Install unknown apps** per app) so you can sideload or use Downloader to install your IPTV player.",
      "Return to the home screen, open the **Amazon Appstore**, and install **Downloader** (search for “Downloader” by AFTVnews). Open Downloader when installation finishes.",
      "In Downloader, enter the **IPTV app URL** your provider gave you (APK link), then select **Go**. When prompted, install the app and choose **Open** or find it under **Your Apps & Channels**.",
      "Launch your IPTV app. On first launch, accept any storage or network permissions the app needs to load playlists and EPG.",
      "Enter your **login details**: username, password, and **server or portal URL** exactly as provided. Double-check for typos—credentials are case-sensitive.",
      "Wait for playlists and categories to sync, then pick a channel or VOD title and **start streaming**. Use Ethernet (Fire TV Cube) or 5 GHz Wi‑Fi for the most stable playback.",
    ],
    tips: [
      "If buffering appears often, lower the player’s default stream quality or clear the app cache under Fire TV Settings → Applications.",
      "Pin your IPTV app to the home row for quicker access from the Fire TV launcher.",
    ],
  },
  {
    id: "smart-tv-samsung-lg-sony",
    title: "Smart TV (Samsung, LG, Sony)",
    intro:
      "Many viewers prefer IPTV Smart TV setup directly on the big screen—no extra box required. Samsung (Tizen), LG (webOS), and Sony (often Android/Google TV) each have an app store where you can install players such as IPTV Smarters, Smart IPTV, or your provider’s branded app. This IPTV Samsung LG Sony guide focuses on store installation, signing in, and loading your channels without complicated networking.",
    steps: [
      "Turn on your TV and connect it to the **internet** (Wi‑Fi or Ethernet). Open **Samsung Smart Hub**, **LG Content Store**, or **Google Play** / **Sony Select** depending on your model.",
      "Use the search bar and look for your **IPTV app** by name (for example “IPTV Smarters” or “Smart IPTV”). Confirm the publisher before you install.",
      "Select **Install** and wait for the download to finish. Open the app from the **home screen** or **apps** list.",
      "If the app asks for a **MAC address** or **device ID** for activation, note it on your phone and complete activation on your provider’s site if required.",
      "Enter your **subscription details**: playlist URL, Xtream Codes login, or M3U link—whatever your provider supplied. Save the profile.",
      "Use **Refresh** or **Update playlist** so the app pulls the latest channels and VOD. Browse categories and test a live channel.",
      "Adjust **audio/subtitle** settings inside the app if needed, then enjoy your lineup. For older Sony models, ensure the system firmware is up to date for best codec support.",
    ],
    tips: [
      "LG and Samsung stores may not list every IPTV player—if an app is missing, a Firestick or Android box can be a simple add-on.",
      "Use a wired connection on premium Sony BRAVIA models when possible for 4K stability.",
    ],
  },
  {
    id: "android-box-tv-box",
    title: "Android Boxes & TV Box",
    intro:
      "Android TV boxes and generic TV boxes running Android give you flexibility: access Google Play, sideload APKs, and pair wireless keyboards or air mice. This TV box IPTV guide explains a straightforward IPTV Android box setup—install a trusted player, add your credentials, and load your content in minutes.",
    steps: [
      "Connect your **Android box** to power and HDMI, then complete the on-screen **network setup** (Wi‑Fi or Ethernet).",
      "Open **Google Play Store** (or **Aptoide** if your box uses it) and sign in with a Google account when prompted.",
      "Search for your recommended **IPTV app**, tap **Install**, then **Open** once the install completes.",
      "Grant permissions for **storage** and **network** so the app can download playlists and cache thumbnails.",
      "Enter your **login credentials** or **M3U / Xtream** details from your subscription email. Name the profile if the app supports multiple lists.",
      "Tap **Load** or **Refresh** to sync channels, movies, and series. Wait until categories appear—large playlists may take a minute on first launch.",
      "Pick a channel to verify playback, then explore **catch-up** or **VOD** if included. You’re ready to **start watching**.",
    ],
    tips: [
      "Enable **automatic app updates** in Play Store so security patches apply regularly.",
      "If the box feels slow, close background apps or choose a lightweight IPTV player from your provider’s list.",
    ],
  },
  {
    id: "windows-pc",
    title: "Windows PC",
    intro:
      "Watching IPTV on a Windows PC or laptop is ideal for multitasking, testing playlists, or using a large monitor. You can use VLC for simple M3U playback or a dedicated IPTV Smarters desktop build. This section explains how to watch IPTV on laptop and desktop systems with clear, low-jargon steps.",
    steps: [
      "Download a trusted **IPTV player** for Windows—common options include **VLC Media Player**, **IPTV Smarters** (if offered for Windows), or your provider’s desktop app. Always use the official site or Microsoft Store.",
      "Run the installer, accept the license, and **install** to the default folder. Launch the application from the Start menu.",
      "Open the app’s **settings** or **playlist** section. Choose **Add playlist**, **Xtream API**, or **Open network stream** depending on what your provider sent.",
      "Enter your **M3U URL** or **username, password, and server URL**. For VLC, you may use *Media → Open Network Stream* and paste an M3U link.",
      "Save the profile and **load the playlist**. Wait for channels to parse—VLC may show a flat list while dedicated apps show groups.",
      "Select a channel to test playback. If audio or video stutters, update **graphics drivers** and try hardware acceleration on/off in the player settings.",
      "Bookmark the playlist or export a backup if the app allows it, then **start streaming** whenever you’re ready.",
    ],
    tips: [
      "Use a **wired Ethernet** connection on desktops for the steadiest bitrate during peak hours.",
      "Keep Windows Update and your IPTV app current to avoid codec or TLS issues with HTTPS streams.",
    ],
  },
  {
    id: "formuler-device",
    title: "Formuler Device",
    intro:
      "Formuler set-top boxes are built for IPTV, with **MyTVOnline** as the flagship portal app. Learning Formuler IPTV setup is quick: add your provider’s portal, sign in, and enjoy a polished EPG-focused experience. This MyTVOnline IPTV guide assumes a recent Formuler model with the latest firmware.",
    steps: [
      "Power on your **Formuler** and connect it to your TV and network. Complete any initial Android setup prompts.",
      "From the home screen, open **MyTVOnline** (or **MyTVOnline 2**). If prompted, allow network access.",
      "Select **Add Portal** (or **Manage Portals** → **Add**). Give the portal a friendly name you’ll recognize.",
      "Enter the **portal URL** exactly as your IPTV provider supplied—no missing slashes or spaces.",
      "Choose the correct **login type** (e.g. Stalker, Xtream Codes, or M3U) and input **username** and **password** if required.",
      "Save the portal and return to the main screen. The app will **load channels** and EPG data—first sync can take a few minutes.",
      "Open the **TV guide**, pick a channel, and confirm playback. Use **recording** or **timeshift** features if your subscription includes them, then **start watching**.",
    ],
    tips: [
      "Update **MyTVOnline** and **Formuler firmware** from official sources for the best compatibility with new codecs.",
      "Back up portal settings before factory reset so you can restore quickly.",
    ],
  },
] as const;
