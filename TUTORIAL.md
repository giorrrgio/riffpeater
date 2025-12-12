# RiffPeater Tutorial

A comprehensive guide to mastering RiffPeater - your ultimate video loop player for guitar practice.

**Live App:** [https://giorrrgio.github.io/riffpeater/](https://giorrrgio.github.io/riffpeater/)

---

## Table of Contents

1. [What is RiffPeater?](#what-is-riffpeater)
2. [Quick Start](#quick-start)
3. [Basic Loop Setup](#basic-loop-setup)
4. [Speed Automation](#speed-automation)
5. [Managing Sessions & Loops](#managing-sessions--loops)
6. [Import & Export](#import--export)
7. [Theater Mode](#theater-mode)
8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Tips & Best Practices](#tips--best-practices)

---

## What is RiffPeater?

RiffPeater is a specialized video loop player designed for musicians who want to practice challenging passages from YouTube videos. Key features include:

- **Precise Loop Points** - Set exact start/end times for any video section
- **Speed Automation** - Gradually increase playback speed as you improve
- **Session Management** - Save multiple practice sessions with thumbnails and notes
- **Loop Library** - Store multiple loops per video with custom titles
- **Import/Export** - Back up or share your practice sessions as JSON files
- **Theater Mode** - Distraction-free fullscreen practice view
- **Multi-language Support** - Available in English, Italian, and Spanish

---

## Quick Start

### Loading Your First Video

1. **Find a YouTube Video ID**
   - From any YouTube URL like `https://www.youtube.com/watch?v=X8bcsMif73M`
   - Copy just the ID part: `X8bcsMif73M`

2. **Load the Video**
   - Paste the video ID into the input field at the top
   - Click **"Load & Reset"** to load the video
   - The video player will appear with controls

3. **Try the Sample Session** (Optional)
   - Visit `/?sampleSession=true` to auto-load a demo session
   - Or click **"Import JSON"** in Saved Sessions and select `sample-session.json`

---

## Basic Loop Setup

### Method 1: Set Loop Points While Playing

1. **Start Playback**
   - Click the **Play** button
   - Let the video play to the section you want to practice

2. **Set Loop Start**
   - When playback reaches your desired start point, click **"Set from current"** under Loop Start
   - The current time will be captured

3. **Set Loop End**
   - Continue playing to your desired end point
   - Click **"Set from current"** under Loop End

4. **Name Your Loop** (Optional)
   - Enter a descriptive title in the "Loop title" field (e.g., "Final solo", "Intro riff")
   - Add practice notes in the "Notes" field

5. **Start Looping**
   - Click **"Start Loop"** to begin continuous loop playback
   - Click **"Stop Loop"** to end

### Method 2: Manual Time Entry

1. **Scrub Through Video**
   - Use the seek slider to find your start point
   - Note the timestamp

2. **Enter Times Directly**
   - Type the start time (in seconds) into the Loop Start field
   - Type the end time into the Loop End field
   - Click **"Start Loop"**

### Adjusting Loop Boundaries

- **Fine-tune Start/End** - Click the `+0.1s` / `-0.1s` buttons for precise adjustments
- **Jump to Loop Points** - Click **"Go to loop start"** or **"Go to loop end"** to seek instantly
- **Visual Feedback** - The seek bar highlights your loop region

---

## Speed Automation

Practice technique: Start slow, gradually increase speed as muscle memory develops.

### Setting Up Automation

1. **Expand Speed & Automation Panel**
   - Click the **"Speed & Automation"** section header

2. **Configure Automation Parameters**
   - **Speed** - Current playback rate (1.0 = normal, 0.5 = half speed, 2.0 = double)
   - **Increase every N loops** - How many loops before speed increases (e.g., 5)
   - **Speed increment** - How much to add each time (e.g., 0.05 = 5%)
   - **Max speed** - Automation stops at this speed (e.g., 1.0 for normal speed)

3. **Example Configuration**
   ```
   Current Speed: 0.5
   Increase every: 5 loops
   Speed increment: 0.05
   Max speed: 1.0
   ```
   - This plays 5 loops at 0.5x, then increases to 0.55x, continues until reaching 1.0x

4. **Start Automated Practice**
   - Click **"Start Loop"** with automation configured
   - Watch the speed gradually increase as you nail each repetition
   - Automation stops automatically at max speed

### Manual Speed Control

- **Quick Adjustments** - Use the `+0.05` / `-0.05` buttons
- **Reset** - Set speed back to 1.0 with the reset button
- **Fine Control** - Type exact values (0.25 to 2.0 supported by YouTube)

---

## Managing Sessions & Loops

### Understanding Sessions vs Loops

- **Session** - Represents a complete practice session for one video
  - Contains: Video ID, thumbnail, title, date created
  - Can hold multiple loops
- **Loop** - A specific section you've marked for practice
  - Contains: Title, start/end times, notes, practice stats

### Saving Your Work

1. **Save Current Loop**
   - After setting loop points and title, click **"Save loop"**
   - Loop appears in the "Current Session Loops" list
   - Loop counter shows total loops for this session

2. **Save Entire Session**
   - Click **"Save Session"** in the Saved Sessions panel
   - Session appears with thumbnail and video title
   - All loops are preserved with the session

### Loading Sessions & Loops

1. **View All Sessions**
   - Scroll to **"Saved Sessions"** panel
   - See thumbnails and titles of all saved sessions

2. **Load Full Session**
   - Click **"Load"** next to any session
   - Video loads with the first loop in that session
   - All loops become available

3. **Load Specific Loop**
   - Expand a session to view its loops (click the session card)
   - Click **"Load"** next to any individual loop
   - Video seeks to that loop's start point with correct boundaries

### Organizing Your Practice

- **Delete Loops** - Click the **trash icon** next to any loop
- **Delete Sessions** - Click the **trash icon** next to any session
- **Session Stats** - View loop count and last modified date
- **Naming Convention** - Use descriptive names like "Verse Riff", "Bridge Transition"

---

## Import & Export

### Exporting Sessions (Backup/Share)

1. **Export All Sessions**
   - Click **"Export JSON"** in Saved Sessions
   - Downloads a `riffpeater-sessions.json` file
   - Contains all sessions, loops, notes, and timestamps

2. **Use Cases**
   - **Backup** - Save your practice library before clearing browser data
   - **Share** - Send to bandmates or students
   - **Migrate** - Move between computers

### Importing Sessions

1. **Import from File**
   - Click **"Import JSON"** in Saved Sessions
   - Select a previously exported `.json` file
   - Sessions merge with existing data (no duplicates based on ID)

2. **Sample Session**
   - Import `sample-session.json` from the repository
   - Includes a pre-configured practice session
   - Great for learning the app's features

3. **URL Import** (Auto-load)
   - Share app URL with `?sampleSession=true` parameter
   - Recipient automatically gets sample session on page load
   - Perfect for onboarding new users

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play / Pause video |
| **←** / **→** | Seek backward / forward 5 seconds |
| **,** / **.** | Previous / Next frame (when paused) |
| **↑** / **↓** | Increase / Decrease volume |
| **F** | Fullscreen |
| **M** | Mute / Unmute |
| **0-9** | Jump to 0%, 10%, 20%... 90% of video |

*Note: These are standard YouTube player shortcuts and work when the player has focus.*

---

## Tips & Best Practices

### Practice Workflow

1. **Start Slow (0.5x - 0.7x)**
   - Master technique before building speed
   - Focus on accuracy over tempo

2. **Use Automation Wisely**
   - Set increments of 0.05 (5%) for gradual progression
   - Increase every 5-10 loops depending on difficulty
   - Set max speed to your target tempo

3. **Take Notes**
   - Document fingerings, trouble spots, or insights
   - Review notes when returning to loops later

4. **Organize by Song/Video**
   - One session per video/song
   - Multiple loops for different sections (intro, verse, solo, etc.)

### Technical Tips

- **Browser Compatibility** - Works best in Chrome, Firefox, Edge
- **Internet Connection** - Required for YouTube video streaming
- **Local Storage** - Sessions saved to browser (export for backup!)
- **Performance** - Close other tabs if playback stutters

### Advanced Techniques

- **Micro Loops** - Set very short loops (2-3 seconds) for difficult passages
- **Overlap Loops** - Create loops that slightly overlap to practice transitions
- **Speed Plateaus** - Practice multiple loops at the same speed before increasing
- **Session Dating** - Export sessions weekly for progressive backup

### Common Issues

**Q: Video won't load**
- Check internet connection
- Verify video ID is correct (11 characters)
- Ensure video isn't private or region-locked

**Q: Loop points reset after closing browser**
- Click "Save loop" and "Save Session" before closing
- Or export JSON for manual backup

**Q: Speed automation not working**
- Ensure "Increase every N loops" is > 0
- Check that max speed > current speed
- Verify loop is active (not just playing normally)

**Q: Lost all my sessions**
- Browser data cleared = local storage wiped
- Always export JSON periodically as backup
- Consider bookmarking export files by date

---

## Video Walkthrough

### Complete Tutorial: Configure and Save a Loop

Follow these steps to create your first practice loop with visual guidance:

#### 1. Paste Video ID into Input

Enter `X8bcsMif73M` into the video ID input field.

![Step 1 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/dc5e366c-8974-41ff-8f21-335071d1f2e0/41b56a1c-a201-4876-bcbe-a06a373d566e.png?crop=focalpoint&fit=crop&fp-x=0.3183&fp-y=0.8183&fp-z=1.4225&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=199&mark-y=498&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODgmaD01NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 2. Click on Load & Reset

Load the video and reset all loop settings to start fresh.

![Step 2 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/83a82ef1-1d8b-42a4-bceb-5c25bcb3e93f/5fcf5cd7-f30f-4f92-a577-42715a58b6f7.png?crop=focalpoint&fit=crop&fp-x=0.5659&fp-y=0.8194&fp-z=2.5756&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=464&mark-y=330&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNzMmaD05OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 3. Click on Play

Start video playback to find the section you want to practice.

![Step 3 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/7ae31ead-4978-42e9-a044-12b451a88c06/2cddb795-f2f4-4eb4-8624-52a4807883d1.png?crop=focalpoint&fit=crop&fp-x=0.3634&fp-y=0.5467&fp-z=2.7665&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=518&mark-y=294&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNjQmaD0xMjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 4. Scrub to Your Desired Start Point

Use the seek slider to navigate to where you want the loop to begin.

![Step 4 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/2c32590c-b4fa-4fc2-9887-73812b24bf68/8d4601c9-b9d3-451b-8c59-769f9f895506.png?crop=focalpoint&fit=crop&fp-x=0.3637&fp-y=0.3529&fp-z=1.2871&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=193&mark-y=316&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz03MzcmaD0xMyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 5. Set Loop Start - Click "Set from current"

Capture the current playback position as your loop start point.

![Step 5 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/61ffa351-3d0a-477d-a365-ab3aefc51326/bcab0c13-cca2-4ea7-85d5-54a06f0e7f4f.png?crop=focalpoint&fit=crop&fp-x=0.1583&fp-y=0.6218&fp-z=2.6105&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=366&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNjAmaD04MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 6. Set Loop End - Click "Set from current"

Navigate to where you want the loop to end, then capture that position.

![Step 6 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/8e58d089-81c7-46d8-b0ab-2e980a8cbee9/56897922-ec88-4677-8c57-717cd667ca50.png?crop=focalpoint&fit=crop&fp-x=0.4075&fp-y=0.6218&fp-z=2.6105&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=470&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNjAmaD04MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 7. Type a Loop Title

Give your loop a descriptive name like "Final solo" so you can find it later.

![Step 7 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/72c2642a-9470-4eba-a91f-9a66554436fc/167caaff-fd17-45ec-8b2c-86402c34a9ab.png?crop=focalpoint&fit=crop&fp-x=0.2943&fp-y=0.5516&fp-z=1.5931&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=249&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MjYmaD02MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 8. Click "Save loop"

Save this loop to the current session so you can return to it anytime.

![Step 8 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/03d0b822-3e08-4f32-8c83-2e51c4a546d5/50dd5dca-3d9f-4ab2-b190-8eecc2b7784b.png?crop=focalpoint&fit=crop&fp-x=0.8274&fp-y=0.5505&fp-z=2.8091&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=493&mark-y=299&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDkmaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

#### 9. Click "Save Session"

Persist the entire session (with all its loops) to local storage.

![Step 9 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/da0d2a35-c1ae-49c9-9f06-63dd21a5824b/e80fb0f7-c315-400e-bea0-05c70a83fe3a.png?crop=focalpoint&fit=crop&fp-x=0.1694&fp-y=0.8535&fp-z=2.4684&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=346&mark-y=406&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMTEmaD05NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 10. Load a Saved Session

Navigate to the Saved Sessions panel and click "Load" on any session.

![Step 10 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/fec4dd56-0017-4061-9156-b7e37093e65b/18e51ae8-945d-40a3-a660-5aee44317ff5.png?crop=focalpoint&fit=crop&fp-x=0.7949&fp-y=0.4341&fp-z=2.8985&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=523&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTMmaD05MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

#### 11. Load a Specific Loop

Expand a session to see its loops, then click "Load" on any individual loop.

![Step 11 screenshot](https://images.tango.us/workflows/6ea465a4-33a9-4252-97f9-8ec5b5066283/steps/700c3d03-49ef-4816-872a-51c9a44d9eda/846d9ab9-86d2-421b-889a-c1ed736de2c0.png?crop=focalpoint&fit=crop&fp-x=0.7385&fp-y=0.7382&fp-z=3.5174&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=507&mark-y=299&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xODYmaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

---

*For the interactive version of this walkthrough, visit the [complete Tango workflow](https://app.tango.us/app/workflow/6ea465a4-33a9-4252-97f9-8ec5b5066283).*

---

## Support & Feedback

If RiffPeater helps your practice sessions, consider supporting development:

[![Buy Me a Coffee](https://storage.ko-fi.com/cdn/kofi1.png?v=6)](https://ko-fi.com/U7U21PYGKF)

**Questions or Issues?** Open an issue on the GitHub repository or submit feedback through the app.

---

**Happy Practicing! 🎸**

*Created with [Tango.ai](https://tango.ai?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links) | Enhanced for comprehensive learning*
