function msg_int(msg) {
	const p = this.patcher;
	const objects = {
		volumeType: {
			object: this.patcher.getnamed("volumeType"),
			x: 200,
			y: 202,
		},
		volumeAmount: {
			object: this.patcher.getnamed("volumeAmount"),
			x: 200,
			y: 258,
		},
		volumeAttack: {
			object: this.patcher.getnamed("volumeAttack"),
			x: 248,
			y: 202,
		},
		volumeDecay: {
			object: this.patcher.getnamed("volumeDecay"),
			x: 298,
			y: 202,
		},
		volumeSustain: {
			object: this.patcher.getnamed("volumeSustain"),
			x: 348,
			y: 202,
		},
		volumeRelease: {
			object: this.patcher.getnamed("volumeRelease"),
			x: 398,
			y: 202,
		},
		volumeADSR: {
			object: this.patcher.getnamed("volumeADSR"),
			x: 248,
			y: 250,
		},
		panningType: {
			object: this.patcher.getnamed("panningType"),
			x: 200,
			y: 402,
		},
		panningAmount: {
			object: this.patcher.getnamed("panningAmount"),
			x: 200,
			y: 458,
		},
		panningAttack: {
			object: this.patcher.getnamed("panningAttack"),
			x: 248,
			y: 402,
		},
		panningDecay: {
			object: this.patcher.getnamed("panningDecay"),
			x: 298,
			y: 402,
		},
		panningSustain: {
			object: this.patcher.getnamed("panningSustain"),
			x: 348,
			y: 402,
		},
		panningRelease: {
			object: this.patcher.getnamed("panningRelease"),
			x: 398,
			y: 402,
		},
		panningADSR: {
			object: this.patcher.getnamed("panningADSR"),
			x: 248,
			y: 450,
		},
		cutoffType: {
			object: this.patcher.getnamed("cutoffType"),
			x: 200,
			y: 602,
		},
		cutoffAmount: {
			object: this.patcher.getnamed("cutoffAmount"),
			x: 200,
			y: 658,
		},
		cutoffAttack: {
			object: this.patcher.getnamed("cutoffAttack"),
			x: 248,
			y: 602,
		},
		cutoffDecay: {
			object: this.patcher.getnamed("cutoffDecay"),
			x: 298,
			y: 602,
		},
		cutoffSustain: {
			object: this.patcher.getnamed("cutoffSustain"),
			x: 348,
			y: 602,
		},
		cutoffRelease: {
			object: this.patcher.getnamed("cutoffRelease"),
			x: 398,
			y: 602,
		},
		cutoffADSR: {
			object: this.patcher.getnamed("cutoffADSR"),
			x: 248,
			y: 650,
		},
		wavetablePositionType: {
			object: this.patcher.getnamed("wavetablePositionType"),
			x: 200,
			y: 802,
		},
		wavetablePositionAmount: {
			object: this.patcher.getnamed("wavetablePositionAmount"),
			x: 200,
			y: 858,
		},
		wavetablePositionAttack: {
			object: this.patcher.getnamed("wavetablePositionAttack"),
			x: 248,
			y: 802,
		},
		wavetablePositionDecay: {
			object: this.patcher.getnamed("wavetablePositionDecay"),
			x: 298,
			y: 802,
		},
		wavetablePositionSustain: {
			object: this.patcher.getnamed("wavetablePositionSustain"),
			x: 348,
			y: 802,
		},
		wavetablePositionRelease: {
			object: this.patcher.getnamed("wavetablePositionRelease"),
			x: 398,
			y: 802,
		},
		wavetablePositionADSR: {
			object: this.patcher.getnamed("wavetablePositionADSR"),
			x: 248,
			y: 850,
		},
		granularPositionType: {
			object: this.patcher.getnamed("granularPositionType"),
			x: 200,
			y: 1002,
		},
		granularPositionAmount: {
			object: this.patcher.getnamed("granularPositionAmount"),
			x: 200,
			y: 1058,
		},
		granularPositionAttack: {
			object: this.patcher.getnamed("granularPositionAttack"),
			x: 248,
			y: 1002,
		},
		granularPositionDecay: {
			object: this.patcher.getnamed("granularPositionDecay"),
			x: 298,
			y: 1002,
		},
		granularPositionSustain: {
			object: this.patcher.getnamed("granularPositionSustain"),
			x: 348,
			y: 1002,
		},
		granularPositionRelease: {
			object: this.patcher.getnamed("granularPositionRelease"),
			x: 398,
			y: 1002,
		},
		granularPositionADSR: {
			object: this.patcher.getnamed("granularPositionADSR"),
			x: 248,
			y: 1050,
		},
		finetuneType: {
			object: this.patcher.getnamed("finetuneType"),
			x: 200,
			y: 1202,
		},
		finetuneAmount: {
			object: this.patcher.getnamed("finetuneAmount"),
			x: 200,
			y: 1258,
		},
		finetuneAttack: {
			object: this.patcher.getnamed("finetuneAttack"),
			x: 248,
			y: 1202,
		},
		finetuneDecay: {
			object: this.patcher.getnamed("finetuneDecay"),
			x: 298,
			y: 1202,
		},
		finetuneSustain: {
			object: this.patcher.getnamed("finetuneSustain"),
			x: 348,
			y: 1202,
		},
		finetuneRelease: {
			object: this.patcher.getnamed("finetuneRelease"),
			x: 398,
			y: 1202,
		},
		finetuneADSR: {
			object: this.patcher.getnamed("finetuneADSR"),
			x: 248,
			y: 1250,
		},
	}

	const visiblePosition = {
		type: {
			x: 1475,
			y: 37,
		},
		amount: {
			x: 1475,
			y: 94,
		},
		attack: {
			x: 1523,
			y: 37,
		},
		decay: {
			x: 1573,
			y: 37,
		},
		sustain: {
			x: 1623,
			y: 37,
		},
		release: {
			x: 1673,
			y: 37,
		},
		adsr: {
			x: 1518,
			y: 85,
		},
	}
	var parameterName;
	switch (msg) {
		case 0:
			parameterName = "volume";
			break;
		case 1:
			parameterName = "panning";
			break;
		case 2:
			parameterName = "cutoff";
			break;
		case 3:
			parameterName = "wavetablePosition";
			break;
		case 4:
			parameterName = "granularPosition";
			break;
		case 5:
			parameterName = "finetune";
	}
	objects[parameterName + "Type"].x = visiblePosition.type.x;
	objects[parameterName + "Amount"].x = visiblePosition.amount.x;
	objects[parameterName + "Attack"].x = visiblePosition.attack.x;
	objects[parameterName + "Decay"].x = visiblePosition.decay.x;
	objects[parameterName + "Sustain"].x = visiblePosition.sustain.x;
	objects[parameterName + "Release"].x = visiblePosition.release.x;
	objects[parameterName + "ADSR"].x = visiblePosition.adsr.x;
		
	objects[parameterName + "Type"].y = visiblePosition.type.y;
	objects[parameterName + "Amount"].y = visiblePosition.amount.y;
	objects[parameterName + "Attack"].y = visiblePosition.attack.y;
	objects[parameterName + "Decay"].y = visiblePosition.decay.y;
	objects[parameterName + "Sustain"].y = visiblePosition.sustain.y;
	objects[parameterName + "Release"].y = visiblePosition.release.y;
	objects[parameterName + "ADSR"].y = visiblePosition.adsr.y;
	
	// Really sucks that Max/MSP only supports JS 1.6 -> no object looping!
	// Also no wrapping of function invocation, so long shitty lines!
	objects.volumeType.object.message("presentation_position", objects.volumeType.x, objects.volumeType.y);
	objects.volumeAmount.object.message("presentation_position", objects.volumeAmount.x, objects.volumeAmount.y);
	objects.volumeAttack.object.message("presentation_position", objects.volumeAttack.x, objects.volumeAttack.y);
	objects.volumeDecay.object.message("presentation_position", objects.volumeDecay.x, objects.volumeDecay.y);
	objects.volumeSustain.object.message("presentation_position", objects.volumeSustain.x, objects.volumeSustain.y);
	objects.volumeRelease.object.message("presentation_position", objects.volumeRelease.x, objects.volumeRelease.y);
	objects.volumeADSR.object.message("presentation_position", objects.volumeADSR.x, objects.volumeADSR.y);
	
	objects.panningType.object.message("presentation_position", objects.panningType.x, objects.panningType.y);
	objects.panningAmount.object.message("presentation_position", objects.panningAmount.x, objects.panningAmount.y);
	objects.panningAttack.object.message("presentation_position", objects.panningAttack.x, objects.panningAttack.y);
	objects.panningDecay.object.message("presentation_position", objects.panningDecay.x, objects.panningDecay.y);
	objects.panningSustain.object.message("presentation_position", objects.panningSustain.x, objects.panningSustain.y);
	objects.panningRelease.object.message("presentation_position", objects.panningRelease.x, objects.panningRelease.y);
	objects.panningADSR.object.message("presentation_position", objects.panningADSR.x, objects.panningADSR.y);
	
	objects.cutoffType.object.message("presentation_position", objects.cutoffType.x, objects.cutoffType.y);
	objects.cutoffAmount.object.message("presentation_position", objects.cutoffAmount.x, objects.cutoffAmount.y);
	objects.cutoffAttack.object.message("presentation_position", objects.cutoffAttack.x, objects.cutoffAttack.y);
	objects.cutoffDecay.object.message("presentation_position", objects.cutoffDecay.x, objects.cutoffDecay.y);
	objects.cutoffSustain.object.message("presentation_position", objects.cutoffSustain.x, objects.cutoffSustain.y);
	objects.cutoffRelease.object.message("presentation_position", objects.cutoffRelease.x, objects.cutoffRelease.y);
	objects.cutoffADSR.object.message("presentation_position", objects.cutoffADSR.x, objects.cutoffADSR.y);
	
	objects.wavetablePositionType.object.message("presentation_position", objects.wavetablePositionType.x, objects.wavetablePositionType.y);
	objects.wavetablePositionAmount.object.message("presentation_position", objects.wavetablePositionAmount.x, objects.wavetablePositionAmount.y);
	objects.wavetablePositionAttack.object.message("presentation_position", objects.wavetablePositionAttack.x, objects.wavetablePositionAttack.y);
	objects.wavetablePositionDecay.object.message("presentation_position", objects.wavetablePositionDecay.x, objects.wavetablePositionDecay.y);
	objects.wavetablePositionSustain.object.message("presentation_position", objects.wavetablePositionSustain.x, objects.wavetablePositionSustain.y);
	objects.wavetablePositionRelease.object.message("presentation_position", objects.wavetablePositionRelease.x, objects.wavetablePositionRelease.y);
	objects.wavetablePositionADSR.object.message("presentation_position", objects.wavetablePositionADSR.x, objects.wavetablePositionADSR.y);
	
	objects.granularPositionType.object.message("presentation_position", objects.granularPositionType.x, objects.granularPositionType.y);
	objects.granularPositionAmount.object.message("presentation_position", objects.granularPositionAmount.x, objects.granularPositionAmount.y);
	objects.granularPositionAttack.object.message("presentation_position", objects.granularPositionAttack.x, objects.granularPositionAttack.y);
	objects.granularPositionDecay.object.message("presentation_position", objects.granularPositionDecay.x, objects.granularPositionDecay.y);
	objects.granularPositionSustain.object.message("presentation_position", objects.granularPositionSustain.x, objects.granularPositionSustain.y);
	objects.granularPositionRelease.object.message("presentation_position", objects.granularPositionRelease.x, objects.granularPositionRelease.y);
	objects.granularPositionADSR.object.message("presentation_position", objects.granularPositionADSR.x, objects.granularPositionADSR.y);
	
	objects.finetuneType.object.message("presentation_position", objects.finetuneType.x, objects.finetuneType.y);
	objects.finetuneAmount.object.message("presentation_position", objects.finetuneAmount.x, objects.finetuneAmount.y);
	objects.finetuneAttack.object.message("presentation_position", objects.finetuneAttack.x, objects.finetuneAttack.y);
	objects.finetuneDecay.object.message("presentation_position", objects.finetuneDecay.x, objects.finetuneDecay.y);
	objects.finetuneSustain.object.message("presentation_position", objects.finetuneSustain.x, objects.finetuneSustain.y);
	objects.finetuneRelease.object.message("presentation_position", objects.finetuneRelease.x, objects.finetuneRelease.y);
	objects.finetuneADSR.object.message("presentation_position", objects.finetuneADSR.x, objects.finetuneADSR.y);
}