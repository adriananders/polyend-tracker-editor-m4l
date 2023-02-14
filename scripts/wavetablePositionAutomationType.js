function msg_int(msg) {
	const parameter = "wavetablePosition";
	const p = this.patcher;
	const amount = p.getnamed(parameter + "Amount");
	const attack = p.getnamed(parameter + "Attack");
	const decay = p.getnamed(parameter + "Decay");
	const sustain = p.getnamed(parameter + "Sustain");
	const release = p.getnamed(parameter + "Release");
	const adsr = p.getnamed(parameter + "ADSR");
	if (msg === 0) {
		amount.message("hidden", true);
		attack.message("hidden", true);
		decay.message("hidden", true);
		sustain.message("hidden", true);
		release.message("hidden", true);
		adsr.message("hidden", true);
	}
	if (msg === 1) {
		amount.message("hidden", false);
		attack.message("hidden", false);
		decay.message("hidden", false);
		sustain.message("hidden", false);
		release.message("hidden", false);
		adsr.message("hidden", false);
	}
	if (msg === 2) {
		amount.message("hidden", false);
		attack.message("hidden", false);
		decay.message("hidden", false);
		sustain.message("hidden", true);
		release.message("hidden", true);
		adsr.message("hidden", true);
	}
}