# polyend-tracker-editor-m4l
An Ableton Live 11/Max For Live Unidirectional Editor For [Polyend Tracker](https://polyend.com/tracker).

<h1>User Guide</h1>

<h2>Requirements</h2>
<ul>Ableton Live 11</ul>
<ul>Max For Live 8</ul>
<h2>Usage</h2>
Add the file polyend-tracker-editor.amxd to your favorite Max 4 Live MIDI effects path.<br>

The editor controls are mapped to the Polyend Tracker's MIDI Input [mapping](https://polyend.com/manuals/tracker/#appendix--midi-cc-input-chart).<br>

Ensure that the Tracker's MIDI CC in is set to either USB, MIDI In Jack, or Both for controls.<br>

To Sync all parameters of a certain block (Performance, Mixer, or MIDI Synth), click on the corresponding "Sync" button in the top corner of each section.<br>

<h2>Known Limitations</h2>
<ul>Polyend Tracker as of 2/14/2023 is NOT multi-timbral. What this means is that the MIDI Synth Mode parameters control the currently active instrument, please be aware of this before messing up your set!</ul>
<ul>Polyend Tracker has no MIDI loopback of CC for the input parameters. What this means is that mapping the editor to the Polyend Tracker is Uni-directional, as in the values on the device will not always match the project's in the Tracker. This is not a bug, but a limitation of the uni-directional nature of MIDI mapping.</ul>
