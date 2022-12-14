/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/players/Protracker/ProtrackerAudioWorkletProcessor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PlayerStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatus", function() { return PlayerStatus; });
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus["STOPPED"] = "STOPPED";
    PlayerStatus["PAUSED"] = "PAUSED";
    PlayerStatus["PLAYING"] = "PLAYING";
    PlayerStatus["ERROR"] = "ERROR";
})(PlayerStatus || (PlayerStatus = {}));


/***/ }),

/***/ "./src/players/Player/Player.ts":
/*!**************************************!*\
  !*** ./src/players/Player/Player.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");

class Player {
    constructor(audioContext) {
        this.status = _constants__WEBPACK_IMPORTED_MODULE_0__["PlayerStatus"].STOPPED;
        this.audioContext = audioContext;
    }
    stop() {
        this.pause();
        this.reset();
        this.status = _constants__WEBPACK_IMPORTED_MODULE_0__["PlayerStatus"].STOPPED;
    }
    ;
}
;


/***/ }),

/***/ "./src/players/Protracker/Protracker.ts":
/*!**********************************************!*\
  !*** ./src/players/Protracker/Protracker.ts ***!
  \**********************************************/
/*! exports provided: defaultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Protracker; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/players/Protracker/constants.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player/Player */ "./src/players/Player/Player.ts");
/* harmony import */ var _ProtrackerChannel_ProtrackerChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProtrackerChannel/ProtrackerChannel */ "./src/players/Protracker/ProtrackerChannel/ProtrackerChannel.ts");
/* harmony import */ var _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProtrackerReader */ "./src/players/Protracker/ProtrackerReader.ts");
/* harmony import */ var _effects_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/utils */ "./src/players/Protracker/effects/utils.ts");






const defaultState = {
    currentBufferSamplePosition: 0,
    currentPatternSequenceIndex: 0,
    currentRowIndex: 0,
    currentSubtrack: 0,
    currentTickSamplePosition: 0,
    currentTick: 0,
    patternDelay: -1,
    patternLoopCount: 0,
    patternLoopRowIndex: 0,
    rowsPerBeat: 4,
    samplesPerTick: 0,
    speed: 6,
    tempo: 125,
};
class Protracker extends _Player_Player__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(audioContext, fileData) {
        super(audioContext);
        this.amigaClockSpeed = _constants__WEBPACK_IMPORTED_MODULE_0__["AMIGA_CLOCK_SPEED_PAL"];
        this.channels = [];
        this.state = Object.assign({}, defaultState);
        // Get all of the read-only properties of the song from the file
        this.song = {
            channelCount: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getChannelCount"](fileData),
            patternCount: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getPatternCount"](fileData),
            patterns: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getPatterns"](fileData),
            patternSequence: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getPatternSequence"](fileData),
            rowsPerPattern: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getRowsPerPattern"](fileData),
            samples: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getSamples"](fileData, true),
            signature: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getSignature"](fileData),
            songLength: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getUsedPatternSequenceLength"](fileData),
            songLoop: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getSongLoopPatternSequenceIndex"](fileData),
            title: _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__["getTitle"](fileData),
        };
        this._setupChannels(this.song.channelCount);
        this.state.samplesPerTick = this._calculateSamplesPerTick();
    }
    ;
    // ****************************
    // *     Public functions     *
    // ****************************
    getChannels() {
        return this.channels;
    }
    ;
    getPatternDelay() {
        return this.state.patternDelay;
    }
    getPatternLoopCount() {
        return this.state.patternLoopCount;
    }
    getPatternLoopRowIndex() {
        return this.state.patternLoopRowIndex;
    }
    getPlaybackState() {
        return this.state;
    }
    ;
    getPlaybackStatus() {
        return this.status;
    }
    ;
    getRowPosition() {
        const currentSamples = (this.state.currentTick * this.state.samplesPerTick) + this.state.currentTickSamplePosition;
        return currentSamples / (this.state.speed * this.state.samplesPerTick);
    }
    getSong() {
        return this.song;
    }
    ;
    getSongLoopIndex() {
        return this.song.songLoop;
    }
    hasSubtracks() {
        // TODO: Add subtrack support
        return false;
    }
    ;
    nextPattern() {
        return this.setPatternSequenceIndex(this.state.currentPatternSequenceIndex + 1);
    }
    ;
    nextRow() {
        return this.setRowIndex(this.state.currentRowIndex + 1) || this.nextPattern();
    }
    ;
    nextSubtrack() {
        return this.setSubtrack(this.state.currentSubtrack + 1);
    }
    ;
    nextTick() {
        return this.setTick(this.state.currentTick + 1) || this.nextRow();
    }
    ;
    pause() {
        if (this.status === _constants__WEBPACK_IMPORTED_MODULE_1__["PlayerStatus"].PLAYING) {
            this.status = _constants__WEBPACK_IMPORTED_MODULE_1__["PlayerStatus"].PAUSED;
            return true;
        }
        return false;
    }
    ;
    play() {
        this.status = _constants__WEBPACK_IMPORTED_MODULE_1__["PlayerStatus"].PLAYING;
        return true;
    }
    ;
    previousPattern() {
        return this.setPatternSequenceIndex(this.state.currentPatternSequenceIndex - 1);
    }
    ;
    previousRow() {
        if (!this.setRowIndex(this.state.currentRowIndex - 1)) {
            return this.previousPattern() && this.setRowIndex(this.song.rowsPerPattern - 1);
        }
        return true;
    }
    ;
    previousSubtrack() {
        return this.setSubtrack(this.state.currentSubtrack - 1);
    }
    ;
    previousTick() {
        if (!this.setTick(this.state.currentTick - 1)) {
            if (this.previousRow()) {
                this.setTick(this.state.speed - 1);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    ;
    reset() {
        this.state = Object.assign(Object.assign({}, defaultState), { currentSubtrack: this.state.currentSubtrack });
        this.channels.forEach(channel => channel.reset());
        this.state.samplesPerTick = this._calculateSamplesPerTick();
    }
    ;
    setAmigaClockSpeed(clockSpeed) {
        this.amigaClockSpeed = clockSpeed;
    }
    ;
    setPatternDelay(ticks) {
        this.state.patternDelay = ticks;
    }
    setPatternLoopCount(count) {
        this.state.patternLoopCount = count;
    }
    setPatternLoopRowIndex(index) {
        this.state.patternLoopRowIndex = index;
    }
    setPatternSequenceIndex(index, zeroOnFail = false) {
        if (typeof index !== 'undefined' && typeof this.song.patternSequence[index] !== 'undefined' && index <= this.song.songLength - 1) {
            this.state.currentPatternSequenceIndex = index;
            this.setRowIndex(0);
            return true;
        }
        if (zeroOnFail) {
            this.state.currentPatternSequenceIndex = 0;
            this.setRowIndex(0);
            return true;
        }
        return false;
    }
    ;
    setRowIndex(index) {
        if (this._getCurrentPattern()[index]) {
            this.state.currentRowIndex = index;
            this.setPatternLoopRowIndex(0);
            this.setTick(0);
            return true;
        }
        return false;
    }
    ;
    setSpeed(speed) {
        this.state.speed = speed;
    }
    setSubtrack(index) {
        // TODO: Add subtrack support
        return false;
    }
    ;
    setTempo(tempo) {
        this.state.tempo = tempo;
        this.state.samplesPerTick = this._calculateSamplesPerTick();
    }
    setTick(tick) {
        if (tick < this.state.speed && tick >= 0) {
            this.state.currentTick = tick;
            this.state.currentTickSamplePosition = 0;
            return true;
        }
        return false;
    }
    ;
    skipToPosition(newPosition) {
        return false;
    }
    ;
    // ***************************
    // *     Event functions     *
    // ***************************
    onAudioProcess(channelBuffers) {
        let stillMoreToPlay = true;
        if (!this._isDelayed()) {
            if (this._isStartofRow()) {
                this._assignInstructionsToChannels(this._getCurrentRow());
                this._processEffects('onRowStart');
            }
            if (this._isStartOfTick()) {
                this._processEffects('onTickStart');
            }
        }
        this._fillBuffers(channelBuffers);
        if (!this._isDelayed() && this._isEndOfRow()) {
            this._processEffects('onRowEnd');
        }
        if (this._isEndOfTick()) {
            stillMoreToPlay = this._goToNextPosition();
        }
        if (stillMoreToPlay) {
            if (!this._isBufferFull(channelBuffers[0].length)) {
                stillMoreToPlay = this.onAudioProcess(channelBuffers);
            }
            else {
                this.state.currentBufferSamplePosition = 0;
            }
        }
        else {
            this.reset();
        }
        return stillMoreToPlay;
    }
    ;
    // *****************************
    // *     Private functions     *
    // *****************************
    _assignInstructionsToChannels(row) {
        this.channels.forEach((channel, index) => {
            const instruction = row[index];
            channel.setInstruction(instruction);
            if (instruction.sampleIndex) {
                // A sampleIndex of 0 means no sample specified, which means that
                // Effectively, the samples coming from the instructions are 1-based.
                // We have to handle this as the sample array is 0-based.
                channel.setSample(this.song.samples[instruction.sampleIndex - 1]);
                channel.resetVolume();
            }
            if (instruction.period && (!Object(_effects_utils__WEBPACK_IMPORTED_MODULE_5__["isTonePortamento"])(instruction.effect))) {
                channel.resetFineTune();
                channel.setOriginalPeriod(instruction.period);
                channel.resetSample();
            }
        });
    }
    _calculateNumberOfSamplesToGenerate(bufferSize) {
        return Math.min(this.state.samplesPerTick - this.state.currentTickSamplePosition, bufferSize - this.state.currentBufferSamplePosition);
    }
    ;
    _calculateSamplesPerTick() {
        const tickDurationMs = (2500 / this.state.tempo);
        return Math.round(this.audioContext.sampleRate * (tickDurationMs / 1000));
    }
    _fillBuffers(channelBuffers) {
        const samplesToGenerate = this._calculateNumberOfSamplesToGenerate(channelBuffers[0].length);
        this.channels.forEach((channel, index) => {
            channel.fillBuffer(channelBuffers[index], this.state.currentBufferSamplePosition, samplesToGenerate);
        });
        this.state.currentTickSamplePosition = this.state.currentTickSamplePosition + samplesToGenerate;
        this.state.currentBufferSamplePosition = this.state.currentBufferSamplePosition + samplesToGenerate;
    }
    _getCurrentPattern() {
        return this.song.patterns[this.song.patternSequence[this.state.currentPatternSequenceIndex]];
    }
    ;
    _getCurrentRow() {
        return this._getCurrentPattern()[this.state.currentRowIndex];
    }
    ;
    _goToNextPosition() {
        let nextPosition;
        if (this._isDelayed()) {
            this.setPatternDelay(this.getPatternDelay() - 1);
            this.state.currentTickSamplePosition = 0;
            return true;
        }
        nextPosition = (this.setTick(this.state.currentTick + 1) ||
            this.setRowIndex(this.state.currentRowIndex + 1) ||
            this.setPatternSequenceIndex(this.state.currentPatternSequenceIndex + 1));
        // If there was no next position to advance to, attempt to loop
        if (!nextPosition && this.song.songLoop !== undefined) {
            return this.setPatternSequenceIndex(this.song.songLoop);
        }
        else {
            return nextPosition;
        }
    }
    ;
    _isBufferFull(bufferSize) {
        return this.state.currentBufferSamplePosition === bufferSize;
    }
    _isDelayed() {
        return this._isEndOfRow() && this.getPatternDelay() >= 0;
    }
    _isEndOfRow() {
        return this.state.currentTick === this.state.speed - 1 && this._isEndOfTick();
    }
    _isEndOfTick() {
        return this.state.currentTickSamplePosition === this.state.samplesPerTick;
    }
    _isStartofRow() {
        return this.state.currentTick === 0 && this.state.currentTickSamplePosition === 0;
    }
    _isStartOfTick() {
        return this.state.currentTickSamplePosition === 0;
    }
    _processEffects(eventName) {
        this.channels.forEach((channel, index) => {
            const channelEffect = channel.getEffect();
            if (channelEffect) {
                switch (eventName) {
                    case 'onRowStart': {
                        channelEffect.onRowStart && channelEffect.onRowStart(this, channel);
                        break;
                    }
                    case 'onRowEnd': {
                        channelEffect.onRowEnd && channelEffect.onRowEnd(this, channel);
                        break;
                    }
                    case 'onTickStart': {
                        channelEffect.onTickStart && channelEffect.onTickStart(this, channel);
                        break;
                    }
                }
            }
        });
    }
    _setupChannels(channelCount) {
        this.channels.length = 0;
        for (let i = 0; i < channelCount; i++) {
            this.channels.push(new _ProtrackerChannel_ProtrackerChannel__WEBPACK_IMPORTED_MODULE_3__["default"](i, this.audioContext.sampleRate, this.amigaClockSpeed));
        }
    }
    ;
}


/***/ }),

/***/ "./src/players/Protracker/ProtrackerAudioWorkletProcessor.ts":
/*!*******************************************************************!*\
  !*** ./src/players/Protracker/ProtrackerAudioWorkletProcessor.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Protracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Protracker */ "./src/players/Protracker/Protracker.ts");

class ProtrackerAudioWorkletProcessor extends AudioWorkletProcessor {
    constructor(config = {}) {
        super(config);
        const audioContext = globalThis; // hack as current scope isnt defined properly
        this.fileData = config.processorOptions.fileData;
        this.player = new _Protracker__WEBPACK_IMPORTED_MODULE_0__["default"](audioContext, this.fileData);
        this.port.onmessage = this.onMessage.bind(this);
    }
    process(inputs, outputs, parameters) {
        const notFinished = this.player.onAudioProcess(outputs.map(output => output[0]));
        if (!notFinished) {
            this.port.postMessage({ message: 'ended' });
        }
        return notFinished;
    }
    onMessage(event) {
        switch (event.data.cmd) {
            case 'play':
                this.player.play();
                break;
            case 'pause':
                this.player.pause();
                break;
            case 'stop':
                this.player.stop();
                break;
            case 'getInfo':
                this.port.postMessage({
                    message: 'songInfo',
                    value: this.player.getSong()
                });
        }
        ;
    }
}
registerProcessor('protracker', ProtrackerAudioWorkletProcessor); /* registerProcessor is global to AudioWorkletProcessor scope */


/***/ }),

/***/ "./src/players/Protracker/ProtrackerChannel/ProtrackerChannel.ts":
/*!***********************************************************************!*\
  !*** ./src/players/Protracker/ProtrackerChannel/ProtrackerChannel.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtrackerChannel; });
/* harmony import */ var _effects_effectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../effects/effectFactory */ "./src/players/Protracker/effects/effectFactory.ts");
/* harmony import */ var _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProtrackerOscillator */ "./src/players/Protracker/ProtrackerOscillator.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/players/Protracker/ProtrackerChannel/utils.ts");



const getDefaultState = () => {
    return {
        effect: undefined,
        fineTune: 0,
        frequency: 0,
        instruction: undefined,
        originalPeriod: 0,
        fineTunedPeriod: 0,
        period: 0,
        sample: undefined,
        sampleHasEnded: false,
        sampleIncrement: 0,
        samplePosition: 0,
        slideRate: 0,
        slideTarget: 0,
        tremolo: new _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_1__["default"],
        vibrato: new _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_1__["default"],
        volume: 64
    };
};
class ProtrackerChannel {
    constructor(id, bufferFrequency, amigaClockSpeed) {
        this.state = getDefaultState();
        this.id = id;
        this.amigaClockSpeed = amigaClockSpeed;
        this.bufferFrequency = bufferFrequency;
        this.reset();
    }
    ;
    // ****************************
    // *     Public functions     *
    // ****************************
    fillBuffer(buffer, bufferStart, samplesToGenerate) {
        const end = Math.min(bufferStart + samplesToGenerate, buffer.length);
        let i = bufferStart;
        // For every sample we need to generate
        for (i; i < end; i++) {
            // Check that we have a sample assigned and that the sample hasn't ended
            if (this.state.sample !== null && !this.state.sampleHasEnded) {
                buffer[i] = this._getSampleValue();
                this._incrementSamplePosition();
            }
            else {
                buffer[i] = 0;
            }
        }
    }
    ;
    getEffect() {
        return this.state.effect;
    }
    ;
    getEffectCode() {
        return this.state.instruction ? this.state.instruction.effect : undefined;
    }
    ;
    getFineTune() {
        return this.state.fineTune;
    }
    ;
    getId() {
        return this.id;
    }
    getInstruction() {
        return this.state.instruction;
    }
    getOriginalPeriod() {
        return this.state.originalPeriod;
    }
    getFineTunedPeriod() {
        return this.state.fineTunedPeriod;
    }
    getPeriod() {
        return this.state.period;
    }
    ;
    getSample() {
        return this.state.sample;
    }
    ;
    getSamplePosition() {
        return this.state.samplePosition;
    }
    getSlideRate() {
        return this.state.slideRate;
    }
    getSlideTarget() {
        return this.state.slideTarget;
    }
    getTremolo() {
        return this.state.tremolo;
    }
    getVibrato() {
        return this.state.vibrato;
    }
    getVolume() {
        return this.state.volume;
    }
    reset() {
        this.state = getDefaultState();
    }
    ;
    resetFineTune() {
        this.state.fineTune = this.state.sample ? this.state.sample.fineTune : 0;
    }
    resetPeriod() {
        this.setPeriod(this.state.fineTunedPeriod);
    }
    resetSample() {
        this.state.sampleHasEnded = false;
        this.state.samplePosition = 0;
        this._calculateSampleIncrement();
    }
    resetVolume() {
        this.state.volume = this.state.sample ? this.state.sample.volume : 64;
    }
    setFineTune(fineTune) {
        this.state.fineTune = fineTune;
        this._calculateFineTunedPeriod();
        this.setPeriod(this.state.fineTunedPeriod);
        this._calculateFrequency();
        this._calculateSampleIncrement();
    }
    ;
    setInstruction(instruction) {
        this.state.instruction = instruction;
        this.state.effect = Object(_effects_effectFactory__WEBPACK_IMPORTED_MODULE_0__["effectFactory"])(instruction.effect);
    }
    setOriginalPeriod(period) {
        this.state.originalPeriod = period;
        this._calculateFineTunedPeriod();
        this.setPeriod(this.state.fineTunedPeriod);
    }
    setPeriod(period) {
        this.state.period = period;
        this._calculateFrequency();
        this._calculateSampleIncrement();
    }
    ;
    setSample(sample) {
        this.state.sample = sample;
    }
    ;
    setSampleAsEnded() {
        this.state.sampleHasEnded = true;
    }
    setSamplePosition(position) {
        this.state.samplePosition = position;
    }
    setSlideRate(rate) {
        this.state.slideRate = rate;
    }
    setSlideTarget(target) {
        this.state.slideTarget = target;
    }
    setVolume(volume) {
        this.state.volume = volume;
    }
    // *****************************
    // *     Private functions     *
    // *****************************
    _calculateFrequency() {
        this.state.frequency = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getFrequency"])(this.amigaClockSpeed, this.state.period);
    }
    ;
    _calculateFineTunedPeriod() {
        this.state.fineTunedPeriod = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getFineTunedPeriod"])(this.state.originalPeriod, this.state.fineTune);
    }
    _calculateSampleIncrement() {
        this.state.sampleIncrement = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSampleIncrementValue"])(this.state.frequency, this.bufferFrequency);
    }
    ;
    _getSampleValue() {
        if (this.state.sample && !this.state.sampleHasEnded) {
            const sample = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSampleValue"])(this.state.sample.audio, this.state.samplePosition);
            return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["applyVolumeToSample"])(sample, this.state.volume);
        }
        return 0;
    }
    ;
    _incrementSamplePosition() {
        if (this.state.sample && !this.state.sampleHasEnded) {
            const { sample, samplePosition, sampleIncrement } = this.state;
            const { nextPosition, sampleHasEnded } = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNextSampleIncrement"])(sample, samplePosition, sampleIncrement);
            this.state.samplePosition = nextPosition;
            this.state.sampleHasEnded = sampleHasEnded;
        }
    }
    ;
}
;


/***/ }),

/***/ "./src/players/Protracker/ProtrackerChannel/utils.ts":
/*!***********************************************************!*\
  !*** ./src/players/Protracker/ProtrackerChannel/utils.ts ***!
  \***********************************************************/
/*! exports provided: applyVolumeToSample, getFineTunedPeriod, getFrequency, getNextSampleIncrement, getSampleEnd, getSampleIncrementValue, getSampleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyVolumeToSample", function() { return applyVolumeToSample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFineTunedPeriod", function() { return getFineTunedPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrequency", function() { return getFrequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextSampleIncrement", function() { return getNextSampleIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleEnd", function() { return getSampleEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleIncrementValue", function() { return getSampleIncrementValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleValue", function() { return getSampleValue; });
/**
 * Applies the given volume to a sample
 * @param sample - Sample value to apply volume to
 * @param volume - The volume value to apply
 */
const applyVolumeToSample = (sample, volume) => {
    return sample * (volume / 64);
};
/**
 * Returns a new fine-tuned period value, based upon given period and finetune parameters
 * @param period - the period value to tune
 * @param fineTune - the finetune value to tune the period by
 */
const getFineTunedPeriod = (period, fineTune = 0) => {
    if (fineTune !== 0) {
        if (fineTune > 0) {
            return period / Math.pow(2, Math.abs(fineTune) / (8 * 12));
        }
        else {
            return period * Math.pow(2, Math.abs(fineTune) / (8 * 12));
        }
    }
    return period;
};
/**
 * Returns the sample frequency for the given amiga clock speed and period value
 * @param amigaClockSpeed - The clock speed the amiga machine is running at (differs slightly for PAL and NTSC)
 * @param period - The period value of the sample being played
 */
const getFrequency = (amigaClockSpeed, period) => {
    return amigaClockSpeed / (period * 2);
};
/**
 * Returns the next position of the sample to be used. Handles sample looping / ending.
 * @param sample - Sample that is being used
 * @param position - The position to start from when incrementing
 * @param increment - The amount to incrememnt the sample position by
 */
const getNextSampleIncrement = (sample, position, increment) => {
    let nextPosition = position + increment;
    let sampleEnd = getSampleEnd(sample);
    let sampleHasEnded = false;
    if (nextPosition >= sampleEnd) {
        if (sample.repeatLength > 2) {
            nextPosition = sample.repeatOffset + (nextPosition - sampleEnd);
        }
        else {
            nextPosition = sampleEnd;
            sampleHasEnded = true;
        }
    }
    return { nextPosition, sampleHasEnded };
};
/**
 * Returns the end value of the sample, taking into account looping.
 * @param sample - The sample to get the end position for
 */
const getSampleEnd = (sample) => {
    if (sample.repeatLength > 2) {
        return sample.repeatOffset + sample.repeatLength;
    }
    return sample.length;
};
/**
 * Returns the value we need to increment the sample position by for the given channel / buffer frequency
 * @param frequency - The frequency the channel is currently running at (see getFrequency)
 * @param bufferFrequency - The frequency for the output audio context buffer (could be 44010 or 48000 etc)
 */
const getSampleIncrementValue = (frequency, bufferFrequency) => {
    return frequency / bufferFrequency;
};
/**
 * Returns the sample value for a given sample position (can be a fractional position)
 * @param sampleAudio - Array of sample data
 * @param samplePosition - The position in the sample to get a value for
 */
const getSampleValue = (sampleAudio, samplePosition) => {
    const fractionOfNextSample = samplePosition % 1;
    const lowerSample = sampleAudio[Math.floor(samplePosition)];
    const upperSample = sampleAudio[Math.ceil(samplePosition)];
    return lowerSample + (fractionOfNextSample * (upperSample - lowerSample));
};


/***/ }),

/***/ "./src/players/Protracker/ProtrackerOscillator.ts":
/*!********************************************************!*\
  !*** ./src/players/Protracker/ProtrackerOscillator.ts ***!
  \********************************************************/
/*! exports provided: default, generateSawtoothWave, generateSineWave, generateSquareWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtrackerOscillator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSawtoothWave", function() { return generateSawtoothWave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSineWave", function() { return generateSineWave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSquareWave", function() { return generateSquareWave; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");

class ProtrackerOscillator {
    constructor() {
        this.amplitude = 1;
        this.offset = 0;
        this.originalValue = 0;
        this.oscillationsPerRow = 1;
        this.retrigger = false;
        this.waveGenerator = generateSineWave;
    }
    getAmplitude() {
        return this.amplitude;
    }
    getOffset() {
        return this.offset;
    }
    getOriginalValue() {
        return this.originalValue;
    }
    getOscillationsPerRow() {
        return this.oscillationsPerRow;
    }
    getRetrigger() {
        return this.retrigger;
    }
    getValue(rowPosition) {
        return this.originalValue + this.waveGenerator(rowPosition, this.offset, this.oscillationsPerRow, this.amplitude);
    }
    getWaveGenerator() {
        return this.waveGenerator;
    }
    incrementOffset() {
        this.offset = (this.offset + this.oscillationsPerRow) % 1;
    }
    setAmplitude(amplitude) {
        if (amplitude > 0) {
            this.amplitude = amplitude;
        }
    }
    setOffset(offset) {
        this.offset = offset;
    }
    setOriginalValue(period) {
        this.originalValue = period;
    }
    setOscillationsPerRow(oscillationsPerRow) {
        if (oscillationsPerRow > 0) {
            this.oscillationsPerRow = oscillationsPerRow;
        }
    }
    setRetrigger(retrigger) {
        this.retrigger = retrigger;
    }
    setWaveGenerator(type) {
        switch (type) {
            case 'random':
                this.setWaveGenerator(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pickRandom"])('sawtooth', 'sine', 'square'));
                break;
            case 'sawtooth':
                this.waveGenerator = generateSawtoothWave;
                break;
            case 'sine':
                this.waveGenerator = generateSineWave;
                break;
            case 'square':
                this.waveGenerator = generateSquareWave;
                break;
        }
    }
}
// *****************************
// *     Utility functions     *
// *****************************
const generateSawtoothWave = (rowPosition, offset = 0, oscillationsPerRow = 1, amplitude = 1) => {
    const position = ((rowPosition * oscillationsPerRow) + offset) % 1;
    return (1 - position) * amplitude;
};
const generateSineWave = (rowPosition, offset = 0, oscillationsPerRow = 1, amplitude = 1) => {
    return Math.sin(((rowPosition * oscillationsPerRow) + offset) * 2 * Math.PI) * amplitude;
};
const generateSquareWave = (rowPosition, offset = 0, oscillationsPerRow = 1, amplitude = 1) => {
    const position = ((rowPosition * oscillationsPerRow) + offset) % 1;
    return (position < 0.5 ? 1 : -1) * amplitude;
};


/***/ }),

/***/ "./src/players/Protracker/ProtrackerReader.ts":
/*!****************************************************!*\
  !*** ./src/players/Protracker/ProtrackerReader.ts ***!
  \****************************************************/
/*! exports provided: getChannelCount, getFormatDescription, getInitOptions, getPatternCount, getPatterns, getPatternSequence, getRowsPerPattern, getSampleCount, getSamples, getSignature, getSongLoopPatternSequenceIndex, getTitle, getUsedPatternSequenceLength, isFileSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChannelCount", function() { return getChannelCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatDescription", function() { return getFormatDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitOptions", function() { return getInitOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatternCount", function() { return getPatternCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatterns", function() { return getPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatternSequence", function() { return getPatternSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowsPerPattern", function() { return getRowsPerPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleCount", function() { return getSampleCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSamples", function() { return getSamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignature", function() { return getSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongLoopPatternSequenceIndex", function() { return getSongLoopPatternSequenceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsedPatternSequenceLength", function() { return getUsedPatternSequenceLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFileSupported", function() { return isFileSupported; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/players/Protracker/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");


/****************************
 *     Public functions     *
 ****************************/
function getChannelCount(fileData) {
    const signature = getSignature(fileData);
    let channelCount = 4;
    switch (signature) {
        case '8CHN':
        case 'FLT8':
        case 'CD81':
        case 'OKTA':
        case 'OCTA':
            channelCount = 8;
            break;
        case '6CHN':
            channelCount = 6;
            break;
        case '2CHN':
            channelCount = 2;
            break;
        default:
            if (/^[0-9][0-9]C[H,N]$/.test(signature)) {
                channelCount = parseInt(signature.substr(0, 2));
            }
            else if (/^TDZ[0-9]$/.test(signature)) {
                channelCount = parseInt(signature.substr(3));
            }
            else if (/^[579]CHN$/.test(signature)) {
                channelCount = parseInt(signature.substr(0, 1));
            }
    }
    return channelCount;
}
;
function getFormatDescription(fileData) {
    const signature = getSignature(fileData);
    let type = _constants__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN_FORMAT"];
    switch (signature) {
        case 'M.K.':
            type = 'ProTracker';
            break;
        case 'M!K!':
        case 'M&K!':
            type = 'ProTracker (extended patterns)';
            break;
        case '6CHN':
            type = 'ProTracker (6 channels)';
            break;
        case '8CHN':
            type = 'ProTracker (8 channels)';
            break;
        case '2CHN':
            type = 'FastTracker (2 channels)';
            break;
        case 'CD81':
        case 'OKTA':
            type = 'Oktalyzer';
            break;
        case 'OCTA':
            type = 'Octamed';
            break;
        case 'FLT4':
            type = 'StarTrekker';
            break;
        case 'FLT8':
            type = 'StarTrekker (8 channels)';
            break;
        default:
            if (/^[0-9][0-9]CH$/.test(signature)) {
                type = `FastTracker (${parseInt(signature.substr(0, 2))} channels)`;
            }
            if (/^[0-9][0-9]CN$/.test(signature)) {
                type = `TakeTracker (${parseInt(signature.substr(0, 2))} channels)`;
            }
            else if (/^TDZ[0-9]$/.test(signature)) {
                type = `TakeTracker (${parseInt(signature.substr(3))} channels)`;
            }
            else if (/^[579]CHN$/.test(signature)) {
                type = `TakeTracker (${parseInt(signature.substr(0, 1))} channels)`;
            }
    }
    return type;
}
;
/*
    Returns the data required to create a new AudioWorkletNode
    This allows the protracker playback code to be executed in its own thread
*/
function getInitOptions(fileData) {
    if (!isFileSupported(fileData))
        throw new Error;
    const outputCount = getChannelCount(fileData);
    return {
        numberOfOutputs: outputCount,
        outputChannelCount: [...new Array(outputCount)].map(item => 1),
        processorOptions: {
            fileData: fileData
        }
    };
}
/*
    This scans through the pattern sequence table to find the highest pattern index.
    That is the number of patterns used by the module.

    The song may not use all of these though, it may be that some patterns were edited,
    but never intended to be played (imagine devs working to a deadline)
*/
function getPatternCount(fileData) {
    const patternSequence = getPatternSequence(fileData);
    // Pattern count is the largest pattern index + 1 (as patterns are zero-indexed)
    return patternSequence.reduce((a, b) => Math.max(a, b)) + 1;
}
;
/*
    This loads all of the pattern data into the pattern data array.
    The pattern data array is split up into single channel rows.
    So that means we have a 3D array - [pattern][channel][rows].

    I should also mention the structure of how a channels pattern data
    is set out. It is comprised of 32 bits (4 bytes):

    #1           #2                  #3         #4
    0000         0000-00000000       0000       0000-0000000

    #1 = first 4 bits are the UPPER 4 bits of the sample number
    #2 = 12 bits, this is the note period.
    #3 = 4 bits, this is the LOWER 4 bits of the sample number
    #4 = 12 bits, effect command. Can be split into 4bit effect command and 8bit parameter.

    The pattern data is set out as above in 4 byte chunks in the file.
    The row data for each channel is stored in order, so the file is like so:

    [channel0row0-4bytes][channel1row0-4bytes][channel2row0-4bytes][channel3row0-4bytes]
    [channel0row1-4bytes][channel1row1-4bytes][channel2row1-4bytes][channel3row1-4bytes]
    etc...

    If the file has more than 4 channels, it should just follow suit as above (so if there
    are 8 channels, it would be [ch0][ch1][ch2][ch3][ch4][ch5][ch6][ch7] and carry on like
    that for 64 rows). The exception is if the signature FLT8, where instead of having
    8 instructions per row, it has 4 instructions per row and uses two patterns worth of
    rows to create one 8-channel pattern. E.G - the first pattern has [ch0][ch1][ch2][ch3]
    for 64 rows, then the next pattern has [ch4][ch5][ch6][ch7] for 64 rows. You then have
    to stick these back together.
*/
function getPatterns(fileData) {
    const channelCount = getChannelCount(fileData);
    const patterns = [];
    const start = 20 + (30 * 31) + 1 + 1 + 128 + 4;
    const patternCount = getPatternCount(fileData);
    const view = new DataView(fileData);
    let i, j, k, top, bottom;
    // Loop through patterns
    for (i = 0; i < patternCount; i++) {
        patterns[i] = [];
        // Loop through rows in the pattern
        for (j = 0; j < 64; j++) {
            patterns[i][j] = [];
            // Loop through channels in the row
            for (k = 0; k < channelCount; k++) {
                patterns[i][j][k] = {};
                // Sample number
                // We shift right by 4 bits and then left by 4 bits to remove the lower 4 bits.
                top = (view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4)) >> 4) << 4;
                bottom = view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4) + 2) >> 4;
                patterns[i][j][k].sampleIndex = top + bottom;
                // period - represented by bottom 4 bits in the first byte and the second byte (12 byte number).
                // We get the lower 4 bits by using the modulus of 16 (remainder of dividing by 16).
                top = (view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4)) % 16) << 8;
                bottom = view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4) + 1);
                patterns[i][j][k].period = top + bottom;
                // Effect - get the lower 4 bits of byte 3 by using modulus 16.
                top = view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4) + 2) % 16;
                bottom = view.getUint8(start + (i * 64 * channelCount * 4) + (j * channelCount * 4) + (k * 4) + 3);
                if (top > 0 || bottom > 0) {
                    patterns[i][j][k].effect = {
                        code: top,
                        extendedCode: `${top}${bottom === 14 ? `-${bottom >> 4}` : ''}`,
                        p: bottom,
                        px: (bottom >> 4),
                        py: (bottom % 16)
                    };
                }
            }
        }
    }
    return patterns;
}
;
function getPatternSequence(fileData) {
    const patternSequenceData = fileData.slice(952, 1080);
    let i;
    let lastIndex = 0;
    let patternSequence = [];
    // Convert pattern sequence bytes to an integer array (they are big endian in the file)
    for (i = 0; i < 128; i++) {
        patternSequence[i] = _utils__WEBPACK_IMPORTED_MODULE_1__["read8bitInt"](patternSequenceData, i);
    }
    ;
    // Find out where the last pattern index is (the sequence is zero-padded)
    for (i = patternSequence.length - 1; i >= 0; i--) {
        if (patternSequence[i] !== 0) {
            lastIndex = i;
            break;
        }
    }
    // Return pattern sequence, trimming off zero-padding
    return patternSequence.slice(0, lastIndex + 1);
}
;
function getRowsPerPattern(fileData) {
    const signature = getSignature(fileData);
    switch (signature) {
        case 'M!K!':
            return 128;
        default:
            return 64;
    }
}
;
function getSampleCount() {
    return 31;
}
;
function getSamples(fileData, addExtraEndSample = false) {
    const channelCount = getChannelCount(fileData);
    const patternCount = getPatternCount(fileData);
    const samples = [];
    let audio;
    let data;
    let header;
    let headerDataStartOffset = 20;
    let sampleAudioStartOffset = 20 + (30 * 31) + 1 + 1 + 128 + 4 + (patternCount * 64 * channelCount * 4);
    let sampleHeaderData;
    let i;
    // Run through and extract header and audio data for all samples
    for (i = 0; i < 31; i++) {
        // Each header is 30 bytes, extract them, then decode. Increment start offset position by 30 for next read.
        sampleHeaderData = fileData.slice(headerDataStartOffset, headerDataStartOffset + 30);
        header = _getSampleHeader(sampleHeaderData);
        headerDataStartOffset = headerDataStartOffset + 30;
        // Extract audio data - the length of the sample comes from the header
        data = fileData.slice(sampleAudioStartOffset, sampleAudioStartOffset + header.length);
        audio = _getSampleAudio(data, addExtraEndSample);
        sampleAudioStartOffset = sampleAudioStartOffset + header.length;
        // Concatenate and add to samples array
        samples[i] = Object.assign(Object.assign({}, header), { audio });
    }
    ;
    return samples;
}
;
function getSignature(fileData) {
    const headerStart = 20 + (30 * 31) + 1 + 1 + 128;
    return _utils__WEBPACK_IMPORTED_MODULE_1__["readStringFromArrayBuffer"](fileData, headerStart, headerStart + 4);
}
function getSongLoopPatternSequenceIndex(fileData) {
    const start = 20 + (30 * 31) + 1;
    const value = _utils__WEBPACK_IMPORTED_MODULE_1__["read8bitInt"](fileData, start);
    // If value < 127, it signifies loop index. Otherwise, there is no loop (return undefined).
    // return (value < 127) ? value : undefined;
    // Oddly, it seems you should always return 0 for this...?
    return 0;
}
;
function getTitle(fileData) {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["readStringFromArrayBuffer"](fileData, 0, 20).replace(/\u0000/g, ' ').trim();
}
;
/*
    This figure is the number of pattern sequence positions used by the song
*/
function getUsedPatternSequenceLength(fileData) {
    const start = 20 + (30 * 31);
    return _utils__WEBPACK_IMPORTED_MODULE_1__["read8bitInt"](fileData, start);
}
function isFileSupported(fileData) {
    return getFormatDescription(fileData) !== _constants__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN_FORMAT"];
}
/*****************************
 *     Private functions     *
 *****************************/
/*
    Value:    0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F
    Finetune: 0  +1  +2  +3  +4  +5  +6  +7  -8  -7  -6  -5  -4  -3  -2  -1
*/
function _getFineTuneValue(rawInteger) {
    if (rawInteger >= 8) {
        return -16 + rawInteger;
    }
    else {
        return rawInteger;
    }
}
;
function _getSampleAudio(sampleData, addExtraEndSample = false) {
    const float32Samples = new Float32Array(sampleData.byteLength + (addExtraEndSample ? 1 : 0));
    const view = new DataView(sampleData);
    let i;
    // Run through samples and convert from signed 8-bit int to signed float32
    for (i = 0; i < sampleData.byteLength; i++) {
        float32Samples[i] = view.getInt8(i) / 128.00;
    }
    // This is really confusing. Imagine you have a sample 8 bytes long. You can set the loop length to be 8,
    // which you can image as 'a loop length of 8 wave sections'. However, you actually need 9 samples to be
    // able to loop 8 wave sections. So, to sort this, we fudge it by duplicating the last sample. You can check
    // milkytracker on this, it does the same. If you don't do this, very short looping samples will sound noticably
    // higher pitched.
    if (addExtraEndSample) {
        if (addExtraEndSample) {
            float32Samples[i] = float32Samples[i - 1];
        }
    }
    return float32Samples;
}
;
function _getSampleHeader(sampleHeaderData) {
    return {
        name: _utils__WEBPACK_IMPORTED_MODULE_1__["readStringFromArrayBuffer"](sampleHeaderData, 0, 22),
        length: _utils__WEBPACK_IMPORTED_MODULE_1__["readBigEndian16bitInt"](sampleHeaderData, 22) * 2,
        fineTune: _getFineTuneValue(_utils__WEBPACK_IMPORTED_MODULE_1__["read8bitInt"](sampleHeaderData, 24)),
        volume: Math.min(_utils__WEBPACK_IMPORTED_MODULE_1__["read8bitInt"](sampleHeaderData, 25), 64),
        repeatOffset: _utils__WEBPACK_IMPORTED_MODULE_1__["readBigEndian16bitInt"](sampleHeaderData, 26) * 2,
        repeatLength: _utils__WEBPACK_IMPORTED_MODULE_1__["readBigEndian16bitInt"](sampleHeaderData, 28) * 2
    };
}
;


/***/ }),

/***/ "./src/players/Protracker/constants.ts":
/*!*********************************************!*\
  !*** ./src/players/Protracker/constants.ts ***!
  \*********************************************/
/*! exports provided: AMIGA_CLOCK_SPEED_NTSC, AMIGA_CLOCK_SPEED_PAL, AMIGA_CLOCK_SPEED, EFFECT_CODES, WAVE_TYPES, UNKNOWN_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMIGA_CLOCK_SPEED_NTSC", function() { return AMIGA_CLOCK_SPEED_NTSC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMIGA_CLOCK_SPEED_PAL", function() { return AMIGA_CLOCK_SPEED_PAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMIGA_CLOCK_SPEED", function() { return AMIGA_CLOCK_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_CODES", function() { return EFFECT_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WAVE_TYPES", function() { return WAVE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_FORMAT", function() { return UNKNOWN_FORMAT; });
const AMIGA_CLOCK_SPEED_NTSC = 7159090.5;
const AMIGA_CLOCK_SPEED_PAL = 7093789.2;
var AMIGA_CLOCK_SPEED;
(function (AMIGA_CLOCK_SPEED) {
    AMIGA_CLOCK_SPEED[AMIGA_CLOCK_SPEED["NTSC"] = AMIGA_CLOCK_SPEED_NTSC] = "NTSC";
    AMIGA_CLOCK_SPEED[AMIGA_CLOCK_SPEED["PAL"] = AMIGA_CLOCK_SPEED_PAL] = "PAL";
})(AMIGA_CLOCK_SPEED || (AMIGA_CLOCK_SPEED = {}));
const EFFECT_CODES = {
    ARPEGGIO: '0',
    PORTAMENTO_UP: '1',
    PORTAMENTO_DOWN: '2',
    TONE_PORTAMENTO: '3',
    VIBRATO: '4',
    VOLUME_SLIDE_TONE_PORTAMENTO: '5',
    VOLUME_SLIDE_VIBRATO: '6',
    TREMOLO: '7',
    SET_PANNING_POSITION: '8',
    SET_SAMPLE_OFFSET: '9',
    VOLUME_SLIDE: '10',
    POSITION_JUMP: '11',
    SET_VOLUME: '12',
    PATTERN_BREAK: '13',
    SET_FILTER: '14-0',
    FINE_PORTAMENTO_UP: '14-1',
    FINE_PORTAMENTO_DOWN: '14-2',
    GLISSANDO: '14-3',
    SET_VIBRATO_WAVEFORM: '14-4',
    SET_FINE_TUNE: '14-5',
    PATTERN_LOOP: '14-6',
    SET_TREMOLO_WAVEFORM: '14-7',
    // UNUSED:                    '14-8'
    RETRIGGER_NOTE: '14-9',
    FINE_VOLUME_SLIDE_UP: '14-10',
    FINE_VOLUME_SLIDE_DOWN: '14-11',
    NOTE_CUT: '14-12',
    NOTE_DELAY: '14-13',
    PATTERN_DELAY: '14-14',
    FUNKREPEAT: '14-15',
    SET_SPEED: '15',
};
const WAVE_TYPES = ['sine', 'sawtooth', 'square', 'random']; // Do not re-order!
const UNKNOWN_FORMAT = 'Unknown format';


/***/ }),

/***/ "./src/players/Protracker/effects/arpeggioEffect/arpeggioEffect.ts":
/*!*************************************************************************!*\
  !*** ./src/players/Protracker/effects/arpeggioEffect/arpeggioEffect.ts ***!
  \*************************************************************************/
/*! exports provided: arpeggioEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arpeggioEffect", function() { return arpeggioEffect; });
const arpeggioEffect = (p1, p2) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick % 3 === 0) {
            channel.resetPeriod();
        }
        else if (state.currentTick % 3 === 1) {
            channel.setPeriod(channel.getFineTunedPeriod() / Math.pow(2, p1 / 12));
        }
        else if (state.currentTick % 3 === 2) {
            channel.setPeriod(channel.getFineTunedPeriod() / Math.pow(2, p2 / 12));
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (arpeggioEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/effectFactory.ts":
/*!*********************************************************!*\
  !*** ./src/players/Protracker/effects/effectFactory.ts ***!
  \*********************************************************/
/*! exports provided: effectFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectFactory", function() { return effectFactory; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/players/Protracker/constants.ts");
/* harmony import */ var _arpeggioEffect_arpeggioEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arpeggioEffect/arpeggioEffect */ "./src/players/Protracker/effects/arpeggioEffect/arpeggioEffect.ts");
/* harmony import */ var _finePortamentoDownEffect_finePortamentoDownEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finePortamentoDownEffect/finePortamentoDownEffect */ "./src/players/Protracker/effects/finePortamentoDownEffect/finePortamentoDownEffect.ts");
/* harmony import */ var _finePortamentoUpEffect_finePortamentoUpEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finePortamentoUpEffect/finePortamentoUpEffect */ "./src/players/Protracker/effects/finePortamentoUpEffect/finePortamentoUpEffect.ts");
/* harmony import */ var _portamentoDownEffect_portamentoDownEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portamentoDownEffect/portamentoDownEffect */ "./src/players/Protracker/effects/portamentoDownEffect/portamentoDownEffect.ts");
/* harmony import */ var _portamentoUpEffect_portamentoUpEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portamentoUpEffect/portamentoUpEffect */ "./src/players/Protracker/effects/portamentoUpEffect/portamentoUpEffect.ts");
/* harmony import */ var _vibratoEffect_vibratoEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vibratoEffect/vibratoEffect */ "./src/players/Protracker/effects/vibratoEffect/vibratoEffect.ts");
/* harmony import */ var _volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./volumeSlideEffect/volumeSlideEffect */ "./src/players/Protracker/effects/volumeSlideEffect/volumeSlideEffect.ts");
/* harmony import */ var _fineVolumeSlideUpEffect_fineVolumeSlideUpEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fineVolumeSlideUpEffect/fineVolumeSlideUpEffect */ "./src/players/Protracker/effects/fineVolumeSlideUpEffect/fineVolumeSlideUpEffect.ts");
/* harmony import */ var _fineVolumeSlideDownEffect_fineVolumeSlideDownEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fineVolumeSlideDownEffect/fineVolumeSlideDownEffect */ "./src/players/Protracker/effects/fineVolumeSlideDownEffect/fineVolumeSlideDownEffect.ts");
/* harmony import */ var _tremoloEffect_tremoloEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tremoloEffect/tremoloEffect */ "./src/players/Protracker/effects/tremoloEffect/tremoloEffect.ts");
/* harmony import */ var _positionJumpEffect_positionJumpEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./positionJumpEffect/positionJumpEffect */ "./src/players/Protracker/effects/positionJumpEffect/positionJumpEffect.ts");
/* harmony import */ var _patternBreakEffect_patternBreakEffect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patternBreakEffect/patternBreakEffect */ "./src/players/Protracker/effects/patternBreakEffect/patternBreakEffect.ts");
/* harmony import */ var _patternLoopEffect_patternLoopEffect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patternLoopEffect/patternLoopEffect */ "./src/players/Protracker/effects/patternLoopEffect/patternLoopEffect.ts");
/* harmony import */ var _noteDelayEffect_noteDelayEffect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noteDelayEffect/noteDelayEffect */ "./src/players/Protracker/effects/noteDelayEffect/noteDelayEffect.ts");
/* harmony import */ var _noteCutEffect_noteCutEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./noteCutEffect/noteCutEffect */ "./src/players/Protracker/effects/noteCutEffect/noteCutEffect.ts");
/* harmony import */ var _retriggerNoteEffect_retriggerNoteEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./retriggerNoteEffect/retriggerNoteEffect */ "./src/players/Protracker/effects/retriggerNoteEffect/retriggerNoteEffect.ts");
/* harmony import */ var _setSampleOffsetEffect_setSampleOffsetEffect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setSampleOffsetEffect/setSampleOffsetEffect */ "./src/players/Protracker/effects/setSampleOffsetEffect/setSampleOffsetEffect.ts");
/* harmony import */ var _setVolumeEffect_setVolumeEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setVolumeEffect/setVolumeEffect */ "./src/players/Protracker/effects/setVolumeEffect/setVolumeEffect.ts");
/* harmony import */ var _setVibratoWaveformEffect_setVibratoWaveformEffect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./setVibratoWaveformEffect/setVibratoWaveformEffect */ "./src/players/Protracker/effects/setVibratoWaveformEffect/setVibratoWaveformEffect.ts");
/* harmony import */ var _setTremoloWaveformEffect_setTremoloWaveformEffect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./setTremoloWaveformEffect/setTremoloWaveformEffect */ "./src/players/Protracker/effects/setTremoloWaveformEffect/setTremoloWaveformEffect.ts");
/* harmony import */ var _setFineTuneEffect_setFineTuneEffect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./setFineTuneEffect/setFineTuneEffect */ "./src/players/Protracker/effects/setFineTuneEffect/setFineTuneEffect.ts");
/* harmony import */ var _setSpeedEffect_setSpeedEffect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./setSpeedEffect/setSpeedEffect */ "./src/players/Protracker/effects/setSpeedEffect/setSpeedEffect.ts");
/* harmony import */ var _tonePortamentoEffect_tonePortamentoEffect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tonePortamentoEffect/tonePortamentoEffect */ "./src/players/Protracker/effects/tonePortamentoEffect/tonePortamentoEffect.ts");
/* harmony import */ var _volumeSlideVibratoEffect_volumeSlideVibratoEffect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./volumeSlideVibratoEffect/volumeSlideVibratoEffect */ "./src/players/Protracker/effects/volumeSlideVibratoEffect/volumeSlideVibratoEffect.ts");
/* harmony import */ var _volumeSlideTonePortamentoEffect_volumeSlideTonePortamentoEffect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./volumeSlideTonePortamentoEffect/volumeSlideTonePortamentoEffect */ "./src/players/Protracker/effects/volumeSlideTonePortamentoEffect/volumeSlideTonePortamentoEffect.ts");
/* harmony import */ var _patternDelayEffect_patternDelayEffect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./patternDelayEffect/patternDelayEffect */ "./src/players/Protracker/effects/patternDelayEffect/patternDelayEffect.ts");



























/**
 * Will return a Protracker<Effect>Effect class instance which can be used to process the given effect
 * @param effectCode - The effect code that we want to be able to process
 */
function effectFactory(effectCode) {
    if (!effectCode)
        return undefined;
    const code = effectCode.code === 14 ? `${effectCode.code}-${effectCode.px}` : `${effectCode.code}`;
    switch (code) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].ARPEGGIO:
            return Object(_arpeggioEffect_arpeggioEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PORTAMENTO_DOWN:
            return Object(_portamentoDownEffect_portamentoDownEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PORTAMENTO_UP:
            return Object(_portamentoUpEffect_portamentoUpEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TONE_PORTAMENTO:
            return Object(_tonePortamentoEffect_tonePortamentoEffect__WEBPACK_IMPORTED_MODULE_23__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VIBRATO:
            return Object(_vibratoEffect_vibratoEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_TONE_PORTAMENTO:
            return Object(_volumeSlideTonePortamentoEffect_volumeSlideTonePortamentoEffect__WEBPACK_IMPORTED_MODULE_25__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_VIBRATO:
            return Object(_volumeSlideVibratoEffect_volumeSlideVibratoEffect__WEBPACK_IMPORTED_MODULE_24__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TREMOLO:
            return Object(_tremoloEffect_tremoloEffect__WEBPACK_IMPORTED_MODULE_10__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_SAMPLE_OFFSET:
            return Object(_setSampleOffsetEffect_setSampleOffsetEffect__WEBPACK_IMPORTED_MODULE_17__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE:
            return Object(_volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_7__["default"])(effectCode.px, effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].POSITION_JUMP:
            return Object(_positionJumpEffect_positionJumpEffect__WEBPACK_IMPORTED_MODULE_11__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_VOLUME:
            return Object(_setVolumeEffect_setVolumeEffect__WEBPACK_IMPORTED_MODULE_18__["default"])(effectCode.p);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_BREAK:
            return Object(_patternBreakEffect_patternBreakEffect__WEBPACK_IMPORTED_MODULE_12__["default"])(effectCode.px, effectCode.py);
        // extended codes (E0-EF)
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_PORTAMENTO_UP:
            return Object(_finePortamentoUpEffect_finePortamentoUpEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_PORTAMENTO_DOWN:
            return Object(_finePortamentoDownEffect_finePortamentoDownEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_VIBRATO_WAVEFORM:
            return Object(_setVibratoWaveformEffect_setVibratoWaveformEffect__WEBPACK_IMPORTED_MODULE_19__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_FINE_TUNE:
            return Object(_setFineTuneEffect_setFineTuneEffect__WEBPACK_IMPORTED_MODULE_21__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_LOOP:
            return Object(_patternLoopEffect_patternLoopEffect__WEBPACK_IMPORTED_MODULE_13__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_TREMOLO_WAVEFORM:
            return Object(_setTremoloWaveformEffect_setTremoloWaveformEffect__WEBPACK_IMPORTED_MODULE_20__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].RETRIGGER_NOTE:
            return Object(_retriggerNoteEffect_retriggerNoteEffect__WEBPACK_IMPORTED_MODULE_16__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_VOLUME_SLIDE_UP:
            return Object(_fineVolumeSlideUpEffect_fineVolumeSlideUpEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_VOLUME_SLIDE_DOWN:
            return Object(_fineVolumeSlideDownEffect_fineVolumeSlideDownEffect__WEBPACK_IMPORTED_MODULE_9__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].NOTE_CUT:
            return Object(_noteCutEffect_noteCutEffect__WEBPACK_IMPORTED_MODULE_15__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].NOTE_DELAY:
            return Object(_noteDelayEffect_noteDelayEffect__WEBPACK_IMPORTED_MODULE_14__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_DELAY:
            return Object(_patternDelayEffect_patternDelayEffect__WEBPACK_IMPORTED_MODULE_26__["default"])(effectCode.py);
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_SPEED:
            return Object(_setSpeedEffect_setSpeedEffect__WEBPACK_IMPORTED_MODULE_22__["default"])(effectCode.p);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (effectFactory);


/***/ }),

/***/ "./src/players/Protracker/effects/finePortamentoDownEffect/finePortamentoDownEffect.ts":
/*!*********************************************************************************************!*\
  !*** ./src/players/Protracker/effects/finePortamentoDownEffect/finePortamentoDownEffect.ts ***!
  \*********************************************************************************************/
/*! exports provided: finePortamentoDownEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finePortamentoDownEffect", function() { return finePortamentoDownEffect; });
const finePortamentoDownEffect = (p1) => {
    const onRowEnd = (player, channel) => {
        channel.setPeriod(channel.getPeriod() + p1);
    };
    return {
        onRowEnd
    };
};
/* harmony default export */ __webpack_exports__["default"] = (finePortamentoDownEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/finePortamentoUpEffect/finePortamentoUpEffect.ts":
/*!*****************************************************************************************!*\
  !*** ./src/players/Protracker/effects/finePortamentoUpEffect/finePortamentoUpEffect.ts ***!
  \*****************************************************************************************/
/*! exports provided: finePortamentoUpEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finePortamentoUpEffect", function() { return finePortamentoUpEffect; });
const finePortamentoUpEffect = (p1) => {
    const onRowEnd = (player, channel) => {
        channel.setPeriod(channel.getPeriod() - p1);
    };
    return {
        onRowEnd
    };
};
/* harmony default export */ __webpack_exports__["default"] = (finePortamentoUpEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/fineVolumeSlideDownEffect/fineVolumeSlideDownEffect.ts":
/*!***********************************************************************************************!*\
  !*** ./src/players/Protracker/effects/fineVolumeSlideDownEffect/fineVolumeSlideDownEffect.ts ***!
  \***********************************************************************************************/
/*! exports provided: fineVolumeSlideDownEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fineVolumeSlideDownEffect", function() { return fineVolumeSlideDownEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.ts");

const fineVolumeSlideDownEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const newVolume = channel.getVolume() - p1;
        channel.setVolume(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["minMaxLimit"])(newVolume, 0, 64));
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (fineVolumeSlideDownEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/fineVolumeSlideUpEffect/fineVolumeSlideUpEffect.ts":
/*!*******************************************************************************************!*\
  !*** ./src/players/Protracker/effects/fineVolumeSlideUpEffect/fineVolumeSlideUpEffect.ts ***!
  \*******************************************************************************************/
/*! exports provided: fineVolumeSlideUpEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fineVolumeSlideUpEffect", function() { return fineVolumeSlideUpEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.ts");

const fineVolumeSlideUpEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const newVolume = channel.getVolume() + p1;
        channel.setVolume(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["minMaxLimit"])(newVolume, 0, 64));
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (fineVolumeSlideUpEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/noteCutEffect/noteCutEffect.ts":
/*!***********************************************************************!*\
  !*** ./src/players/Protracker/effects/noteCutEffect/noteCutEffect.ts ***!
  \***********************************************************************/
/*! exports provided: noteCutEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteCutEffect", function() { return noteCutEffect; });
const noteCutEffect = (p1) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick === p1) {
            channel.setVolume(0);
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (noteCutEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/noteDelayEffect/noteDelayEffect.ts":
/*!***************************************************************************!*\
  !*** ./src/players/Protracker/effects/noteDelayEffect/noteDelayEffect.ts ***!
  \***************************************************************************/
/*! exports provided: noteDelayEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteDelayEffect", function() { return noteDelayEffect; });
const noteDelayEffect = (p1) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick < p1) {
            channel.setSampleAsEnded();
        }
        if (state.currentTick === p1) {
            channel.resetSample();
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (noteDelayEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/patternBreakEffect/patternBreakEffect.ts":
/*!*********************************************************************************!*\
  !*** ./src/players/Protracker/effects/patternBreakEffect/patternBreakEffect.ts ***!
  \*********************************************************************************/
/*! exports provided: patternBreakEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternBreakEffect", function() { return patternBreakEffect; });
const patternBreakEffect = (p1, p2) => {
    const onRowEnd = (player, channel) => {
        player.nextPattern() || player.setPatternSequenceIndex(player.getSongLoopIndex());
        player.setRowIndex((10 * p1) + p2);
    };
    return {
        onRowEnd
    };
};
/* harmony default export */ __webpack_exports__["default"] = (patternBreakEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/patternDelayEffect/patternDelayEffect.ts":
/*!*********************************************************************************!*\
  !*** ./src/players/Protracker/effects/patternDelayEffect/patternDelayEffect.ts ***!
  \*********************************************************************************/
/*! exports provided: patternDelayEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternDelayEffect", function() { return patternDelayEffect; });
const patternDelayEffect = (p1) => {
    const onRowStart = (player, channel) => {
        player.setPatternDelay(p1 * player.state.speed);
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (patternDelayEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/patternLoopEffect/patternLoopEffect.ts":
/*!*******************************************************************************!*\
  !*** ./src/players/Protracker/effects/patternLoopEffect/patternLoopEffect.ts ***!
  \*******************************************************************************/
/*! exports provided: patternLoopEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternLoopEffect", function() { return patternLoopEffect; });
const patternLoopEffect = (p1) => {
    const onRowEnd = (player, channel) => {
        if (p1 === 0) {
            player.setPatternLoopRowIndex(player.getPlaybackState().currentRowIndex);
        }
        else {
            const loopCount = player.getPatternLoopCount() - 1;
            player.setPatternLoopCount(loopCount);
            if (loopCount < 0) {
                player.setPatternLoopCount(p1);
            }
            if (loopCount > 0) {
                player.setRowIndex(player.getPatternLoopRowIndex());
            }
        }
    };
    return {
        onRowEnd
    };
};
/* harmony default export */ __webpack_exports__["default"] = (patternLoopEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/portamentoDownEffect/portamentoDownEffect.ts":
/*!*************************************************************************************!*\
  !*** ./src/players/Protracker/effects/portamentoDownEffect/portamentoDownEffect.ts ***!
  \*************************************************************************************/
/*! exports provided: portamentoDownEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portamentoDownEffect", function() { return portamentoDownEffect; });
const portamentoDownEffect = (p1) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick > 0) {
            channel.setPeriod(channel.getPeriod() + p1);
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (portamentoDownEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/portamentoUpEffect/portamentoUpEffect.ts":
/*!*********************************************************************************!*\
  !*** ./src/players/Protracker/effects/portamentoUpEffect/portamentoUpEffect.ts ***!
  \*********************************************************************************/
/*! exports provided: portamentoUpEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portamentoUpEffect", function() { return portamentoUpEffect; });
const portamentoUpEffect = (p1) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick > 0) {
            channel.setPeriod(channel.getPeriod() - p1);
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (portamentoUpEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/positionJumpEffect/positionJumpEffect.ts":
/*!*********************************************************************************!*\
  !*** ./src/players/Protracker/effects/positionJumpEffect/positionJumpEffect.ts ***!
  \*********************************************************************************/
/*! exports provided: positionJumpEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionJumpEffect", function() { return positionJumpEffect; });
const positionJumpEffect = (p1) => {
    const onRowEnd = (player, channel) => {
        player.setPatternSequenceIndex(p1, true);
    };
    return {
        onRowEnd
    };
};
/* harmony default export */ __webpack_exports__["default"] = (positionJumpEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/retriggerNoteEffect/retriggerNoteEffect.ts":
/*!***********************************************************************************!*\
  !*** ./src/players/Protracker/effects/retriggerNoteEffect/retriggerNoteEffect.ts ***!
  \***********************************************************************************/
/*! exports provided: retriggerNoteEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retriggerNoteEffect", function() { return retriggerNoteEffect; });
const retriggerNoteEffect = (p1) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick % p1 === 0) {
            channel.setSamplePosition(0);
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (retriggerNoteEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setFineTuneEffect/setFineTuneEffect.ts":
/*!*******************************************************************************!*\
  !*** ./src/players/Protracker/effects/setFineTuneEffect/setFineTuneEffect.ts ***!
  \*******************************************************************************/
/*! exports provided: setFineTuneEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFineTuneEffect", function() { return setFineTuneEffect; });
const setFineTuneEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const instruction = channel.getInstruction();
        if (instruction && instruction.period !== 0) {
            const newFineTune = p1 < 8 ? p1 : -16 + p1;
            channel.setFineTune(newFineTune);
        }
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setFineTuneEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setSampleOffsetEffect/setSampleOffsetEffect.ts":
/*!***************************************************************************************!*\
  !*** ./src/players/Protracker/effects/setSampleOffsetEffect/setSampleOffsetEffect.ts ***!
  \***************************************************************************************/
/*! exports provided: setSampleOffsetEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSampleOffsetEffect", function() { return setSampleOffsetEffect; });
const setSampleOffsetEffect = (p1) => {
    const onRowStart = (player, channel) => {
        channel.setSamplePosition(256 * p1);
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setSampleOffsetEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setSpeedEffect/setSpeedEffect.ts":
/*!*************************************************************************!*\
  !*** ./src/players/Protracker/effects/setSpeedEffect/setSpeedEffect.ts ***!
  \*************************************************************************/
/*! exports provided: setSpeedEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSpeedEffect", function() { return setSpeedEffect; });
const setSpeedEffect = (p1) => {
    const onRowStart = (player, channel) => {
        if (p1 > 31) {
            player.setTempo(p1);
        }
        else {
            player.setSpeed(p1);
        }
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setSpeedEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setTremoloWaveformEffect/setTremoloWaveformEffect.ts":
/*!*********************************************************************************************!*\
  !*** ./src/players/Protracker/effects/setTremoloWaveformEffect/setTremoloWaveformEffect.ts ***!
  \*********************************************************************************************/
/*! exports provided: setTemoloWaveformEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemoloWaveformEffect", function() { return setTemoloWaveformEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/players/Protracker/effects/utils.ts");

const setTemoloWaveformEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const tremolo = channel.getTremolo();
        if (p1 <= 7) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setOscillatorWaveform"])(tremolo, p1);
        }
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setTemoloWaveformEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setVibratoWaveformEffect/setVibratoWaveformEffect.ts":
/*!*********************************************************************************************!*\
  !*** ./src/players/Protracker/effects/setVibratoWaveformEffect/setVibratoWaveformEffect.ts ***!
  \*********************************************************************************************/
/*! exports provided: setVibratoWaveformEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVibratoWaveformEffect", function() { return setVibratoWaveformEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/players/Protracker/effects/utils.ts");

const setVibratoWaveformEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const vibrato = channel.getVibrato();
        if (p1 <= 7) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setOscillatorWaveform"])(vibrato, p1);
        }
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setVibratoWaveformEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/setVolumeEffect/setVolumeEffect.ts":
/*!***************************************************************************!*\
  !*** ./src/players/Protracker/effects/setVolumeEffect/setVolumeEffect.ts ***!
  \***************************************************************************/
/*! exports provided: setVolumeEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVolumeEffect", function() { return setVolumeEffect; });
const setVolumeEffect = (p1) => {
    const onRowStart = (player, channel) => {
        channel.setVolume(p1);
    };
    return {
        onRowStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (setVolumeEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/tonePortamentoEffect/tonePortamentoEffect.ts":
/*!*************************************************************************************!*\
  !*** ./src/players/Protracker/effects/tonePortamentoEffect/tonePortamentoEffect.ts ***!
  \*************************************************************************************/
/*! exports provided: tonePortamentoEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tonePortamentoEffect", function() { return tonePortamentoEffect; });
const tonePortamentoEffect = (p1) => {
    const onRowStart = (player, channel) => {
        const instruction = channel.getInstruction();
        if (p1 && p1 > 0) {
            channel.setSlideRate(p1);
        }
        if (instruction && instruction.period) {
            channel.setSlideTarget(instruction.period);
        }
    };
    const onTickStart = (player, channel) => {
        if (channel.getPeriod() > channel.getSlideTarget()) {
            channel.setPeriod(Math.max(channel.getPeriod() - channel.getSlideRate(), channel.getSlideTarget()));
        }
        else if (channel.getPeriod() < channel.getSlideTarget()) {
            channel.setPeriod(Math.min(channel.getPeriod() + channel.getSlideRate(), channel.getSlideTarget()));
        }
    };
    return {
        onRowStart,
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (tonePortamentoEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/tremoloEffect/tremoloEffect.ts":
/*!***********************************************************************!*\
  !*** ./src/players/Protracker/effects/tremoloEffect/tremoloEffect.ts ***!
  \***********************************************************************/
/*! exports provided: tremoloEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tremoloEffect", function() { return tremoloEffect; });
const tremoloEffect = (p1, p2) => {
    const onRowStart = (player, channel) => {
        const state = player.getPlaybackState();
        const tremolo = channel.getTremolo();
        tremolo.setOriginalValue(channel.getVolume());
        tremolo.setOscillationsPerRow((p1 * (state.speed - 1)) / 64);
        tremolo.setAmplitude(p2 * 2);
    };
    const onRowEnd = (player, channel) => {
        const tremolo = channel.getTremolo();
        if (tremolo.getRetrigger() === false) {
            tremolo.incrementOffset();
        }
        channel.setVolume(tremolo.getOriginalValue());
    };
    const onTickStart = (player, channel) => {
        const tremolo = channel.getTremolo();
        channel.setVolume(tremolo.getValue(player.getRowPosition()));
    };
    return {
        onRowStart,
        onRowEnd,
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (tremoloEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/utils.ts":
/*!*************************************************!*\
  !*** ./src/players/Protracker/effects/utils.ts ***!
  \*************************************************/
/*! exports provided: isTonePortamento, setOscillatorWaveform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTonePortamento", function() { return isTonePortamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOscillatorWaveform", function() { return setOscillatorWaveform; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/players/Protracker/constants.ts");

function isTonePortamento(effect) {
    if (!effect)
        return false;
    const code = effect.code === 14 ? `${effect.code}-${effect.px}` : `${effect.code}`;
    return code === _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TONE_PORTAMENTO || code === _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_TONE_PORTAMENTO;
}
function setOscillatorWaveform(oscillator, param) {
    const typeCode = param >= 4 ? param - 4 : param;
    const retrigger = param < 4;
    const generator = _constants__WEBPACK_IMPORTED_MODULE_0__["WAVE_TYPES"][typeCode];
    oscillator.setWaveGenerator(generator);
    oscillator.setRetrigger(retrigger);
}
;


/***/ }),

/***/ "./src/players/Protracker/effects/vibratoEffect/vibratoEffect.ts":
/*!***********************************************************************!*\
  !*** ./src/players/Protracker/effects/vibratoEffect/vibratoEffect.ts ***!
  \***********************************************************************/
/*! exports provided: vibratoEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibratoEffect", function() { return vibratoEffect; });
const vibratoEffect = (p1, p2) => {
    const onRowStart = (player, channel) => {
        const state = player.getPlaybackState();
        const vibrato = channel.getVibrato();
        vibrato.setOriginalValue(channel.getPeriod());
        if (p1) {
            vibrato.setOscillationsPerRow((p1 * (state.speed - 1)) / 64);
        }
        if (p2) {
            vibrato.setAmplitude(p2 * 2);
        }
    };
    const onRowEnd = (player, channel) => {
        const vibrato = channel.getVibrato();
        if (vibrato.getRetrigger() === false) {
            vibrato.incrementOffset();
        }
        channel.setPeriod(vibrato.getOriginalValue());
    };
    const onTickStart = (player, channel) => {
        const vibrato = channel.getVibrato();
        channel.setPeriod(vibrato.getValue(player.getRowPosition()));
    };
    return {
        onRowStart,
        onRowEnd,
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (vibratoEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/volumeSlideEffect/volumeSlideEffect.ts":
/*!*******************************************************************************!*\
  !*** ./src/players/Protracker/effects/volumeSlideEffect/volumeSlideEffect.ts ***!
  \*******************************************************************************/
/*! exports provided: volumeSlideEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumeSlideEffect", function() { return volumeSlideEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.ts");

const volumeSlideEffect = (p1, p2) => {
    const onTickStart = (player, channel) => {
        const state = player.getPlaybackState();
        if (state.currentTick > 0) {
            const newVolume = p1 ? channel.getVolume() + p1 : channel.getVolume() - p2;
            channel.setVolume(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["minMaxLimit"])(newVolume, 0, 64));
        }
    };
    return {
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (volumeSlideEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/volumeSlideTonePortamentoEffect/volumeSlideTonePortamentoEffect.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/players/Protracker/effects/volumeSlideTonePortamentoEffect/volumeSlideTonePortamentoEffect.ts ***!
  \***********************************************************************************************************/
/*! exports provided: volumeSlideTonePortamentoEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumeSlideTonePortamentoEffect", function() { return volumeSlideTonePortamentoEffect; });
/* harmony import */ var _tonePortamentoEffect_tonePortamentoEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tonePortamentoEffect/tonePortamentoEffect */ "./src/players/Protracker/effects/tonePortamentoEffect/tonePortamentoEffect.ts");
/* harmony import */ var _volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../volumeSlideEffect/volumeSlideEffect */ "./src/players/Protracker/effects/volumeSlideEffect/volumeSlideEffect.ts");


const volumeSlideTonePortamentoEffect = (p1, p2) => {
    const volumeSlide = Object(_volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(p1, p2);
    const tonePortamento = Object(_tonePortamentoEffect_tonePortamentoEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(); // continuation of last tone portamento, hence no params
    const onRowStart = (player, channel) => {
        volumeSlide.onRowStart && volumeSlide.onRowStart(player, channel);
        tonePortamento.onRowStart && tonePortamento.onRowStart(player, channel);
    };
    const onRowEnd = (player, channel) => {
        volumeSlide.onRowEnd && volumeSlide.onRowEnd(player, channel);
        tonePortamento.onRowEnd && tonePortamento.onRowEnd(player, channel);
    };
    const onTickStart = (player, channel) => {
        volumeSlide.onTickStart && volumeSlide.onTickStart(player, channel);
        tonePortamento.onTickStart && tonePortamento.onTickStart(player, channel);
    };
    return {
        onRowStart,
        onRowEnd,
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (volumeSlideTonePortamentoEffect);


/***/ }),

/***/ "./src/players/Protracker/effects/volumeSlideVibratoEffect/volumeSlideVibratoEffect.ts":
/*!*********************************************************************************************!*\
  !*** ./src/players/Protracker/effects/volumeSlideVibratoEffect/volumeSlideVibratoEffect.ts ***!
  \*********************************************************************************************/
/*! exports provided: volumeSlideVibratoEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumeSlideVibratoEffect", function() { return volumeSlideVibratoEffect; });
/* harmony import */ var _vibratoEffect_vibratoEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vibratoEffect/vibratoEffect */ "./src/players/Protracker/effects/vibratoEffect/vibratoEffect.ts");
/* harmony import */ var _volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../volumeSlideEffect/volumeSlideEffect */ "./src/players/Protracker/effects/volumeSlideEffect/volumeSlideEffect.ts");


const volumeSlideVibratoEffect = (p1, p2) => {
    const volumeSlide = Object(_volumeSlideEffect_volumeSlideEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(p1, p2);
    const vibrato = Object(_vibratoEffect_vibratoEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(); // continuation of last vibrato, hence no params
    const onRowStart = (player, channel) => {
        volumeSlide.onRowStart && volumeSlide.onRowStart(player, channel);
        vibrato.onRowStart && vibrato.onRowStart(player, channel);
    };
    const onRowEnd = (player, channel) => {
        volumeSlide.onRowEnd && volumeSlide.onRowEnd(player, channel);
        vibrato.onRowEnd && vibrato.onRowEnd(player, channel);
    };
    const onTickStart = (player, channel) => {
        volumeSlide.onTickStart && volumeSlide.onTickStart(player, channel);
        vibrato.onTickStart && vibrato.onTickStart(player, channel);
    };
    return {
        onRowStart,
        onRowEnd,
        onTickStart
    };
};
/* harmony default export */ __webpack_exports__["default"] = (volumeSlideVibratoEffect);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: createAudioContext, loadFile, loadFileFromDisk, loadFileFromUrl, pickRandom, minMaxLimit, randomInt, read8bitInt, readBigEndian16bitInt, readStringFromArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFileFromDisk", function() { return loadFileFromDisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFileFromUrl", function() { return loadFileFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRandom", function() { return pickRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minMaxLimit", function() { return minMaxLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read8bitInt", function() { return read8bitInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBigEndian16bitInt", function() { return readBigEndian16bitInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readStringFromArrayBuffer", function() { return readStringFromArrayBuffer; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createAudioContext() {
    return typeof window !== 'undefined'
        ? new (window.AudioContext || window.webkitAudioContext)()
        : globalThis;
}
function loadFile(source) {
    return __awaiter(this, void 0, void 0, function* () {
        return (typeof source === 'string' ? loadFileFromUrl(source) : loadFileFromDisk(source));
    });
}
function loadFileFromDisk(source) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject("TIMEOUT");
        };
        reader.onabort = () => {
            reject('ABORT');
        };
        console.log(`[INFO] Attempting to read file:`, source);
        reader.readAsArrayBuffer(source);
    });
}
function loadFileFromUrl(source) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', source, true);
        req.responseType = 'arraybuffer';
        req.onload = () => {
            if (req.response) {
                resolve(req.response);
            }
            else {
                reject("EMPTY");
            }
        };
        req.onerror = function () {
            reject("ERROR");
        };
        req.ontimeout = function () {
            reject("TIMEOUT");
        };
        req.onabort = function () {
            reject('ABORT');
        };
        console.log(`[INFO] Attempting to read file from URL: '${source}'`);
        req.send();
    });
}
;
function pickRandom(...params) {
    return params[randomInt(params.length)];
}
function minMaxLimit(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
/**
 * Given a max of 3, it will return 0,1,2
 */
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function read8bitInt(arrayBuffer, offset) {
    return new DataView(arrayBuffer).getUint8(offset);
}
;
function readBigEndian16bitInt(arrayBuffer, offset) {
    return new DataView(arrayBuffer).getUint16(offset, false);
}
;
function readStringFromArrayBuffer(arrayBuffer, start, end) {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(arrayBuffer.slice(start, end))));
}
;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9QbGF5ZXIvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvUHJvdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL1Byb3RyYWNrZXJBdWRpb1dvcmtsZXRQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL1Byb3RyYWNrZXJDaGFubmVsL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvUHJvdHJhY2tlck9zY2lsbGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9Qcm90cmFja2VyUmVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy9hcnBlZ2dpb0VmZmVjdC9hcnBlZ2dpb0VmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvZWZmZWN0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvZmluZVBvcnRhbWVudG9Eb3duRWZmZWN0L2ZpbmVQb3J0YW1lbnRvRG93bkVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvZmluZVBvcnRhbWVudG9VcEVmZmVjdC9maW5lUG9ydGFtZW50b1VwRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy9maW5lVm9sdW1lU2xpZGVEb3duRWZmZWN0L2ZpbmVWb2x1bWVTbGlkZURvd25FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL2ZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0L2ZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy9ub3RlQ3V0RWZmZWN0L25vdGVDdXRFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL25vdGVEZWxheUVmZmVjdC9ub3RlRGVsYXlFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3BhdHRlcm5CcmVha0VmZmVjdC9wYXR0ZXJuQnJlYWtFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3BhdHRlcm5EZWxheUVmZmVjdC9wYXR0ZXJuRGVsYXlFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3BhdHRlcm5Mb29wRWZmZWN0L3BhdHRlcm5Mb29wRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy9wb3J0YW1lbnRvRG93bkVmZmVjdC9wb3J0YW1lbnRvRG93bkVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvcG9ydGFtZW50b1VwRWZmZWN0L3BvcnRhbWVudG9VcEVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvcG9zaXRpb25KdW1wRWZmZWN0L3Bvc2l0aW9uSnVtcEVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvcmV0cmlnZ2VyTm90ZUVmZmVjdC9yZXRyaWdnZXJOb3RlRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy9zZXRGaW5lVHVuZUVmZmVjdC9zZXRGaW5lVHVuZUVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvc2V0U2FtcGxlT2Zmc2V0RWZmZWN0L3NldFNhbXBsZU9mZnNldEVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMvc2V0U3BlZWRFZmZlY3Qvc2V0U3BlZWRFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3NldFRyZW1vbG9XYXZlZm9ybUVmZmVjdC9zZXRUcmVtb2xvV2F2ZWZvcm1FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3NldFZpYnJhdG9XYXZlZm9ybUVmZmVjdC9zZXRWaWJyYXRvV2F2ZWZvcm1FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3NldFZvbHVtZUVmZmVjdC9zZXRWb2x1bWVFZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3RvbmVQb3J0YW1lbnRvRWZmZWN0L3RvbmVQb3J0YW1lbnRvRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy90cmVtb2xvRWZmZWN0L3RyZW1vbG9FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy92aWJyYXRvRWZmZWN0L3ZpYnJhdG9FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3ZvbHVtZVNsaWRlRWZmZWN0L3ZvbHVtZVNsaWRlRWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvZWZmZWN0cy92b2x1bWVTbGlkZVRvbmVQb3J0YW1lbnRvRWZmZWN0L3ZvbHVtZVNsaWRlVG9uZVBvcnRhbWVudG9FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9lZmZlY3RzL3ZvbHVtZVNsaWRlVmlicmF0b0VmZmVjdC92b2x1bWVTbGlkZVZpYnJhdG9FZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBLElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUNwQixtQ0FB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L0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7O0dBRUc7QUFDSSxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBQyxXQUF3QixFQUFFLE1BQWM7SUFDaEUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUFBLENBQUM7QUFFSyxTQUFTLHFCQUFxQixDQUFDLFdBQXdCLEVBQUUsTUFBYztJQUMxRSxPQUFPLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUFBLENBQUM7QUFFSyxTQUFTLHlCQUF5QixDQUFDLFdBQXdCLEVBQUUsS0FBYSxFQUFFLEdBQVk7SUFDM0YsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FDNUIsSUFBSSxFQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0FBQ04sQ0FBQztBQUFBLENBQUMiLCJmaWxlIjoicHJvdHJhY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9Qcm90cmFja2VyQXVkaW9Xb3JrbGV0UHJvY2Vzc29yLnRzXCIpO1xuIiwiZXhwb3J0IGVudW0gUGxheWVyU3RhdHVzIHtcbiAgICBTVE9QUEVEID0gJ1NUT1BQRUQnLFxuICAgIFBBVVNFRCA9ICdQQVVTRUQnLFxuICAgIFBMQVlJTkcgPSAnUExBWUlORycsXG4gICAgRVJST1IgPSAnRVJST1InLFxufVxuIiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBsYXllciB7XG4gICAgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQ7XG4gICAgc3RhdHVzOiBjb25zdGFudHMuUGxheWVyU3RhdHVzID0gY29uc3RhbnRzLlBsYXllclN0YXR1cy5TVE9QUEVEO1xuXG4gICAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0UGxheWJhY2tTdGF0dXMoKTogY29uc3RhbnRzLlBsYXllclN0YXR1cztcbiAgICBhYnN0cmFjdCBoYXNTdWJ0cmFja3MoKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBwYXVzZSgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHBsYXkoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwcmV2aW91c1N1YnRyYWNrKCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgbmV4dFN1YnRyYWNrKCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgcmVzZXQoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZXRTdWJ0cmFjayhpbmRleDogbnVtYmVyKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBza2lwVG9Qb3NpdGlvbihuZXdQb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbjtcblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGNvbnN0YW50cy5QbGF5ZXJTdGF0dXMuU1RPUFBFRDtcbiAgICB9O1xufTtcbiIsImltcG9ydCAqIGFzIHByb3RyYWNrZXJDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgYXBwQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IEluc3RydWN0aW9uIH0gZnJvbSAnLi9tb2RlbHMvSW5zdHJ1Y3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFNhbXBsZSB9IGZyb20gJy4vbW9kZWxzL1NhbXBsZS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXIvUGxheWVyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCAqIGFzIHJlYWRlciBmcm9tIFwiLi9Qcm90cmFja2VyUmVhZGVyXCI7XG5pbXBvcnQgeyBpc1RvbmVQb3J0YW1lbnRvIH0gZnJvbSAnLi9lZmZlY3RzL3V0aWxzJztcblxuLy8gaW1wb3J0IHsgbWVyZ2VDaGFubmVsc1RvT3V0cHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBTb25nID0ge1xuICAgIGNoYW5uZWxDb3VudDogICAgbnVtYmVyO1xuICAgIHBhdHRlcm5Db3VudDogICAgbnVtYmVyO1xuICAgIHBhdHRlcm5zOiAgICAgICAgSW5zdHJ1Y3Rpb25bXVtdW107XG4gICAgcGF0dGVyblNlcXVlbmNlOiBudW1iZXJbXTtcbiAgICByb3dzUGVyUGF0dGVybjogIG51bWJlcixcbiAgICBzYW1wbGVzOiAgICAgICAgIFNhbXBsZVtdO1xuICAgIHNpZ25hdHVyZTogICAgICAgc3RyaW5nO1xuICAgIHNvbmdMZW5ndGg6ICAgICAgbnVtYmVyO1xuICAgIHNvbmdMb29wOiAgICAgICAgbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHRpdGxlOiAgICAgICAgICAgc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgU3RhdGUgPSB7XG4gICAgY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uOiBudW1iZXIsXG4gICAgY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4OiBudW1iZXIsXG4gICAgY3VycmVudFJvd0luZGV4OiAgICAgICAgICAgICBudW1iZXIsXG4gICAgY3VycmVudFN1YnRyYWNrOiAgICAgICAgICAgICBudW1iZXIsXG4gICAgY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbjogICBudW1iZXIsXG4gICAgY3VycmVudFRpY2s6ICAgICAgICAgICAgICAgICBudW1iZXIsXG4gICAgcGF0dGVybkRlbGF5OiAgICAgICAgICAgICAgICBudW1iZXI7IC8vIEluIHRpY2tzXG4gICAgcGF0dGVybkxvb3BDb3VudDogICAgICAgICAgICBudW1iZXIsXG4gICAgcGF0dGVybkxvb3BSb3dJbmRleDogICAgICAgICBudW1iZXIsXG4gICAgcm93c1BlckJlYXQ6ICAgICAgICAgICAgICAgICBudW1iZXIsXG4gICAgc2FtcGxlc1BlclRpY2s6ICAgICAgICAgICAgICBudW1iZXIsIC8vIDI1MDAvYnBtXG4gICAgc3BlZWQ6ICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIsIC8vIEEuSy5BIHRpY2tzLXBlci1yb3dcbiAgICB0ZW1wbzogICAgICAgICAgICAgICAgICAgICAgIG51bWJlciwgLy8gQS5LLkEgYmVhdHMtcGVyLW1pbnVlIChCUE0pLlxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvbjogMCxcbiAgICBjdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXg6IDAsXG4gICAgY3VycmVudFJvd0luZGV4OiAgICAgICAgICAgICAwLFxuICAgIGN1cnJlbnRTdWJ0cmFjazogICAgICAgICAgICAgMCxcbiAgICBjdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uOiAgIDAsXG4gICAgY3VycmVudFRpY2s6ICAgICAgICAgICAgICAgICAwLFxuICAgIHBhdHRlcm5EZWxheTogICAgICAgICAgICAgICAgLTEsXG4gICAgcGF0dGVybkxvb3BDb3VudDogICAgICAgICAgICAwLFxuICAgIHBhdHRlcm5Mb29wUm93SW5kZXg6ICAgICAgICAgMCxcbiAgICByb3dzUGVyQmVhdDogICAgICAgICAgICAgICAgIDQsXG4gICAgc2FtcGxlc1BlclRpY2s6ICAgICAgICAgICAgICAwLFxuICAgIHNwZWVkOiAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICB0ZW1wbzogICAgICAgICAgICAgICAgICAgICAgIDEyNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RyYWNrZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGFtaWdhQ2xvY2tTcGVlZCAgICAgOiBudW1iZXIgICAgICAgICAgICAgICAgPSBwcm90cmFja2VyQ29uc3RhbnRzLkFNSUdBX0NMT0NLX1NQRUVEX1BBTDtcbiAgICBjaGFubmVscyAgICAgICAgICAgIDogUHJvdHJhY2tlckNoYW5uZWxbXSAgID0gW107XG4gICAgc29uZyAgICAgICAgICAgICAgICA6IFNvbmc7XG4gICAgc3RhdGUgICAgICAgICAgICAgICA6IFN0YXRlICAgICAgICAgICAgICAgICA9IHsuLi5kZWZhdWx0U3RhdGV9O1xuXG4gICAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQsIGZpbGVEYXRhOiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuXG4gICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHJlYWQtb25seSBwcm9wZXJ0aWVzIG9mIHRoZSBzb25nIGZyb20gdGhlIGZpbGVcbiAgICAgICAgdGhpcy5zb25nID0ge1xuICAgICAgICAgICAgY2hhbm5lbENvdW50OiAgICByZWFkZXIuZ2V0Q2hhbm5lbENvdW50KGZpbGVEYXRhKSxcbiAgICAgICAgICAgIHBhdHRlcm5Db3VudDogICAgcmVhZGVyLmdldFBhdHRlcm5Db3VudChmaWxlRGF0YSksXG4gICAgICAgICAgICBwYXR0ZXJuczogICAgICAgIHJlYWRlci5nZXRQYXR0ZXJucyhmaWxlRGF0YSksXG4gICAgICAgICAgICBwYXR0ZXJuU2VxdWVuY2U6IHJlYWRlci5nZXRQYXR0ZXJuU2VxdWVuY2UoZmlsZURhdGEpLFxuICAgICAgICAgICAgcm93c1BlclBhdHRlcm46ICByZWFkZXIuZ2V0Um93c1BlclBhdHRlcm4oZmlsZURhdGEpLFxuICAgICAgICAgICAgc2FtcGxlczogICAgICAgICByZWFkZXIuZ2V0U2FtcGxlcyhmaWxlRGF0YSwgdHJ1ZSksXG4gICAgICAgICAgICBzaWduYXR1cmU6ICAgICAgIHJlYWRlci5nZXRTaWduYXR1cmUoZmlsZURhdGEpLFxuICAgICAgICAgICAgc29uZ0xlbmd0aDogICAgICByZWFkZXIuZ2V0VXNlZFBhdHRlcm5TZXF1ZW5jZUxlbmd0aChmaWxlRGF0YSksXG4gICAgICAgICAgICBzb25nTG9vcDogICAgICAgIHJlYWRlci5nZXRTb25nTG9vcFBhdHRlcm5TZXF1ZW5jZUluZGV4KGZpbGVEYXRhKSxcbiAgICAgICAgICAgIHRpdGxlOiAgICAgICAgICAgcmVhZGVyLmdldFRpdGxlKGZpbGVEYXRhKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXR1cENoYW5uZWxzKHRoaXMuc29uZy5jaGFubmVsQ291bnQpO1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrID0gdGhpcy5fY2FsY3VsYXRlU2FtcGxlc1BlclRpY2soKTtcbiAgICB9O1xuXG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiAgICAgUHVibGljIGZ1bmN0aW9ucyAgICAgKlxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGdldENoYW5uZWxzKCk6IFByb3RyYWNrZXJDaGFubmVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscztcbiAgICB9O1xuXG4gICAgZ2V0UGF0dGVybkRlbGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdHRlcm5EZWxheTtcbiAgICB9XG5cbiAgICBnZXRQYXR0ZXJuTG9vcENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdHRlcm5Mb29wQ291bnQ7XG4gICAgfVxuXG4gICAgZ2V0UGF0dGVybkxvb3BSb3dJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXR0ZXJuTG9vcFJvd0luZGV4O1xuICAgIH1cblxuICAgIGdldFBsYXliYWNrU3RhdGUoKTogU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICAgIH07XG5cbiAgICBnZXRQbGF5YmFja1N0YXR1cygpOiBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH07XG5cbiAgICBnZXRSb3dQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjdXJyZW50U2FtcGxlcyA9ICh0aGlzLnN0YXRlLmN1cnJlbnRUaWNrICogdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljaykgKyB0aGlzLnN0YXRlLmN1cnJlbnRUaWNrU2FtcGxlUG9zaXRpb247XG4gICAgICAgIHJldHVybiBjdXJyZW50U2FtcGxlcyAvICh0aGlzLnN0YXRlLnNwZWVkICogdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljayk7XG4gICAgfVxuXG4gICAgZ2V0U29uZygpOiBTb25nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uZztcbiAgICB9O1xuXG4gICAgZ2V0U29uZ0xvb3BJbmRleCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zb25nLnNvbmdMb29wO1xuICAgIH1cblxuICAgIGhhc1N1YnRyYWNrcygpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1YnRyYWNrIHN1cHBvcnRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBuZXh0UGF0dGVybigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXggKyAxKTtcbiAgICB9O1xuXG4gICAgbmV4dFJvdygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Um93SW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50Um93SW5kZXggKyAxKSB8fCB0aGlzLm5leHRQYXR0ZXJuKCk7XG4gICAgfTtcblxuICAgIG5leHRTdWJ0cmFjaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3VidHJhY2sodGhpcy5zdGF0ZS5jdXJyZW50U3VidHJhY2sgKyAxKTtcbiAgICB9O1xuXG4gICAgbmV4dFRpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5jdXJyZW50VGljayArIDEpIHx8IHRoaXMubmV4dFJvdygpO1xuICAgIH07XG5cbiAgICBwYXVzZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09IGFwcENvbnN0YW50cy5QbGF5ZXJTdGF0dXMuUExBWUlORykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzLlBBVVNFRDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzLlBMQVlJTkc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1BhdHRlcm4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4IC0gMSk7XG4gICAgfTtcblxuICAgIHByZXZpb3VzUm93KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZighdGhpcy5zZXRSb3dJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnRSb3dJbmRleCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91c1BhdHRlcm4oKSAmJiB0aGlzLnNldFJvd0luZGV4KHRoaXMuc29uZy5yb3dzUGVyUGF0dGVybiAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1N1YnRyYWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJ0cmFjayh0aGlzLnN0YXRlLmN1cnJlbnRTdWJ0cmFjayAtIDEpO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1RpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKCF0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5jdXJyZW50VGljayAtIDEpKSB7XG4gICAgICAgICAgICBpZih0aGlzLnByZXZpb3VzUm93KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5zcGVlZCAtIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Li4uZGVmYXVsdFN0YXRlLCBjdXJyZW50U3VidHJhY2s6IHRoaXMuc3RhdGUuY3VycmVudFN1YnRyYWNrfVxuICAgICAgICB0aGlzLmNoYW5uZWxzLmZvckVhY2goY2hhbm5lbCA9PiBjaGFubmVsLnJlc2V0KCkpO1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrID0gdGhpcy5fY2FsY3VsYXRlU2FtcGxlc1BlclRpY2soKTtcbiAgICB9O1xuXG4gICAgc2V0QW1pZ2FDbG9ja1NwZWVkKGNsb2NrU3BlZWQ6IHByb3RyYWNrZXJDb25zdGFudHMuQU1JR0FfQ0xPQ0tfU1BFRUQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbWlnYUNsb2NrU3BlZWQgPSBjbG9ja1NwZWVkO1xuICAgIH07XG5cbiAgICBzZXRQYXR0ZXJuRGVsYXkodGlja3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnBhdHRlcm5EZWxheSA9IHRpY2tzO1xuICAgIH1cblxuICAgIHNldFBhdHRlcm5Mb29wQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnBhdHRlcm5Mb29wQ291bnQgPSBjb3VudDtcbiAgICB9XG5cbiAgICBzZXRQYXR0ZXJuTG9vcFJvd0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXR0ZXJuTG9vcFJvd0luZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgoaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCwgemVyb09uRmFpbDogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuc29uZy5wYXR0ZXJuU2VxdWVuY2VbaW5kZXhdICE9PSAndW5kZWZpbmVkJyAmJiBpbmRleCA8PSB0aGlzLnNvbmcuc29uZ0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFJvd0luZGV4KDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoemVyb09uRmFpbCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZXRSb3dJbmRleCgwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2V0Um93SW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLl9nZXRDdXJyZW50UGF0dGVybigpW2luZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0UGF0dGVybkxvb3BSb3dJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGljaygwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2V0U3BlZWQoc3BlZWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXRlLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxuXG4gICAgc2V0U3VidHJhY2soaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VidHJhY2sgc3VwcG9ydFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHNldFRlbXBvKHRlbXBvOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS50ZW1wbyA9IHRlbXBvO1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrID0gdGhpcy5fY2FsY3VsYXRlU2FtcGxlc1BlclRpY2soKTtcbiAgICB9XG5cbiAgICBzZXRUaWNrKHRpY2s6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aWNrIDwgdGhpcy5zdGF0ZS5zcGVlZCAmJiB0aWNrID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFRpY2sgPSB0aWNrO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2tpcFRvUG9zaXRpb24obmV3UG9zaXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiAgICAgRXZlbnQgZnVuY3Rpb25zICAgICAqXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBvbkF1ZGlvUHJvY2VzcyhjaGFubmVsQnVmZmVyczogRmxvYXQzMkFycmF5W10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHN0aWxsTW9yZVRvUGxheSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0RlbGF5ZWQoKSkge1xuICAgICAgICAgICAgaWYodGhpcy5faXNTdGFydG9mUm93KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NpZ25JbnN0cnVjdGlvbnNUb0NoYW5uZWxzKHRoaXMuX2dldEN1cnJlbnRSb3coKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0VmZmVjdHMoJ29uUm93U3RhcnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5faXNTdGFydE9mVGljaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0VmZmVjdHMoJ29uVGlja1N0YXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWxsQnVmZmVycyhjaGFubmVsQnVmZmVycyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0RlbGF5ZWQoKSAmJiB0aGlzLl9pc0VuZE9mUm93KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NFZmZlY3RzKCdvblJvd0VuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5faXNFbmRPZlRpY2soKSkge1xuICAgICAgICAgICAgc3RpbGxNb3JlVG9QbGF5ID0gdGhpcy5fZ29Ub05leHRQb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3RpbGxNb3JlVG9QbGF5KSB7XG4gICAgICAgICAgICBpZighdGhpcy5faXNCdWZmZXJGdWxsKGNoYW5uZWxCdWZmZXJzWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBzdGlsbE1vcmVUb1BsYXkgPSB0aGlzLm9uQXVkaW9Qcm9jZXNzKGNoYW5uZWxCdWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGlsbE1vcmVUb1BsYXk7XG4gICAgfTtcblxuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqICAgICBQcml2YXRlIGZ1bmN0aW9ucyAgICAgKlxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBwcml2YXRlIF9hc3NpZ25JbnN0cnVjdGlvbnNUb0NoYW5uZWxzKHJvdzogSW5zdHJ1Y3Rpb25bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5uZWxzLmZvckVhY2goKGNoYW5uZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnN0cnVjdGlvbiA9IHJvd1tpbmRleF07XG4gICAgICAgICAgICBjaGFubmVsLnNldEluc3RydWN0aW9uKGluc3RydWN0aW9uKTtcblxuICAgICAgICAgICAgaWYoaW5zdHJ1Y3Rpb24uc2FtcGxlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBBIHNhbXBsZUluZGV4IG9mIDAgbWVhbnMgbm8gc2FtcGxlIHNwZWNpZmllZCwgd2hpY2ggbWVhbnMgdGhhdFxuICAgICAgICAgICAgICAgIC8vIEVmZmVjdGl2ZWx5LCB0aGUgc2FtcGxlcyBjb21pbmcgZnJvbSB0aGUgaW5zdHJ1Y3Rpb25zIGFyZSAxLWJhc2VkLlxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gaGFuZGxlIHRoaXMgYXMgdGhlIHNhbXBsZSBhcnJheSBpcyAwLWJhc2VkLlxuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0U2FtcGxlKHRoaXMuc29uZy5zYW1wbGVzW2luc3RydWN0aW9uLnNhbXBsZUluZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIGNoYW5uZWwucmVzZXRWb2x1bWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaW5zdHJ1Y3Rpb24ucGVyaW9kICYmICghaXNUb25lUG9ydGFtZW50byhpbnN0cnVjdGlvbi5lZmZlY3QpKSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwucmVzZXRGaW5lVHVuZSgpO1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0T3JpZ2luYWxQZXJpb2QoaW5zdHJ1Y3Rpb24ucGVyaW9kKTtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnJlc2V0U2FtcGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZU51bWJlck9mU2FtcGxlc1RvR2VuZXJhdGUoYnVmZmVyU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljayAtIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbixcbiAgICAgICAgICAgIGJ1ZmZlclNpemUgLSB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvblxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVTYW1wbGVzUGVyVGljaygpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0aWNrRHVyYXRpb25NcyA9ICgyNTAwIC8gdGhpcy5zdGF0ZS50ZW1wbyk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUgKiAodGlja0R1cmF0aW9uTXMgLyAxMDAwKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlsbEJ1ZmZlcnMoY2hhbm5lbEJ1ZmZlcnM6IEZsb2F0MzJBcnJheVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNhbXBsZXNUb0dlbmVyYXRlID0gdGhpcy5fY2FsY3VsYXRlTnVtYmVyT2ZTYW1wbGVzVG9HZW5lcmF0ZShjaGFubmVsQnVmZmVyc1swXS5sZW5ndGgpO1xuXG4gICAgICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNoYW5uZWwuZmlsbEJ1ZmZlcihjaGFubmVsQnVmZmVyc1tpbmRleF0sIHRoaXMuc3RhdGUuY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uLCBzYW1wbGVzVG9HZW5lcmF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiArIHNhbXBsZXNUb0dlbmVyYXRlO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUuY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uICsgc2FtcGxlc1RvR2VuZXJhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q3VycmVudFBhdHRlcm4oKTogSW5zdHJ1Y3Rpb25bXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uZy5wYXR0ZXJuc1t0aGlzLnNvbmcucGF0dGVyblNlcXVlbmNlW3RoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4XV07XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2dldEN1cnJlbnRSb3coKTogSW5zdHJ1Y3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDdXJyZW50UGF0dGVybigpW3RoaXMuc3RhdGUuY3VycmVudFJvd0luZGV4XTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfZ29Ub05leHRQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbjtcblxuICAgICAgICBpZih0aGlzLl9pc0RlbGF5ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYXR0ZXJuRGVsYXkodGhpcy5nZXRQYXR0ZXJuRGVsYXkoKSAtIDEpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dFBvc2l0aW9uID0gKFxuICAgICAgICAgICAgdGhpcy5zZXRUaWNrKHRoaXMuc3RhdGUuY3VycmVudFRpY2sgKyAxKSB8fFxuICAgICAgICAgICAgdGhpcy5zZXRSb3dJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnRSb3dJbmRleCArIDEpIHx8XG4gICAgICAgICAgICB0aGlzLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4ICsgMSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgbm8gbmV4dCBwb3NpdGlvbiB0byBhZHZhbmNlIHRvLCBhdHRlbXB0IHRvIGxvb3BcbiAgICAgICAgaWYoIW5leHRQb3NpdGlvbiAmJiB0aGlzLnNvbmcuc29uZ0xvb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgodGhpcy5zb25nLnNvbmdMb29wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0UG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfaXNCdWZmZXJGdWxsKGJ1ZmZlclNpemU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50QnVmZmVyU2FtcGxlUG9zaXRpb24gPT09IGJ1ZmZlclNpemU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEZWxheWVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFbmRPZlJvdygpICYmIHRoaXMuZ2V0UGF0dGVybkRlbGF5KCkgPj0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0VuZE9mUm93KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50VGljayA9PT0gdGhpcy5zdGF0ZS5zcGVlZCAtIDEgJiYgdGhpcy5faXNFbmRPZlRpY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0VuZE9mVGljaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiA9PT0gdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljaztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1N0YXJ0b2ZSb3coKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRUaWNrID09PSAwICYmIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiA9PT0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1N0YXJ0T2ZUaWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID09PSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Byb2Nlc3NFZmZlY3RzKGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxFZmZlY3QgPSBjaGFubmVsLmdldEVmZmVjdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihjaGFubmVsRWZmZWN0KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvblJvd1N0YXJ0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbEVmZmVjdC5vblJvd1N0YXJ0ICYmIGNoYW5uZWxFZmZlY3Qub25Sb3dTdGFydCh0aGlzLCBjaGFubmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29uUm93RW5kJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbEVmZmVjdC5vblJvd0VuZCAmJiBjaGFubmVsRWZmZWN0Lm9uUm93RW5kKHRoaXMsIGNoYW5uZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb25UaWNrU3RhcnQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsRWZmZWN0Lm9uVGlja1N0YXJ0ICYmIGNoYW5uZWxFZmZlY3Qub25UaWNrU3RhcnQodGhpcywgY2hhbm5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0dXBDaGFubmVscyhjaGFubmVsQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5uZWxzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGNoYW5uZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzLnB1c2gobmV3IFByb3RyYWNrZXJDaGFubmVsKGksIHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUsIHRoaXMuYW1pZ2FDbG9ja1NwZWVkKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW50ZXJmYWNlIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7XG4gICAgcmVhZG9ubHkgcG9ydDogTWVzc2FnZVBvcnQ7XG4gICAgcHJvY2VzcyhcbiAgICAgIGlucHV0czogRmxvYXQzMkFycmF5W11bXSxcbiAgICAgIG91dHB1dHM6IEZsb2F0MzJBcnJheVtdW10sXG4gICAgICBwYXJhbWV0ZXJzOiBSZWNvcmQ8c3RyaW5nLCBGbG9hdDMyQXJyYXk+XG4gICAgKTogYm9vbGVhbjtcbn1cblxuZGVjbGFyZSB2YXIgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yOiB7XG4gICAgcHJvdG90eXBlOiBBdWRpb1dvcmtsZXRQcm9jZXNzb3I7XG4gICAgbmV3IChvcHRpb25zPzogQXVkaW9Xb3JrbGV0Tm9kZU9wdGlvbnMpOiBBdWRpb1dvcmtsZXRQcm9jZXNzb3I7XG59O1xuXG5kZWNsYXJlIGZ1bmN0aW9uIHJlZ2lzdGVyUHJvY2Vzc29yKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwcm9jZXNzb3JDdG9yOiAobmV3IChcbiAgICAgIG9wdGlvbnM/OiBBdWRpb1dvcmtsZXROb2RlT3B0aW9uc1xuICAgICkgPT4gQXVkaW9Xb3JrbGV0UHJvY2Vzc29yKSAmIHtcbiAgICAgIHBhcmFtZXRlckRlc2NyaXB0b3JzPzogQXVkaW9QYXJhbURlc2NyaXB0b3JbXTtcbiAgICB9XG4pOiB2b2lkO1xuXG5cblxuXG5pbXBvcnQgUHJvdHJhY2tlciBmcm9tICcuL1Byb3RyYWNrZXInO1xuXG5jbGFzcyBQcm90cmFja2VyQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHtcbiAgICBmaWxlRGF0YTogQXJyYXlCdWZmZXI7XG4gICAgcGxheWVyOiBQcm90cmFja2VyO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBBdWRpb1dvcmtsZXROb2RlT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IChnbG9iYWxUaGlzIGFzIHVua25vd24pIGFzIEF1ZGlvQ29udGV4dDsgLy8gaGFjayBhcyBjdXJyZW50IHNjb3BlIGlzbnQgZGVmaW5lZCBwcm9wZXJseVxuXG4gICAgICAgIHRoaXMuZmlsZURhdGEgPSBjb25maWcucHJvY2Vzc29yT3B0aW9ucy5maWxlRGF0YTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUHJvdHJhY2tlcihhdWRpb0NvbnRleHQsIHRoaXMuZmlsZURhdGEpO1xuICAgICAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzIChpbnB1dHM6RmxvYXQzMkFycmF5W11bXSwgb3V0cHV0czpGbG9hdDMyQXJyYXlbXVtdLCBwYXJhbWV0ZXJzOlJlY29yZDxzdHJpbmcsIEZsb2F0MzJBcnJheT4pIHtcbiAgICAgICAgY29uc3Qgbm90RmluaXNoZWQgPSB0aGlzLnBsYXllci5vbkF1ZGlvUHJvY2VzcyhvdXRwdXRzLm1hcChvdXRwdXQgPT4gb3V0cHV0WzBdKSk7XG5cbiAgICAgICAgaWYoIW5vdEZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UoeyBtZXNzYWdlOiAnZW5kZWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdEZpbmlzaGVkO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZSAoZXZlbnQ6IGFueSkge1xuICAgICAgICBzd2l0Y2goZXZlbnQuZGF0YS5jbWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RvcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2V0SW5mbyc6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3NvbmdJbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucGxheWVyLmdldFNvbmcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxucmVnaXN0ZXJQcm9jZXNzb3IoJ3Byb3RyYWNrZXInLCBQcm90cmFja2VyQXVkaW9Xb3JrbGV0UHJvY2Vzc29yKSAvKiByZWdpc3RlclByb2Nlc3NvciBpcyBnbG9iYWwgdG8gQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHNjb3BlICovIiwiaW1wb3J0IHsgZWZmZWN0RmFjdG9yeSB9IGZyb20gJy4uL2VmZmVjdHMvZWZmZWN0RmFjdG9yeSc7XG5pbXBvcnQgeyBFZmZlY3RDb2RlIH0gZnJvbSAnLi4vbW9kZWxzL0VmZmVjdENvZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluc3RydWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL0luc3RydWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTYW1wbGUgfSBmcm9tICcuLi9tb2RlbHMvU2FtcGxlLmludGVyZmFjZSc7XG5pbXBvcnQgUHJvdHJhY2tlck9zY2lsbGF0b3IgZnJvbSAnLi4vUHJvdHJhY2tlck9zY2lsbGF0b3InO1xuaW1wb3J0IHsgYXBwbHlWb2x1bWVUb1NhbXBsZSwgZ2V0RmluZVR1bmVkUGVyaW9kLCBnZXRGcmVxdWVuY3ksIGdldE5leHRTYW1wbGVJbmNyZW1lbnQsIGdldFNhbXBsZUluY3JlbWVudFZhbHVlLCBnZXRTYW1wbGVWYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBzdGF0ZSA9IHtcbiAgICBlZmZlY3Q6IFJldHVyblR5cGU8dHlwZW9mIGVmZmVjdEZhY3Rvcnk+LFxuICAgIGZpbmVUdW5lOiBudW1iZXIsXG4gICAgZnJlcXVlbmN5OiBudW1iZXIsXG4gICAgaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uIHwgdW5kZWZpbmVkLFxuICAgIG9yaWdpbmFsUGVyaW9kOiBudW1iZXIsXG4gICAgZmluZVR1bmVkUGVyaW9kOiBudW1iZXIsXG4gICAgcGVyaW9kOiBudW1iZXIsXG4gICAgc2FtcGxlOiBTYW1wbGUgfCB1bmRlZmluZWQsXG4gICAgc2FtcGxlSGFzRW5kZWQ6IGJvb2xlYW4sXG4gICAgc2FtcGxlSW5jcmVtZW50OiBudW1iZXIsXG4gICAgc2FtcGxlUG9zaXRpb246IG51bWJlcixcbiAgICBzbGlkZVJhdGU6IG51bWJlcixcbiAgICBzbGlkZVRhcmdldDogbnVtYmVyLFxuICAgIHRyZW1vbG86IFByb3RyYWNrZXJPc2NpbGxhdG9yLFxuICAgIHZpYnJhdG86IFByb3RyYWNrZXJPc2NpbGxhdG9yLFxuICAgIHZvbHVtZTogbnVtYmVyXG59XG5cbmNvbnN0IGdldERlZmF1bHRTdGF0ZSA9ICgpOnN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZmZlY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZmluZVR1bmU6IDAsXG4gICAgICAgIGZyZXF1ZW5jeTogMCxcbiAgICAgICAgaW5zdHJ1Y3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgb3JpZ2luYWxQZXJpb2Q6IDAsXG4gICAgICAgIGZpbmVUdW5lZFBlcmlvZDogMCxcbiAgICAgICAgcGVyaW9kOiAwLFxuICAgICAgICBzYW1wbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2FtcGxlSGFzRW5kZWQ6IGZhbHNlLFxuICAgICAgICBzYW1wbGVJbmNyZW1lbnQ6IDAsXG4gICAgICAgIHNhbXBsZVBvc2l0aW9uOiAwLFxuICAgICAgICBzbGlkZVJhdGU6IDAsXG4gICAgICAgIHNsaWRlVGFyZ2V0OiAwLFxuICAgICAgICB0cmVtb2xvOiBuZXcgUHJvdHJhY2tlck9zY2lsbGF0b3IsXG4gICAgICAgIHZpYnJhdG86IG5ldyBQcm90cmFja2VyT3NjaWxsYXRvcixcbiAgICAgICAgdm9sdW1lOiA2NFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RyYWNrZXJDaGFubmVsIHtcbiAgICBhbWlnYUNsb2NrU3BlZWQ6IG51bWJlcjtcbiAgICBidWZmZXJGcmVxdWVuY3k6IG51bWJlcjtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN0YXRlOiBzdGF0ZSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYnVmZmVyRnJlcXVlbmN5OiBudW1iZXIsIGFtaWdhQ2xvY2tTcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5hbWlnYUNsb2NrU3BlZWQgPSBhbWlnYUNsb2NrU3BlZWQ7XG4gICAgICAgIHRoaXMuYnVmZmVyRnJlcXVlbmN5ID0gYnVmZmVyRnJlcXVlbmN5O1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfTtcblxuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vICogICAgIFB1YmxpYyBmdW5jdGlvbnMgICAgICpcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBmaWxsQnVmZmVyKGJ1ZmZlcjogRmxvYXQzMkFycmF5LCBidWZmZXJTdGFydDogbnVtYmVyLCBzYW1wbGVzVG9HZW5lcmF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGJ1ZmZlclN0YXJ0ICsgc2FtcGxlc1RvR2VuZXJhdGUsIGJ1ZmZlci5sZW5ndGgpO1xuICAgICAgICBsZXQgaSA9IGJ1ZmZlclN0YXJ0O1xuXG4gICAgICAgIC8vIEZvciBldmVyeSBzYW1wbGUgd2UgbmVlZCB0byBnZW5lcmF0ZVxuICAgICAgICBmb3IoaTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHdlIGhhdmUgYSBzYW1wbGUgYXNzaWduZWQgYW5kIHRoYXQgdGhlIHNhbXBsZSBoYXNuJ3QgZW5kZWRcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2FtcGxlICE9PSBudWxsICYmICF0aGlzLnN0YXRlLnNhbXBsZUhhc0VuZGVkKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gdGhpcy5fZ2V0U2FtcGxlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmNyZW1lbnRTYW1wbGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRFZmZlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmVmZmVjdDtcbiAgICB9O1xuXG4gICAgZ2V0RWZmZWN0Q29kZSgpOiBFZmZlY3RDb2RlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaW5zdHJ1Y3Rpb24gPyB0aGlzLnN0YXRlLmluc3RydWN0aW9uLmVmZmVjdCA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgZ2V0RmluZVR1bmUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZmluZVR1bmU7XG4gICAgfTtcblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBnZXRJbnN0cnVjdGlvbigpOiBJbnN0cnVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmluc3RydWN0aW9uO1xuICAgIH1cblxuICAgIGdldE9yaWdpbmFsUGVyaW9kKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9yaWdpbmFsUGVyaW9kO1xuICAgIH1cblxuICAgIGdldEZpbmVUdW5lZFBlcmlvZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5maW5lVHVuZWRQZXJpb2Q7XG4gICAgfVxuXG4gICAgZ2V0UGVyaW9kKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBlcmlvZDtcbiAgICB9O1xuXG4gICAgZ2V0U2FtcGxlKCk6IFNhbXBsZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNhbXBsZTtcbiAgICB9O1xuXG4gICAgZ2V0U2FtcGxlUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2FtcGxlUG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0U2xpZGVSYXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNsaWRlUmF0ZTtcbiAgICB9XG5cbiAgICBnZXRTbGlkZVRhcmdldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zbGlkZVRhcmdldDtcbiAgICB9XG5cbiAgICBnZXRUcmVtb2xvKCk6IFByb3RyYWNrZXJPc2NpbGxhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudHJlbW9sbztcbiAgICB9XG5cbiAgICBnZXRWaWJyYXRvKCk6IFByb3RyYWNrZXJPc2NpbGxhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmlicmF0bztcbiAgICB9XG5cbiAgICBnZXRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudm9sdW1lO1xuICAgIH1cblxuICAgIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0RGVmYXVsdFN0YXRlKCk7XG4gICAgfTtcblxuICAgIHJlc2V0RmluZVR1bmUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZmluZVR1bmUgPSB0aGlzLnN0YXRlLnNhbXBsZSA/IHRoaXMuc3RhdGUuc2FtcGxlLmZpbmVUdW5lIDogMDtcbiAgICB9XG5cbiAgICByZXNldFBlcmlvZCgpIHtcbiAgICAgICAgdGhpcy5zZXRQZXJpb2QodGhpcy5zdGF0ZS5maW5lVHVuZWRQZXJpb2QpO1xuICAgIH1cblxuICAgIHJlc2V0U2FtcGxlKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZUhhc0VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVTYW1wbGVJbmNyZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXNldFZvbHVtZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS52b2x1bWUgPSB0aGlzLnN0YXRlLnNhbXBsZSA/IHRoaXMuc3RhdGUuc2FtcGxlLnZvbHVtZSA6IDY0O1xuICAgIH1cblxuICAgIHNldEZpbmVUdW5lKGZpbmVUdW5lOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5maW5lVHVuZSA9IGZpbmVUdW5lO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVGaW5lVHVuZWRQZXJpb2QoKTtcbiAgICAgICAgdGhpcy5zZXRQZXJpb2QodGhpcy5zdGF0ZS5maW5lVHVuZWRQZXJpb2QpO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVGcmVxdWVuY3koKTtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlU2FtcGxlSW5jcmVtZW50KCk7XG4gICAgfTtcblxuICAgIHNldEluc3RydWN0aW9uKGluc3RydWN0aW9uOiBJbnN0cnVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb247XG4gICAgICAgIHRoaXMuc3RhdGUuZWZmZWN0ID0gZWZmZWN0RmFjdG9yeShpbnN0cnVjdGlvbi5lZmZlY3QpO1xuICAgIH1cblxuICAgIHNldE9yaWdpbmFsUGVyaW9kKHBlcmlvZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUub3JpZ2luYWxQZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUZpbmVUdW5lZFBlcmlvZCgpO1xuICAgICAgICB0aGlzLnNldFBlcmlvZCh0aGlzLnN0YXRlLmZpbmVUdW5lZFBlcmlvZCk7XG4gICAgfVxuXG4gICAgc2V0UGVyaW9kKHBlcmlvZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUucGVyaW9kID0gcGVyaW9kO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVGcmVxdWVuY3koKTtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlU2FtcGxlSW5jcmVtZW50KCk7XG4gICAgfTtcblxuICAgIHNldFNhbXBsZShzYW1wbGU6IFNhbXBsZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZSA9IHNhbXBsZTtcbiAgICB9O1xuXG4gICAgc2V0U2FtcGxlQXNFbmRlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVIYXNFbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0U2FtcGxlUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZVBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgc2V0U2xpZGVSYXRlKHJhdGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnNsaWRlUmF0ZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgc2V0U2xpZGVUYXJnZXQodGFyZ2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZVRhcmdldCA9IHRhcmdldDtcbiAgICB9XG5cbiAgICBzZXRWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS52b2x1bWUgPSB2b2x1bWU7XG4gICAgfVxuXG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vICogICAgIFByaXZhdGUgZnVuY3Rpb25zICAgICAqXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUZyZXF1ZW5jeSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcmVxdWVuY3kgPSBnZXRGcmVxdWVuY3kodGhpcy5hbWlnYUNsb2NrU3BlZWQsIHRoaXMuc3RhdGUucGVyaW9kKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRmluZVR1bmVkUGVyaW9kKCkge1xuICAgICAgICB0aGlzLnN0YXRlLmZpbmVUdW5lZFBlcmlvZCA9IGdldEZpbmVUdW5lZFBlcmlvZCh0aGlzLnN0YXRlLm9yaWdpbmFsUGVyaW9kLCB0aGlzLnN0YXRlLmZpbmVUdW5lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVTYW1wbGVJbmNyZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlSW5jcmVtZW50ID0gZ2V0U2FtcGxlSW5jcmVtZW50VmFsdWUodGhpcy5zdGF0ZS5mcmVxdWVuY3ksIHRoaXMuYnVmZmVyRnJlcXVlbmN5KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfZ2V0U2FtcGxlVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zYW1wbGUgJiYgIXRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZSA9IGdldFNhbXBsZVZhbHVlKHRoaXMuc3RhdGUuc2FtcGxlLmF1ZGlvLCB0aGlzLnN0YXRlLnNhbXBsZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBhcHBseVZvbHVtZVRvU2FtcGxlKHNhbXBsZSwgdGhpcy5zdGF0ZS52b2x1bWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9pbmNyZW1lbnRTYW1wbGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zYW1wbGUgJiYgIXRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2FtcGxlLCBzYW1wbGVQb3NpdGlvbiwgc2FtcGxlSW5jcmVtZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgY29uc3QgeyBuZXh0UG9zaXRpb24sIHNhbXBsZUhhc0VuZGVkIH0gPSBnZXROZXh0U2FtcGxlSW5jcmVtZW50KHNhbXBsZSwgc2FtcGxlUG9zaXRpb24sIHNhbXBsZUluY3JlbWVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlUG9zaXRpb24gPSBuZXh0UG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZUhhc0VuZGVkID0gc2FtcGxlSGFzRW5kZWQ7XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCJpbXBvcnQgeyBTYW1wbGUgfSBmcm9tIFwiLi4vbW9kZWxzL1NhbXBsZS5pbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiB2b2x1bWUgdG8gYSBzYW1wbGVcbiAqIEBwYXJhbSBzYW1wbGUgLSBTYW1wbGUgdmFsdWUgdG8gYXBwbHkgdm9sdW1lIHRvXG4gKiBAcGFyYW0gdm9sdW1lIC0gVGhlIHZvbHVtZSB2YWx1ZSB0byBhcHBseVxuICovXG4gZXhwb3J0IGNvbnN0IGFwcGx5Vm9sdW1lVG9TYW1wbGUgPSAoc2FtcGxlOiBudW1iZXIsIHZvbHVtZTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNhbXBsZSAqICh2b2x1bWUgLyA2NCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBmaW5lLXR1bmVkIHBlcmlvZCB2YWx1ZSwgYmFzZWQgdXBvbiBnaXZlbiBwZXJpb2QgYW5kIGZpbmV0dW5lIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwZXJpb2QgLSB0aGUgcGVyaW9kIHZhbHVlIHRvIHR1bmVcbiAqIEBwYXJhbSBmaW5lVHVuZSAtIHRoZSBmaW5ldHVuZSB2YWx1ZSB0byB0dW5lIHRoZSBwZXJpb2QgYnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZpbmVUdW5lZFBlcmlvZCA9IChwZXJpb2Q6IG51bWJlciwgZmluZVR1bmU6IG51bWJlciA9IDApID0+IHtcbiAgICBpZihmaW5lVHVuZSAhPT0gMCkge1xuICAgICAgICBpZiAoZmluZVR1bmUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGVyaW9kIC8gTWF0aC5wb3coMiwgTWF0aC5hYnMoZmluZVR1bmUpIC8gKDggKiAxMikpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGVyaW9kICogTWF0aC5wb3coMiwgTWF0aC5hYnMoZmluZVR1bmUpIC8gKDggKiAxMikpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGVyaW9kO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNhbXBsZSBmcmVxdWVuY3kgZm9yIHRoZSBnaXZlbiBhbWlnYSBjbG9jayBzcGVlZCBhbmQgcGVyaW9kIHZhbHVlXG4gKiBAcGFyYW0gYW1pZ2FDbG9ja1NwZWVkIC0gVGhlIGNsb2NrIHNwZWVkIHRoZSBhbWlnYSBtYWNoaW5lIGlzIHJ1bm5pbmcgYXQgKGRpZmZlcnMgc2xpZ2h0bHkgZm9yIFBBTCBhbmQgTlRTQylcbiAqIEBwYXJhbSBwZXJpb2QgLSBUaGUgcGVyaW9kIHZhbHVlIG9mIHRoZSBzYW1wbGUgYmVpbmcgcGxheWVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGcmVxdWVuY3kgPSAoYW1pZ2FDbG9ja1NwZWVkOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGFtaWdhQ2xvY2tTcGVlZCAvIChwZXJpb2QgKiAyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHBvc2l0aW9uIG9mIHRoZSBzYW1wbGUgdG8gYmUgdXNlZC4gSGFuZGxlcyBzYW1wbGUgbG9vcGluZyAvIGVuZGluZy5cbiAqIEBwYXJhbSBzYW1wbGUgLSBTYW1wbGUgdGhhdCBpcyBiZWluZyB1c2VkXG4gKiBAcGFyYW0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gdG8gc3RhcnQgZnJvbSB3aGVuIGluY3JlbWVudGluZ1xuICogQHBhcmFtIGluY3JlbWVudCAtIFRoZSBhbW91bnQgdG8gaW5jcmVtZW1udCB0aGUgc2FtcGxlIHBvc2l0aW9uIGJ5XG4gKi9cbmV4cG9ydCBjb25zdCBnZXROZXh0U2FtcGxlSW5jcmVtZW50ID0gKHNhbXBsZTogU2FtcGxlLCBwb3NpdGlvbjogbnVtYmVyLCBpbmNyZW1lbnQ6IG51bWJlcikgPT4ge1xuICAgIGxldCBuZXh0UG9zaXRpb24gPSBwb3NpdGlvbiArIGluY3JlbWVudDtcbiAgICBsZXQgc2FtcGxlRW5kID0gZ2V0U2FtcGxlRW5kKHNhbXBsZSk7XG4gICAgbGV0IHNhbXBsZUhhc0VuZGVkID0gZmFsc2U7XG5cbiAgICBpZihuZXh0UG9zaXRpb24gPj0gc2FtcGxlRW5kKSB7XG4gICAgICAgIGlmKHNhbXBsZS5yZXBlYXRMZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBuZXh0UG9zaXRpb24gPSBzYW1wbGUucmVwZWF0T2Zmc2V0ICsgKG5leHRQb3NpdGlvbiAtIHNhbXBsZUVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0UG9zaXRpb24gPSBzYW1wbGVFbmQ7XG4gICAgICAgICAgICBzYW1wbGVIYXNFbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBuZXh0UG9zaXRpb24sIHNhbXBsZUhhc0VuZGVkIH07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZW5kIHZhbHVlIG9mIHRoZSBzYW1wbGUsIHRha2luZyBpbnRvIGFjY291bnQgbG9vcGluZy5cbiAqIEBwYXJhbSBzYW1wbGUgLSBUaGUgc2FtcGxlIHRvIGdldCB0aGUgZW5kIHBvc2l0aW9uIGZvclxuICovXG5leHBvcnQgY29uc3QgZ2V0U2FtcGxlRW5kID0gKHNhbXBsZTogU2FtcGxlKSA9PiB7XG4gICAgaWYoc2FtcGxlLnJlcGVhdExlbmd0aCA+IDIpIHtcbiAgICAgICAgcmV0dXJuIHNhbXBsZS5yZXBlYXRPZmZzZXQgKyBzYW1wbGUucmVwZWF0TGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gc2FtcGxlLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSB3ZSBuZWVkIHRvIGluY3JlbWVudCB0aGUgc2FtcGxlIHBvc2l0aW9uIGJ5IGZvciB0aGUgZ2l2ZW4gY2hhbm5lbCAvIGJ1ZmZlciBmcmVxdWVuY3lcbiAqIEBwYXJhbSBmcmVxdWVuY3kgLSBUaGUgZnJlcXVlbmN5IHRoZSBjaGFubmVsIGlzIGN1cnJlbnRseSBydW5uaW5nIGF0IChzZWUgZ2V0RnJlcXVlbmN5KVxuICogQHBhcmFtIGJ1ZmZlckZyZXF1ZW5jeSAtIFRoZSBmcmVxdWVuY3kgZm9yIHRoZSBvdXRwdXQgYXVkaW8gY29udGV4dCBidWZmZXIgKGNvdWxkIGJlIDQ0MDEwIG9yIDQ4MDAwIGV0YylcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNhbXBsZUluY3JlbWVudFZhbHVlID0gKGZyZXF1ZW5jeTogbnVtYmVyLCBidWZmZXJGcmVxdWVuY3k6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBmcmVxdWVuY3kgLyBidWZmZXJGcmVxdWVuY3k7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2FtcGxlIHZhbHVlIGZvciBhIGdpdmVuIHNhbXBsZSBwb3NpdGlvbiAoY2FuIGJlIGEgZnJhY3Rpb25hbCBwb3NpdGlvbilcbiAqIEBwYXJhbSBzYW1wbGVBdWRpbyAtIEFycmF5IG9mIHNhbXBsZSBkYXRhXG4gKiBAcGFyYW0gc2FtcGxlUG9zaXRpb24gLSBUaGUgcG9zaXRpb24gaW4gdGhlIHNhbXBsZSB0byBnZXQgYSB2YWx1ZSBmb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNhbXBsZVZhbHVlID0gKHNhbXBsZUF1ZGlvOiBGbG9hdDMyQXJyYXksIHNhbXBsZVBvc2l0aW9uOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmcmFjdGlvbk9mTmV4dFNhbXBsZSA9IHNhbXBsZVBvc2l0aW9uICUgMTtcbiAgICBjb25zdCBsb3dlclNhbXBsZSA9IHNhbXBsZUF1ZGlvW01hdGguZmxvb3Ioc2FtcGxlUG9zaXRpb24pXTtcbiAgICBjb25zdCB1cHBlclNhbXBsZSA9IHNhbXBsZUF1ZGlvW01hdGguY2VpbChzYW1wbGVQb3NpdGlvbildO1xuICAgIHJldHVybiBsb3dlclNhbXBsZSArIChmcmFjdGlvbk9mTmV4dFNhbXBsZSAqICh1cHBlclNhbXBsZSAtIGxvd2VyU2FtcGxlKSk7XG59IiwiaW1wb3J0IHsgT3NjaWxsYXRvciB9IGZyb20gJy4vbW9kZWxzL09zY2lsbGF0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFdhdmVHZW5lcmF0b3IgfSBmcm9tICcuL21vZGVscy9XYXZlR2VuZXJhdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBXYXZlVHlwZSB9IGZyb20gJy4vbW9kZWxzL1dhdmVUeXBlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBwaWNrUmFuZG9tIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm90cmFja2VyT3NjaWxsYXRvciBpbXBsZW1lbnRzIE9zY2lsbGF0b3Ige1xuICAgIGFtcGxpdHVkZTogbnVtYmVyID0gMTtcbiAgICBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgb3JpZ2luYWxWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBvc2NpbGxhdGlvbnNQZXJSb3c6IG51bWJlciA9IDE7XG4gICAgcmV0cmlnZ2VyOiBib29sZWFuID0gZmFsc2U7XG4gICAgd2F2ZUdlbmVyYXRvcjogV2F2ZUdlbmVyYXRvciA9IGdlbmVyYXRlU2luZVdhdmU7XG5cbiAgICBnZXRBbXBsaXR1ZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtcGxpdHVkZTtcbiAgICB9XG5cbiAgICBnZXRPZmZzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgICB9XG5cbiAgICBnZXRPcmlnaW5hbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIGdldE9zY2lsbGF0aW9uc1BlclJvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3NjaWxsYXRpb25zUGVyUm93O1xuICAgIH1cblxuICAgIGdldFJldHJpZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cmlnZ2VyO1xuICAgIH1cblxuICAgIGdldFZhbHVlKHJvd1Bvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbFZhbHVlICsgdGhpcy53YXZlR2VuZXJhdG9yKHJvd1Bvc2l0aW9uLCB0aGlzLm9mZnNldCwgdGhpcy5vc2NpbGxhdGlvbnNQZXJSb3csIHRoaXMuYW1wbGl0dWRlKTtcbiAgICB9XG5cbiAgICBnZXRXYXZlR2VuZXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53YXZlR2VuZXJhdG9yO1xuICAgIH1cblxuICAgIGluY3JlbWVudE9mZnNldCgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAodGhpcy5vZmZzZXQgKyB0aGlzLm9zY2lsbGF0aW9uc1BlclJvdykgJSAxO1xuICAgIH1cblxuICAgIHNldEFtcGxpdHVkZShhbXBsaXR1ZGU6IG51bWJlcikge1xuICAgICAgICBpZihhbXBsaXR1ZGUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFtcGxpdHVkZSA9IGFtcGxpdHVkZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE9mZnNldChvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB9XG5cbiAgICBzZXRPcmlnaW5hbFZhbHVlKHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxWYWx1ZSA9IHBlcmlvZDtcbiAgICB9XG5cbiAgICBzZXRPc2NpbGxhdGlvbnNQZXJSb3cob3NjaWxsYXRpb25zUGVyUm93OiBudW1iZXIpIHtcbiAgICAgICAgaWYob3NjaWxsYXRpb25zUGVyUm93ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vc2NpbGxhdGlvbnNQZXJSb3cgPSBvc2NpbGxhdGlvbnNQZXJSb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRSZXRyaWdnZXIocmV0cmlnZ2VyOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmV0cmlnZ2VyID0gcmV0cmlnZ2VyO1xuICAgIH1cblxuICAgIHNldFdhdmVHZW5lcmF0b3IodHlwZTogV2F2ZVR5cGUpIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXYXZlR2VuZXJhdG9yKHBpY2tSYW5kb20oJ3Nhd3Rvb3RoJywgJ3NpbmUnLCAnc3F1YXJlJykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2F3dG9vdGgnOlxuICAgICAgICAgICAgICAgIHRoaXMud2F2ZUdlbmVyYXRvciA9IGdlbmVyYXRlU2F3dG9vdGhXYXZlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2luZSc6XG4gICAgICAgICAgICAgICAgdGhpcy53YXZlR2VuZXJhdG9yID0gZ2VuZXJhdGVTaW5lV2F2ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgICAgICAgdGhpcy53YXZlR2VuZXJhdG9yID0gZ2VuZXJhdGVTcXVhcmVXYXZlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqICAgICBVdGlsaXR5IGZ1bmN0aW9ucyAgICAgKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2F3dG9vdGhXYXZlIDogV2F2ZUdlbmVyYXRvciA9IChyb3dQb3NpdGlvbiwgb2Zmc2V0ID0gMCwgb3NjaWxsYXRpb25zUGVyUm93ID0gMSwgYW1wbGl0dWRlID0gMSkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gKChyb3dQb3NpdGlvbiAqIG9zY2lsbGF0aW9uc1BlclJvdykgKyBvZmZzZXQpICUgMTtcbiAgICByZXR1cm4gKDEgLSBwb3NpdGlvbikgKiBhbXBsaXR1ZGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNpbmVXYXZlIDogV2F2ZUdlbmVyYXRvciA9IChyb3dQb3NpdGlvbiwgb2Zmc2V0ID0gMCwgb3NjaWxsYXRpb25zUGVyUm93ID0gMSwgYW1wbGl0dWRlID0gMSkgPT4ge1xuICAgIHJldHVybiBNYXRoLnNpbigoKHJvd1Bvc2l0aW9uICogb3NjaWxsYXRpb25zUGVyUm93KSArIG9mZnNldCkgKiAyICogTWF0aC5QSSApICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTcXVhcmVXYXZlIDogV2F2ZUdlbmVyYXRvciA9IChyb3dQb3NpdGlvbiwgb2Zmc2V0ID0gMCwgb3NjaWxsYXRpb25zUGVyUm93ID0gMSwgYW1wbGl0dWRlID0gMSkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gKChyb3dQb3NpdGlvbiAqIG9zY2lsbGF0aW9uc1BlclJvdykgKyBvZmZzZXQpICUgMTtcbiAgICByZXR1cm4gKHBvc2l0aW9uIDwgMC41ID8gMSA6IC0xKSAqIGFtcGxpdHVkZTtcbn1cbiIsImltcG9ydCB7IEluc3RydWN0aW9uIH0gZnJvbSAnLi9tb2RlbHMvSW5zdHJ1Y3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFNhbXBsZSB9IGZyb20gJy4vbW9kZWxzL1NhbXBsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2FtcGxlSGVhZGVyIH0gZnJvbSAnLi9tb2RlbHMvU2FtcGxlSGVhZGVyLmludGVyZmFjZSc7XG5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscydcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICBQdWJsaWMgZnVuY3Rpb25zICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsQ291bnQoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBnZXRTaWduYXR1cmUoZmlsZURhdGEpO1xuICAgIGxldCBjaGFubmVsQ291bnQ6IG51bWJlciA9IDQ7XG5cbiAgICBzd2l0Y2goc2lnbmF0dXJlKSB7XG4gICAgICAgIGNhc2UgJzhDSE4nOlxuICAgICAgICBjYXNlICdGTFQ4JzpcbiAgICAgICAgY2FzZSAnQ0Q4MSc6XG4gICAgICAgIGNhc2UgJ09LVEEnOlxuICAgICAgICBjYXNlICdPQ1RBJzpcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCA9IDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnNkNITic6XG4gICAgICAgICAgICBjaGFubmVsQ291bnQgPSA2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzJDSE4nOlxuICAgICAgICAgICAgY2hhbm5lbENvdW50ID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYoL15bMC05XVswLTldQ1tILE5dJC8udGVzdChzaWduYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbENvdW50ID0gcGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigwLDIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoL15URFpbMC05XSQvLnRlc3Qoc2lnbmF0dXJlKSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWxDb3VudCA9IHBhcnNlSW50KHNpZ25hdHVyZS5zdWJzdHIoMykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigvXls1NzldQ0hOJC8udGVzdChzaWduYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbENvdW50ID0gcGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigwLDEpKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbm5lbENvdW50O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdERlc2NyaXB0aW9uKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gZ2V0U2lnbmF0dXJlKGZpbGVEYXRhKTtcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gY29uc3RhbnRzLlVOS05PV05fRk9STUFUO1xuXG4gICAgc3dpdGNoKHNpZ25hdHVyZSkge1xuICAgICAgICBjYXNlICdNLksuJzpcbiAgICAgICAgICAgIHR5cGUgPSAnUHJvVHJhY2tlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTSFLISc6XG4gICAgICAgIGNhc2UgJ00mSyEnOlxuICAgICAgICAgICAgdHlwZSA9ICdQcm9UcmFja2VyIChleHRlbmRlZCBwYXR0ZXJucyknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzZDSE4nOlxuICAgICAgICAgICAgdHlwZSA9ICdQcm9UcmFja2VyICg2IGNoYW5uZWxzKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnOENITic6XG4gICAgICAgICAgICB0eXBlID0gJ1Byb1RyYWNrZXIgKDggY2hhbm5lbHMpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcyQ0hOJzpcbiAgICAgICAgICAgIHR5cGUgPSAnRmFzdFRyYWNrZXIgKDIgY2hhbm5lbHMpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDRDgxJzpcbiAgICAgICAgY2FzZSAnT0tUQSc6XG4gICAgICAgICAgICB0eXBlID0gJ09rdGFseXplcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnT0NUQSc6XG4gICAgICAgICAgICB0eXBlID0gJ09jdGFtZWQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ZMVDQnOlxuICAgICAgICAgICAgdHlwZSA9ICdTdGFyVHJla2tlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRkxUOCc6XG4gICAgICAgICAgICB0eXBlID0gJ1N0YXJUcmVra2VyICg4IGNoYW5uZWxzKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmKC9eWzAtOV1bMC05XUNIJC8udGVzdChzaWduYXR1cmUpKXtcbiAgICAgICAgICAgICAgICB0eXBlID0gYEZhc3RUcmFja2VyICgke3BhcnNlSW50KHNpZ25hdHVyZS5zdWJzdHIoMCwyKSl9IGNoYW5uZWxzKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlswLTldWzAtOV1DTiQvLnRlc3Qoc2lnbmF0dXJlKSl7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGBUYWtlVHJhY2tlciAoJHtwYXJzZUludChzaWduYXR1cmUuc3Vic3RyKDAsMikpfSBjaGFubmVscylgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigvXlREWlswLTldJC8udGVzdChzaWduYXR1cmUpKXtcbiAgICAgICAgICAgICAgICB0eXBlID0gYFRha2VUcmFja2VyICgke3BhcnNlSW50KHNpZ25hdHVyZS5zdWJzdHIoMykpfSBjaGFubmVscylgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigvXls1NzldQ0hOJC8udGVzdChzaWduYXR1cmUpKXtcbiAgICAgICAgICAgICAgICB0eXBlID0gYFRha2VUcmFja2VyICgke3BhcnNlSW50KHNpZ25hdHVyZS5zdWJzdHIoMCwxKSl9IGNoYW5uZWxzKWA7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG59O1xuXG4vKlxuICAgIFJldHVybnMgdGhlIGRhdGEgcmVxdWlyZWQgdG8gY3JlYXRlIGEgbmV3IEF1ZGlvV29ya2xldE5vZGVcbiAgICBUaGlzIGFsbG93cyB0aGUgcHJvdHJhY2tlciBwbGF5YmFjayBjb2RlIHRvIGJlIGV4ZWN1dGVkIGluIGl0cyBvd24gdGhyZWFkXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRPcHRpb25zKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IEF1ZGlvV29ya2xldE5vZGVPcHRpb25zIHtcbiAgICBpZighaXNGaWxlU3VwcG9ydGVkKGZpbGVEYXRhKSkgdGhyb3cgbmV3IEVycm9yO1xuICAgIGNvbnN0IG91dHB1dENvdW50ID0gZ2V0Q2hhbm5lbENvdW50KGZpbGVEYXRhKVxuICAgIHJldHVybiB7XG4gICAgICAgIG51bWJlck9mT3V0cHV0czogb3V0cHV0Q291bnQsXG4gICAgICAgIG91dHB1dENoYW5uZWxDb3VudDogWy4uLm5ldyBBcnJheShvdXRwdXRDb3VudCldLm1hcChpdGVtID0+IDEpLFxuICAgICAgICBwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgICBmaWxlRGF0YTogZmlsZURhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAgICBUaGlzIHNjYW5zIHRocm91Z2ggdGhlIHBhdHRlcm4gc2VxdWVuY2UgdGFibGUgdG8gZmluZCB0aGUgaGlnaGVzdCBwYXR0ZXJuIGluZGV4LlxuICAgIFRoYXQgaXMgdGhlIG51bWJlciBvZiBwYXR0ZXJucyB1c2VkIGJ5IHRoZSBtb2R1bGUuXG5cbiAgICBUaGUgc29uZyBtYXkgbm90IHVzZSBhbGwgb2YgdGhlc2UgdGhvdWdoLCBpdCBtYXkgYmUgdGhhdCBzb21lIHBhdHRlcm5zIHdlcmUgZWRpdGVkLFxuICAgIGJ1dCBuZXZlciBpbnRlbmRlZCB0byBiZSBwbGF5ZWQgKGltYWdpbmUgZGV2cyB3b3JraW5nIHRvIGEgZGVhZGxpbmUpXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdHRlcm5Db3VudChmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHBhdHRlcm5TZXF1ZW5jZSA9IGdldFBhdHRlcm5TZXF1ZW5jZShmaWxlRGF0YSk7XG5cbiAgICAvLyBQYXR0ZXJuIGNvdW50IGlzIHRoZSBsYXJnZXN0IHBhdHRlcm4gaW5kZXggKyAxIChhcyBwYXR0ZXJucyBhcmUgemVyby1pbmRleGVkKVxuICAgIHJldHVybiBwYXR0ZXJuU2VxdWVuY2UucmVkdWNlKChhLGIpID0+IE1hdGgubWF4KGEsYikpICsgMTtcbn07XG5cbi8qXG4gICAgVGhpcyBsb2FkcyBhbGwgb2YgdGhlIHBhdHRlcm4gZGF0YSBpbnRvIHRoZSBwYXR0ZXJuIGRhdGEgYXJyYXkuXG4gICAgVGhlIHBhdHRlcm4gZGF0YSBhcnJheSBpcyBzcGxpdCB1cCBpbnRvIHNpbmdsZSBjaGFubmVsIHJvd3MuXG4gICAgU28gdGhhdCBtZWFucyB3ZSBoYXZlIGEgM0QgYXJyYXkgLSBbcGF0dGVybl1bY2hhbm5lbF1bcm93c10uXG5cbiAgICBJIHNob3VsZCBhbHNvIG1lbnRpb24gdGhlIHN0cnVjdHVyZSBvZiBob3cgYSBjaGFubmVscyBwYXR0ZXJuIGRhdGFcbiAgICBpcyBzZXQgb3V0LiBJdCBpcyBjb21wcmlzZWQgb2YgMzIgYml0cyAoNCBieXRlcyk6XG5cbiAgICAjMSAgICAgICAgICAgIzIgICAgICAgICAgICAgICAgICAjMyAgICAgICAgICM0XG4gICAgMDAwMCAgICAgICAgIDAwMDAtMDAwMDAwMDAgICAgICAgMDAwMCAgICAgICAwMDAwLTAwMDAwMDBcblxuICAgICMxID0gZmlyc3QgNCBiaXRzIGFyZSB0aGUgVVBQRVIgNCBiaXRzIG9mIHRoZSBzYW1wbGUgbnVtYmVyXG4gICAgIzIgPSAxMiBiaXRzLCB0aGlzIGlzIHRoZSBub3RlIHBlcmlvZC5cbiAgICAjMyA9IDQgYml0cywgdGhpcyBpcyB0aGUgTE9XRVIgNCBiaXRzIG9mIHRoZSBzYW1wbGUgbnVtYmVyXG4gICAgIzQgPSAxMiBiaXRzLCBlZmZlY3QgY29tbWFuZC4gQ2FuIGJlIHNwbGl0IGludG8gNGJpdCBlZmZlY3QgY29tbWFuZCBhbmQgOGJpdCBwYXJhbWV0ZXIuXG5cbiAgICBUaGUgcGF0dGVybiBkYXRhIGlzIHNldCBvdXQgYXMgYWJvdmUgaW4gNCBieXRlIGNodW5rcyBpbiB0aGUgZmlsZS5cbiAgICBUaGUgcm93IGRhdGEgZm9yIGVhY2ggY2hhbm5lbCBpcyBzdG9yZWQgaW4gb3JkZXIsIHNvIHRoZSBmaWxlIGlzIGxpa2Ugc286XG5cbiAgICBbY2hhbm5lbDByb3cwLTRieXRlc11bY2hhbm5lbDFyb3cwLTRieXRlc11bY2hhbm5lbDJyb3cwLTRieXRlc11bY2hhbm5lbDNyb3cwLTRieXRlc11cbiAgICBbY2hhbm5lbDByb3cxLTRieXRlc11bY2hhbm5lbDFyb3cxLTRieXRlc11bY2hhbm5lbDJyb3cxLTRieXRlc11bY2hhbm5lbDNyb3cxLTRieXRlc11cbiAgICBldGMuLi5cblxuICAgIElmIHRoZSBmaWxlIGhhcyBtb3JlIHRoYW4gNCBjaGFubmVscywgaXQgc2hvdWxkIGp1c3QgZm9sbG93IHN1aXQgYXMgYWJvdmUgKHNvIGlmIHRoZXJlXG4gICAgYXJlIDggY2hhbm5lbHMsIGl0IHdvdWxkIGJlIFtjaDBdW2NoMV1bY2gyXVtjaDNdW2NoNF1bY2g1XVtjaDZdW2NoN10gYW5kIGNhcnJ5IG9uIGxpa2VcbiAgICB0aGF0IGZvciA2NCByb3dzKS4gVGhlIGV4Y2VwdGlvbiBpcyBpZiB0aGUgc2lnbmF0dXJlIEZMVDgsIHdoZXJlIGluc3RlYWQgb2YgaGF2aW5nXG4gICAgOCBpbnN0cnVjdGlvbnMgcGVyIHJvdywgaXQgaGFzIDQgaW5zdHJ1Y3Rpb25zIHBlciByb3cgYW5kIHVzZXMgdHdvIHBhdHRlcm5zIHdvcnRoIG9mXG4gICAgcm93cyB0byBjcmVhdGUgb25lIDgtY2hhbm5lbCBwYXR0ZXJuLiBFLkcgLSB0aGUgZmlyc3QgcGF0dGVybiBoYXMgW2NoMF1bY2gxXVtjaDJdW2NoM11cbiAgICBmb3IgNjQgcm93cywgdGhlbiB0aGUgbmV4dCBwYXR0ZXJuIGhhcyBbY2g0XVtjaDVdW2NoNl1bY2g3XSBmb3IgNjQgcm93cy4gWW91IHRoZW4gaGF2ZVxuICAgIHRvIHN0aWNrIHRoZXNlIGJhY2sgdG9nZXRoZXIuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdHRlcm5zKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IEluc3RydWN0aW9uW11bXVtdIHtcbiAgICBjb25zdCBjaGFubmVsQ291bnQgPSBnZXRDaGFubmVsQ291bnQoZmlsZURhdGEpO1xuICAgIGNvbnN0IHBhdHRlcm5zOiBJbnN0cnVjdGlvbltdW11bXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gMjAgKyAoMzAqMzEpICsgMSArIDEgKyAxMjggKyA0O1xuICAgIGNvbnN0IHBhdHRlcm5Db3VudCA9IGdldFBhdHRlcm5Db3VudChmaWxlRGF0YSk7XG4gICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhmaWxlRGF0YSk7XG5cbiAgICBsZXQgaSwgaiwgaywgdG9wLCBib3R0b207XG5cbiAgICAvLyBMb29wIHRocm91Z2ggcGF0dGVybnNcbiAgICBmb3IoaT0wOyBpPHBhdHRlcm5Db3VudDsgaSsrKSB7XG4gICAgICAgIHBhdHRlcm5zW2ldID0gW107XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHJvd3MgaW4gdGhlIHBhdHRlcm5cbiAgICAgICAgZm9yKGo9MDsgajw2NDsgaisrKSB7XG4gICAgICAgICAgICBwYXR0ZXJuc1tpXVtqXSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggY2hhbm5lbHMgaW4gdGhlIHJvd1xuICAgICAgICAgICAgZm9yKGs9MDsgazxjaGFubmVsQ291bnQ7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zW2ldW2pdW2tdID0ge30gYXMgSW5zdHJ1Y3Rpb247XG5cbiAgICAgICAgICAgICAgICAvLyBTYW1wbGUgbnVtYmVyXG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hpZnQgcmlnaHQgYnkgNCBiaXRzIGFuZCB0aGVuIGxlZnQgYnkgNCBiaXRzIHRvIHJlbW92ZSB0aGUgbG93ZXIgNCBiaXRzLlxuICAgICAgICAgICAgICAgIHRvcCA9ICh2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkpID4+IDQpIDw8IDQ7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gdmlldy5nZXRVaW50OChzdGFydCArIChpKjY0KmNoYW5uZWxDb3VudCo0KSArIChqKmNoYW5uZWxDb3VudCo0KSArIChrKjQpICsgMikgPj4gNDtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuc1tpXVtqXVtrXS5zYW1wbGVJbmRleCA9IHRvcCArIGJvdHRvbTtcblxuICAgICAgICAgICAgICAgIC8vIHBlcmlvZCAtIHJlcHJlc2VudGVkIGJ5IGJvdHRvbSA0IGJpdHMgaW4gdGhlIGZpcnN0IGJ5dGUgYW5kIHRoZSBzZWNvbmQgYnl0ZSAoMTIgYnl0ZSBudW1iZXIpLlxuICAgICAgICAgICAgICAgIC8vIFdlIGdldCB0aGUgbG93ZXIgNCBiaXRzIGJ5IHVzaW5nIHRoZSBtb2R1bHVzIG9mIDE2IChyZW1haW5kZXIgb2YgZGl2aWRpbmcgYnkgMTYpLlxuICAgICAgICAgICAgICAgIHRvcCA9ICh2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkpICUgMTYpIDw8IDg7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gdmlldy5nZXRVaW50OChzdGFydCArIChpKjY0KmNoYW5uZWxDb3VudCo0KSArIChqKmNoYW5uZWxDb3VudCo0KSArIChrKjQpICsgMSk7XG4gICAgICAgICAgICAgICAgcGF0dGVybnNbaV1bal1ba10ucGVyaW9kID0gdG9wICsgYm90dG9tO1xuXG4gICAgICAgICAgICAgICAgLy8gRWZmZWN0IC0gZ2V0IHRoZSBsb3dlciA0IGJpdHMgb2YgYnl0ZSAzIGJ5IHVzaW5nIG1vZHVsdXMgMTYuXG4gICAgICAgICAgICAgICAgdG9wID0gdmlldy5nZXRVaW50OChzdGFydCArIChpKjY0KmNoYW5uZWxDb3VudCo0KSArIChqKmNoYW5uZWxDb3VudCo0KSArIChrKjQpICsgMikgJSAxNjtcbiAgICAgICAgICAgICAgICBib3R0b20gPSAgdmlldy5nZXRVaW50OChzdGFydCArIChpKjY0KmNoYW5uZWxDb3VudCo0KSArIChqKmNoYW5uZWxDb3VudCo0KSArIChrKjQpICsgMyk7XG4gICAgICAgICAgICAgICAgaWYodG9wID4gMCB8fCBib3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5zW2ldW2pdW2tdLmVmZmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkQ29kZTogYCR7dG9wfSR7Ym90dG9tID09PSAxNCA/IGAtJHtib3R0b20gPj4gNH1gIDogJyd9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHA6ICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB4OiAgIChib3R0b20gPj4gNCksXG4gICAgICAgICAgICAgICAgICAgICAgICBweTogICAoYm90dG9tICUgMTYpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdHRlcm5TZXF1ZW5jZShmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgcGF0dGVyblNlcXVlbmNlRGF0YSA9IGZpbGVEYXRhLnNsaWNlKDk1MiwgMTA4MCk7XG5cbiAgICBsZXQgaTtcbiAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICBsZXQgcGF0dGVyblNlcXVlbmNlOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLy8gQ29udmVydCBwYXR0ZXJuIHNlcXVlbmNlIGJ5dGVzIHRvIGFuIGludGVnZXIgYXJyYXkgKHRoZXkgYXJlIGJpZyBlbmRpYW4gaW4gdGhlIGZpbGUpXG4gICAgZm9yKGk9MDsgaTwxMjg7IGkrKykge1xuICAgICAgICBwYXR0ZXJuU2VxdWVuY2VbaV0gPSB1dGlscy5yZWFkOGJpdEludChwYXR0ZXJuU2VxdWVuY2VEYXRhLCBpKTtcbiAgICB9O1xuXG4gICAgLy8gRmluZCBvdXQgd2hlcmUgdGhlIGxhc3QgcGF0dGVybiBpbmRleCBpcyAodGhlIHNlcXVlbmNlIGlzIHplcm8tcGFkZGVkKVxuICAgIGZvcihpPXBhdHRlcm5TZXF1ZW5jZS5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIGlmKHBhdHRlcm5TZXF1ZW5jZVtpXSAhPT0gMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHBhdHRlcm4gc2VxdWVuY2UsIHRyaW1taW5nIG9mZiB6ZXJvLXBhZGRpbmdcbiAgICByZXR1cm4gcGF0dGVyblNlcXVlbmNlLnNsaWNlKDAsIGxhc3RJbmRleCArIDEpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um93c1BlclBhdHRlcm4oZmlsZURhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBnZXRTaWduYXR1cmUoZmlsZURhdGEpO1xuXG4gICAgc3dpdGNoKHNpZ25hdHVyZSkge1xuICAgICAgICBjYXNlICdNIUshJzpcbiAgICAgICAgICAgIHJldHVybiAxMjg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gNjQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNhbXBsZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDMxO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNhbXBsZXMoZmlsZURhdGE6IEFycmF5QnVmZmVyLCBhZGRFeHRyYUVuZFNhbXBsZTogYm9vbGVhbiA9IGZhbHNlKTogU2FtcGxlW10ge1xuICAgIGNvbnN0IGNoYW5uZWxDb3VudCA9IGdldENoYW5uZWxDb3VudChmaWxlRGF0YSk7XG4gICAgY29uc3QgcGF0dGVybkNvdW50ID0gZ2V0UGF0dGVybkNvdW50KGZpbGVEYXRhKTtcbiAgICBjb25zdCBzYW1wbGVzOiBTYW1wbGVbXSA9IFtdO1xuXG4gICAgbGV0IGF1ZGlvO1xuICAgIGxldCBkYXRhO1xuICAgIGxldCBoZWFkZXI7XG4gICAgbGV0IGhlYWRlckRhdGFTdGFydE9mZnNldCA9IDIwO1xuICAgIGxldCBzYW1wbGVBdWRpb1N0YXJ0T2Zmc2V0ID0gMjAgKyAoMzAqMzEpICsgMSArIDEgKyAxMjggKyA0ICsgKHBhdHRlcm5Db3VudCAqIDY0ICogY2hhbm5lbENvdW50ICogNCk7XG4gICAgbGV0IHNhbXBsZUhlYWRlckRhdGE7XG4gICAgbGV0IGk7XG5cbiAgICAvLyBSdW4gdGhyb3VnaCBhbmQgZXh0cmFjdCBoZWFkZXIgYW5kIGF1ZGlvIGRhdGEgZm9yIGFsbCBzYW1wbGVzXG4gICAgZm9yKGk9MDsgaTwzMTsgaSsrKSB7XG4gICAgICAgIC8vIEVhY2ggaGVhZGVyIGlzIDMwIGJ5dGVzLCBleHRyYWN0IHRoZW0sIHRoZW4gZGVjb2RlLiBJbmNyZW1lbnQgc3RhcnQgb2Zmc2V0IHBvc2l0aW9uIGJ5IDMwIGZvciBuZXh0IHJlYWQuXG4gICAgICAgIHNhbXBsZUhlYWRlckRhdGEgPSBmaWxlRGF0YS5zbGljZShoZWFkZXJEYXRhU3RhcnRPZmZzZXQsIGhlYWRlckRhdGFTdGFydE9mZnNldCArIDMwKTtcbiAgICAgICAgaGVhZGVyID0gX2dldFNhbXBsZUhlYWRlcihzYW1wbGVIZWFkZXJEYXRhKTtcbiAgICAgICAgaGVhZGVyRGF0YVN0YXJ0T2Zmc2V0ID0gaGVhZGVyRGF0YVN0YXJ0T2Zmc2V0ICsgMzA7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBhdWRpbyBkYXRhIC0gdGhlIGxlbmd0aCBvZiB0aGUgc2FtcGxlIGNvbWVzIGZyb20gdGhlIGhlYWRlclxuICAgICAgICBkYXRhID0gZmlsZURhdGEuc2xpY2Uoc2FtcGxlQXVkaW9TdGFydE9mZnNldCwgc2FtcGxlQXVkaW9TdGFydE9mZnNldCArIGhlYWRlci5sZW5ndGgpO1xuICAgICAgICBhdWRpbyA9IF9nZXRTYW1wbGVBdWRpbyhkYXRhLCBhZGRFeHRyYUVuZFNhbXBsZSk7XG4gICAgICAgIHNhbXBsZUF1ZGlvU3RhcnRPZmZzZXQgPSBzYW1wbGVBdWRpb1N0YXJ0T2Zmc2V0ICsgaGVhZGVyLmxlbmd0aDtcblxuICAgICAgICAvLyBDb25jYXRlbmF0ZSBhbmQgYWRkIHRvIHNhbXBsZXMgYXJyYXlcbiAgICAgICAgc2FtcGxlc1tpXSA9IHtcbiAgICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICAgIGF1ZGlvXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhbXBsZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lnbmF0dXJlKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaGVhZGVyU3RhcnQgPSAyMCArICgzMCozMSkgKyAxICsgMSArIDEyODtcbiAgICByZXR1cm4gdXRpbHMucmVhZFN0cmluZ0Zyb21BcnJheUJ1ZmZlcihmaWxlRGF0YSwgaGVhZGVyU3RhcnQsIGhlYWRlclN0YXJ0ICsgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb25nTG9vcFBhdHRlcm5TZXF1ZW5jZUluZGV4KGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3RhcnQgPSAyMCArICgzMCozMSkgKyAxO1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMucmVhZDhiaXRJbnQoZmlsZURhdGEsIHN0YXJ0KVxuXG4gICAgLy8gSWYgdmFsdWUgPCAxMjcsIGl0IHNpZ25pZmllcyBsb29wIGluZGV4LiBPdGhlcndpc2UsIHRoZXJlIGlzIG5vIGxvb3AgKHJldHVybiB1bmRlZmluZWQpLlxuICAgIC8vIHJldHVybiAodmFsdWUgPCAxMjcpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBPZGRseSwgaXQgc2VlbXMgeW91IHNob3VsZCBhbHdheXMgcmV0dXJuIDAgZm9yIHRoaXMuLi4/XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGl0bGUoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXRpbHMucmVhZFN0cmluZ0Zyb21BcnJheUJ1ZmZlcihmaWxlRGF0YSwgMCwgMjApLnJlcGxhY2UoL1xcdTAwMDAvZywgJyAnKS50cmltKCk7XG59O1xuXG4vKlxuICAgIFRoaXMgZmlndXJlIGlzIHRoZSBudW1iZXIgb2YgcGF0dGVybiBzZXF1ZW5jZSBwb3NpdGlvbnMgdXNlZCBieSB0aGUgc29uZ1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VkUGF0dGVyblNlcXVlbmNlTGVuZ3RoKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3RhcnQgPSAyMCArICgzMCozMSk7XG4gICAgcmV0dXJuIHV0aWxzLnJlYWQ4Yml0SW50KGZpbGVEYXRhLCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbGVTdXBwb3J0ZWQoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGdldEZvcm1hdERlc2NyaXB0aW9uKGZpbGVEYXRhKSAhPT0gY29uc3RhbnRzLlVOS05PV05fRk9STUFUO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgIFByaXZhdGUgZnVuY3Rpb25zICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qXG4gICAgVmFsdWU6ICAgIDAgICAxICAgMiAgIDMgICA0ICAgNSAgIDYgICA3ICAgOCAgIDkgICBBICAgQiAgIEMgICBEICAgRSAgIEZcbiAgICBGaW5ldHVuZTogMCAgKzEgICsyICArMyAgKzQgICs1ICArNiAgKzcgIC04ICAtNyAgLTYgIC01ICAtNCAgLTMgIC0yICAtMVxuKi9cbmZ1bmN0aW9uIF9nZXRGaW5lVHVuZVZhbHVlKHJhd0ludGVnZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYocmF3SW50ZWdlciA+PSA4KSAge1xuICAgICAgICByZXR1cm4gLTE2ICsgcmF3SW50ZWdlclxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJhd0ludGVnZXI7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gX2dldFNhbXBsZUF1ZGlvKHNhbXBsZURhdGE6IEFycmF5QnVmZmVyLCBhZGRFeHRyYUVuZFNhbXBsZTogYm9vbGVhbiA9IGZhbHNlKTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBmbG9hdDMyU2FtcGxlcyA9IG5ldyBGbG9hdDMyQXJyYXkoc2FtcGxlRGF0YS5ieXRlTGVuZ3RoICsgKGFkZEV4dHJhRW5kU2FtcGxlID8gMSA6IDApKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KHNhbXBsZURhdGEpO1xuXG4gICAgbGV0IGk7XG5cbiAgICAvLyBSdW4gdGhyb3VnaCBzYW1wbGVzIGFuZCBjb252ZXJ0IGZyb20gc2lnbmVkIDgtYml0IGludCB0byBzaWduZWQgZmxvYXQzMlxuICAgIGZvcihpPTA7IGk8c2FtcGxlRGF0YS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmxvYXQzMlNhbXBsZXNbaV0gPSB2aWV3LmdldEludDgoaSkgLyAxMjguMDA7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyByZWFsbHkgY29uZnVzaW5nLiBJbWFnaW5lIHlvdSBoYXZlIGEgc2FtcGxlIDggYnl0ZXMgbG9uZy4gWW91IGNhbiBzZXQgdGhlIGxvb3AgbGVuZ3RoIHRvIGJlIDgsXG4gICAgLy8gd2hpY2ggeW91IGNhbiBpbWFnZSBhcyAnYSBsb29wIGxlbmd0aCBvZiA4IHdhdmUgc2VjdGlvbnMnLiBIb3dldmVyLCB5b3UgYWN0dWFsbHkgbmVlZCA5IHNhbXBsZXMgdG8gYmVcbiAgICAvLyBhYmxlIHRvIGxvb3AgOCB3YXZlIHNlY3Rpb25zLiBTbywgdG8gc29ydCB0aGlzLCB3ZSBmdWRnZSBpdCBieSBkdXBsaWNhdGluZyB0aGUgbGFzdCBzYW1wbGUuIFlvdSBjYW4gY2hlY2tcbiAgICAvLyBtaWxreXRyYWNrZXIgb24gdGhpcywgaXQgZG9lcyB0aGUgc2FtZS4gSWYgeW91IGRvbid0IGRvIHRoaXMsIHZlcnkgc2hvcnQgbG9vcGluZyBzYW1wbGVzIHdpbGwgc291bmQgbm90aWNhYmx5XG4gICAgLy8gaGlnaGVyIHBpdGNoZWQuXG4gICAgaWYoYWRkRXh0cmFFbmRTYW1wbGUpIHtcbiAgICAgICAgaWYoYWRkRXh0cmFFbmRTYW1wbGUpIHtcbiAgICAgICAgICAgIGZsb2F0MzJTYW1wbGVzW2ldID0gZmxvYXQzMlNhbXBsZXNbaSAtIDFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZsb2F0MzJTYW1wbGVzO1xufTtcblxuZnVuY3Rpb24gX2dldFNhbXBsZUhlYWRlcihzYW1wbGVIZWFkZXJEYXRhOiBBcnJheUJ1ZmZlcik6IFNhbXBsZUhlYWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogICAgICAgICB1dGlscy5yZWFkU3RyaW5nRnJvbUFycmF5QnVmZmVyKHNhbXBsZUhlYWRlckRhdGEsIDAsIDIyKSxcbiAgICAgICAgbGVuZ3RoOiAgICAgICB1dGlscy5yZWFkQmlnRW5kaWFuMTZiaXRJbnQoc2FtcGxlSGVhZGVyRGF0YSwgMjIpICogMixcbiAgICAgICAgZmluZVR1bmU6ICAgICBfZ2V0RmluZVR1bmVWYWx1ZSh1dGlscy5yZWFkOGJpdEludChzYW1wbGVIZWFkZXJEYXRhLCAyNCkpLFxuICAgICAgICB2b2x1bWU6ICAgICAgIE1hdGgubWluKHV0aWxzLnJlYWQ4Yml0SW50KHNhbXBsZUhlYWRlckRhdGEsIDI1KSwgNjQpLFxuICAgICAgICByZXBlYXRPZmZzZXQ6IHV0aWxzLnJlYWRCaWdFbmRpYW4xNmJpdEludChzYW1wbGVIZWFkZXJEYXRhLCAyNikgKiAyLFxuICAgICAgICByZXBlYXRMZW5ndGg6IHV0aWxzLnJlYWRCaWdFbmRpYW4xNmJpdEludChzYW1wbGVIZWFkZXJEYXRhLCAyOCkgKiAyXG4gICAgfVxufTtcblxuXG4iLCJpbXBvcnQgeyBXYXZlVHlwZSB9IGZyb20gXCIuL21vZGVscy9XYXZlVHlwZS5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IEFNSUdBX0NMT0NLX1NQRUVEX05UU0MgPSA3MTU5MDkwLjU7XG5leHBvcnQgY29uc3QgQU1JR0FfQ0xPQ0tfU1BFRURfUEFMID0gNzA5Mzc4OS4yO1xuXG5leHBvcnQgZW51bSBBTUlHQV9DTE9DS19TUEVFRCB7XG4gICAgTlRTQyA9IEFNSUdBX0NMT0NLX1NQRUVEX05UU0MsXG4gICAgUEFMICA9IEFNSUdBX0NMT0NLX1NQRUVEX1BBTFxufVxuXG5leHBvcnQgY29uc3QgRUZGRUNUX0NPREVTID0ge1xuICAgIEFSUEVHR0lPOiAgICAgICAgICAgICAgICAgICAgICcwJywgICAgICAgICAgIC8vIOKImlxuICAgIFBPUlRBTUVOVE9fVVA6ICAgICAgICAgICAgICAgICcxJywgICAgICAgICAgIC8vIOKImlxuICAgIFBPUlRBTUVOVE9fRE9XTjogICAgICAgICAgICAgICcyJywgICAgICAgICAgIC8vIOKImlxuICAgIFRPTkVfUE9SVEFNRU5UTzogICAgICAgICAgICAgICczJywgICAgICAgICAgIC8vIOKImlxuICAgIFZJQlJBVE86ICAgICAgICAgICAgICAgICAgICAgICc0JywgICAgICAgICAgIC8vIOKImlxuICAgIFZPTFVNRV9TTElERV9UT05FX1BPUlRBTUVOVE86ICc1JywgICAgICAgICAgIC8vIOKImlxuICAgIFZPTFVNRV9TTElERV9WSUJSQVRPOiAgICAgICAgICc2JywgICAgICAgICAgIC8vIOKImlxuICAgIFRSRU1PTE86ICAgICAgICAgICAgICAgICAgICAgICc3JywgICAgICAgICAgIC8vIOKImlxuICAgIFNFVF9QQU5OSU5HX1BPU0lUSU9OOiAgICAgICAgICc4JyxcbiAgICBTRVRfU0FNUExFX09GRlNFVDogICAgICAgICAgICAnOScsICAgICAgICAgICAvLyDiiJpcbiAgICBWT0xVTUVfU0xJREU6ICAgICAgICAgICAgICAgICAnMTAnLCAgICAgICAgICAvLyDiiJpcbiAgICBQT1NJVElPTl9KVU1QOiAgICAgICAgICAgICAgICAnMTEnLCAgICAgICAgICAvLyDiiJpcbiAgICBTRVRfVk9MVU1FOiAgICAgICAgICAgICAgICAgICAnMTInLCAgICAgICAgICAvLyDiiJpcbiAgICBQQVRURVJOX0JSRUFLOiAgICAgICAgICAgICAgICAnMTMnLCAgICAgICAgICAvLyDiiJpcbiAgICBTRVRfRklMVEVSOiAgICAgICAgICAgICAgICAgICAnMTQtMCcsXG4gICAgRklORV9QT1JUQU1FTlRPX1VQOiAgICAgICAgICAgJzE0LTEnLCAgICAgICAgLy8g4oiaXG4gICAgRklORV9QT1JUQU1FTlRPX0RPV046ICAgICAgICAgJzE0LTInLCAgICAgICAgLy8g4oiaXG4gICAgR0xJU1NBTkRPOiAgICAgICAgICAgICAgICAgICAgJzE0LTMnLFxuICAgIFNFVF9WSUJSQVRPX1dBVkVGT1JNOiAgICAgICAgICcxNC00JywgICAgICAgIC8vIOKImlxuICAgIFNFVF9GSU5FX1RVTkU6ICAgICAgICAgICAgICAgICcxNC01JywgICAgICAgIC8vIOKImlxuICAgIFBBVFRFUk5fTE9PUDogICAgICAgICAgICAgICAgICcxNC02JywgICAgICAgIC8vIOKImlxuICAgIFNFVF9UUkVNT0xPX1dBVkVGT1JNOiAgICAgICAgICcxNC03JywgICAgICAgIC8vIOKImlxuICAgIC8vIFVOVVNFRDogICAgICAgICAgICAgICAgICAgICcxNC04J1xuICAgIFJFVFJJR0dFUl9OT1RFOiAgICAgICAgICAgICAgICcxNC05JywgICAgICAgIC8vIOKImlxuICAgIEZJTkVfVk9MVU1FX1NMSURFX1VQOiAgICAgICAgICcxNC0xMCcsICAgICAgIC8vIOKImlxuICAgIEZJTkVfVk9MVU1FX1NMSURFX0RPV046ICAgICAgICcxNC0xMScsICAgICAgIC8vIOKImlxuICAgIE5PVEVfQ1VUOiAgICAgICAgICAgICAgICAgICAgICcxNC0xMicsICAgICAgIC8vIOKImlxuICAgIE5PVEVfREVMQVk6ICAgICAgICAgICAgICAgICAgICcxNC0xMycsICAgICAgIC8vIOKImlxuICAgIFBBVFRFUk5fREVMQVk6ICAgICAgICAgICAgICAgICcxNC0xNCcsICAgICAgIC8vIOKImlxuICAgIEZVTktSRVBFQVQ6ICAgICAgICAgICAgICAgICAgICcxNC0xNScsXG4gICAgU0VUX1NQRUVEOiAgICAgICAgICAgICAgICAgICAgJzE1JywgICAgICAgICAgLy8g4oiaXG59O1xuXG5leHBvcnQgY29uc3QgV0FWRV9UWVBFUzogV2F2ZVR5cGVbXSA9IFsnc2luZScsICdzYXd0b290aCcsICdzcXVhcmUnLCAncmFuZG9tJ107IC8vIERvIG5vdCByZS1vcmRlciFcblxuZXhwb3J0IGNvbnN0IFVOS05PV05fRk9STUFUID0gJ1Vua25vd24gZm9ybWF0JztcbiIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgYXJwZWdnaW9FZmZlY3QgPSAocDE6IG51bWJlciwgcDI6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25UaWNrU3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCk7XG4gICAgXG4gICAgICAgIGlmIChzdGF0ZS5jdXJyZW50VGljayAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIGNoYW5uZWwucmVzZXRQZXJpb2QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5jdXJyZW50VGljayAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKGNoYW5uZWwuZ2V0RmluZVR1bmVkUGVyaW9kKCkgLyBNYXRoLnBvdygyLCBwMSAvIDEyKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuY3VycmVudFRpY2sgJSAzID09PSAyKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChjaGFubmVsLmdldEZpbmVUdW5lZFBlcmlvZCgpIC8gTWF0aC5wb3coMiwgcDIgLyAxMikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25UaWNrU3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycGVnZ2lvRWZmZWN0OyIsImltcG9ydCB7IEVGRkVDVF9DT0RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVmZmVjdENvZGUgfSBmcm9tIFwiLi4vbW9kZWxzL0VmZmVjdENvZGUuaW50ZXJmYWNlXCI7XG5cbmltcG9ydCBhcnBlZ2dpb0VmZmVjdCBmcm9tIFwiLi9hcnBlZ2dpb0VmZmVjdC9hcnBlZ2dpb0VmZmVjdFwiO1xuaW1wb3J0IGZpbmVQb3J0YW1lbnRvRG93bkVmZmVjdCBmcm9tIFwiLi9maW5lUG9ydGFtZW50b0Rvd25FZmZlY3QvZmluZVBvcnRhbWVudG9Eb3duRWZmZWN0XCI7XG5pbXBvcnQgZmluZVBvcnRhbWVudG9VcEVmZmVjdCBmcm9tIFwiLi9maW5lUG9ydGFtZW50b1VwRWZmZWN0L2ZpbmVQb3J0YW1lbnRvVXBFZmZlY3RcIjtcbmltcG9ydCBwb3J0YW1lbnRvRG93bkVmZmVjdCBmcm9tIFwiLi9wb3J0YW1lbnRvRG93bkVmZmVjdC9wb3J0YW1lbnRvRG93bkVmZmVjdFwiO1xuaW1wb3J0IHBvcnRhbWVudG9VcEVmZmVjdCBmcm9tIFwiLi9wb3J0YW1lbnRvVXBFZmZlY3QvcG9ydGFtZW50b1VwRWZmZWN0XCI7XG5pbXBvcnQgdmlicmF0b0VmZmVjdCBmcm9tIFwiLi92aWJyYXRvRWZmZWN0L3ZpYnJhdG9FZmZlY3RcIjtcbmltcG9ydCB2b2x1bWVTbGlkZUVmZmVjdCBmcm9tIFwiLi92b2x1bWVTbGlkZUVmZmVjdC92b2x1bWVTbGlkZUVmZmVjdFwiO1xuaW1wb3J0IGZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0IGZyb20gXCIuL2ZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0L2ZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0XCI7XG5pbXBvcnQgZmluZVZvbHVtZVNsaWRlRG93bkVmZmVjdCBmcm9tIFwiLi9maW5lVm9sdW1lU2xpZGVEb3duRWZmZWN0L2ZpbmVWb2x1bWVTbGlkZURvd25FZmZlY3RcIjtcbmltcG9ydCB0cmVtb2xvRWZmZWN0IGZyb20gXCIuL3RyZW1vbG9FZmZlY3QvdHJlbW9sb0VmZmVjdFwiO1xuaW1wb3J0IHBvc2l0aW9uSnVtcEVmZmVjdCBmcm9tIFwiLi9wb3NpdGlvbkp1bXBFZmZlY3QvcG9zaXRpb25KdW1wRWZmZWN0XCI7XG5pbXBvcnQgcGF0dGVybkJyZWFrRWZmZWN0IGZyb20gXCIuL3BhdHRlcm5CcmVha0VmZmVjdC9wYXR0ZXJuQnJlYWtFZmZlY3RcIjtcbmltcG9ydCBwYXR0ZXJuTG9vcEVmZmVjdCBmcm9tIFwiLi9wYXR0ZXJuTG9vcEVmZmVjdC9wYXR0ZXJuTG9vcEVmZmVjdFwiO1xuaW1wb3J0IG5vdGVEZWxheUVmZmVjdCBmcm9tIFwiLi9ub3RlRGVsYXlFZmZlY3Qvbm90ZURlbGF5RWZmZWN0XCI7XG5pbXBvcnQgbm90ZUN1dEVmZmVjdCBmcm9tIFwiLi9ub3RlQ3V0RWZmZWN0L25vdGVDdXRFZmZlY3RcIjtcbmltcG9ydCByZXRyaWdnZXJOb3RlRWZmZWN0IGZyb20gXCIuL3JldHJpZ2dlck5vdGVFZmZlY3QvcmV0cmlnZ2VyTm90ZUVmZmVjdFwiO1xuaW1wb3J0IHNldFNhbXBsZU9mZnNldEVmZmVjdCBmcm9tIFwiLi9zZXRTYW1wbGVPZmZzZXRFZmZlY3Qvc2V0U2FtcGxlT2Zmc2V0RWZmZWN0XCI7XG5pbXBvcnQgc2V0Vm9sdW1lRWZmZWN0IGZyb20gXCIuL3NldFZvbHVtZUVmZmVjdC9zZXRWb2x1bWVFZmZlY3RcIjtcbmltcG9ydCBzZXRWaWJyYXRvV2F2ZWZvcm1FZmZlY3QgZnJvbSBcIi4vc2V0VmlicmF0b1dhdmVmb3JtRWZmZWN0L3NldFZpYnJhdG9XYXZlZm9ybUVmZmVjdFwiO1xuaW1wb3J0IHNldFRlbW9sb1dhdmVmb3JtRWZmZWN0IGZyb20gXCIuL3NldFRyZW1vbG9XYXZlZm9ybUVmZmVjdC9zZXRUcmVtb2xvV2F2ZWZvcm1FZmZlY3RcIjtcbmltcG9ydCBzZXRGaW5lVHVuZUVmZmVjdCBmcm9tIFwiLi9zZXRGaW5lVHVuZUVmZmVjdC9zZXRGaW5lVHVuZUVmZmVjdFwiO1xuaW1wb3J0IHNldFNwZWVkRWZmZWN0IGZyb20gXCIuL3NldFNwZWVkRWZmZWN0L3NldFNwZWVkRWZmZWN0XCI7XG5pbXBvcnQgdG9uZVBvcnRhbWVudG9FZmZlY3QgZnJvbSBcIi4vdG9uZVBvcnRhbWVudG9FZmZlY3QvdG9uZVBvcnRhbWVudG9FZmZlY3RcIjtcbmltcG9ydCB2b2x1bWVTbGlkZVZpYnJhdG9FZmZlY3QgZnJvbSBcIi4vdm9sdW1lU2xpZGVWaWJyYXRvRWZmZWN0L3ZvbHVtZVNsaWRlVmlicmF0b0VmZmVjdFwiO1xuaW1wb3J0IHZvbHVtZVNsaWRlVG9uZVBvcnRhbWVudG9FZmZlY3QgZnJvbSBcIi4vdm9sdW1lU2xpZGVUb25lUG9ydGFtZW50b0VmZmVjdC92b2x1bWVTbGlkZVRvbmVQb3J0YW1lbnRvRWZmZWN0XCI7XG5pbXBvcnQgcGF0dGVybkRlbGF5RWZmZWN0IGZyb20gXCIuL3BhdHRlcm5EZWxheUVmZmVjdC9wYXR0ZXJuRGVsYXlFZmZlY3RcIjtcblxuLyoqXG4gKiBXaWxsIHJldHVybiBhIFByb3RyYWNrZXI8RWZmZWN0PkVmZmVjdCBjbGFzcyBpbnN0YW5jZSB3aGljaCBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIHRoZSBnaXZlbiBlZmZlY3RcbiAqIEBwYXJhbSBlZmZlY3RDb2RlIC0gVGhlIGVmZmVjdCBjb2RlIHRoYXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdEZhY3RvcnkoZWZmZWN0Q29kZT86IEVmZmVjdENvZGUpIHtcbiAgICBpZighZWZmZWN0Q29kZSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGNvZGUgPSBlZmZlY3RDb2RlLmNvZGUgPT09IDE0ID8gYCR7ZWZmZWN0Q29kZS5jb2RlfS0ke2VmZmVjdENvZGUucHh9YCA6IGAke2VmZmVjdENvZGUuY29kZX1gO1xuXG4gICAgc3dpdGNoKGNvZGUpIHtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuQVJQRUdHSU86XG4gICAgICAgICAgICByZXR1cm4gYXJwZWdnaW9FZmZlY3QoZWZmZWN0Q29kZS5weCwgZWZmZWN0Q29kZS5weSk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBPUlRBTUVOVE9fRE9XTjpcbiAgICAgICAgICAgIHJldHVybiBwb3J0YW1lbnRvRG93bkVmZmVjdChlZmZlY3RDb2RlLnApO1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5QT1JUQU1FTlRPX1VQOlxuICAgICAgICAgICAgcmV0dXJuIHBvcnRhbWVudG9VcEVmZmVjdChlZmZlY3RDb2RlLnApO1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5UT05FX1BPUlRBTUVOVE86XG4gICAgICAgICAgICByZXR1cm4gdG9uZVBvcnRhbWVudG9FZmZlY3QoZWZmZWN0Q29kZS5wKTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuVklCUkFUTzpcbiAgICAgICAgICAgIHJldHVybiB2aWJyYXRvRWZmZWN0KGVmZmVjdENvZGUucHgsIGVmZmVjdENvZGUucHkpO1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5WT0xVTUVfU0xJREVfVE9ORV9QT1JUQU1FTlRPOlxuICAgICAgICAgICAgcmV0dXJuIHZvbHVtZVNsaWRlVG9uZVBvcnRhbWVudG9FZmZlY3QoZWZmZWN0Q29kZS5weCwgZWZmZWN0Q29kZS5weSk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlZPTFVNRV9TTElERV9WSUJSQVRPOlxuICAgICAgICAgICAgcmV0dXJuIHZvbHVtZVNsaWRlVmlicmF0b0VmZmVjdChlZmZlY3RDb2RlLnB4LCBlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuVFJFTU9MTzpcbiAgICAgICAgICAgIHJldHVybiB0cmVtb2xvRWZmZWN0KGVmZmVjdENvZGUucHgsIGVmZmVjdENvZGUucHkpO1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5TRVRfU0FNUExFX09GRlNFVDpcbiAgICAgICAgICAgIHJldHVybiBzZXRTYW1wbGVPZmZzZXRFZmZlY3QoZWZmZWN0Q29kZS5wKTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuVk9MVU1FX1NMSURFOlxuICAgICAgICAgICAgcmV0dXJuIHZvbHVtZVNsaWRlRWZmZWN0KGVmZmVjdENvZGUucHgsIGVmZmVjdENvZGUucHkpXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBPU0lUSU9OX0pVTVA6XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb25KdW1wRWZmZWN0KGVmZmVjdENvZGUucCk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9WT0xVTUU6XG4gICAgICAgICAgICByZXR1cm4gc2V0Vm9sdW1lRWZmZWN0KGVmZmVjdENvZGUucCk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBBVFRFUk5fQlJFQUs6XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybkJyZWFrRWZmZWN0KGVmZmVjdENvZGUucHgsIGVmZmVjdENvZGUucHkpO1xuXG4gICAgICAgIC8vIGV4dGVuZGVkIGNvZGVzIChFMC1FRilcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuRklORV9QT1JUQU1FTlRPX1VQOlxuICAgICAgICAgICAgcmV0dXJuIGZpbmVQb3J0YW1lbnRvVXBFZmZlY3QoZWZmZWN0Q29kZS5weSlcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuRklORV9QT1JUQU1FTlRPX0RPV046XG4gICAgICAgICAgICByZXR1cm4gZmluZVBvcnRhbWVudG9Eb3duRWZmZWN0KGVmZmVjdENvZGUucHkpXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9WSUJSQVRPX1dBVkVGT1JNOlxuICAgICAgICAgICAgcmV0dXJuIHNldFZpYnJhdG9XYXZlZm9ybUVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuU0VUX0ZJTkVfVFVORTpcbiAgICAgICAgICAgIHJldHVybiBzZXRGaW5lVHVuZUVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuUEFUVEVSTl9MT09QOlxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5Mb29wRWZmZWN0KGVmZmVjdENvZGUucHkpO1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5TRVRfVFJFTU9MT19XQVZFRk9STTpcbiAgICAgICAgICAgIHJldHVybiBzZXRUZW1vbG9XYXZlZm9ybUVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuUkVUUklHR0VSX05PVEU6XG4gICAgICAgICAgICByZXR1cm4gcmV0cmlnZ2VyTm90ZUVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuRklORV9WT0xVTUVfU0xJREVfVVA6XG4gICAgICAgICAgICByZXR1cm4gZmluZVZvbHVtZVNsaWRlVXBFZmZlY3QoZWZmZWN0Q29kZS5weSk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLkZJTkVfVk9MVU1FX1NMSURFX0RPV046XG4gICAgICAgICAgICByZXR1cm4gZmluZVZvbHVtZVNsaWRlRG93bkVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuTk9URV9DVVQ6XG4gICAgICAgICAgICByZXR1cm4gbm90ZUN1dEVmZmVjdChlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuTk9URV9ERUxBWTpcbiAgICAgICAgICAgIHJldHVybiBub3RlRGVsYXlFZmZlY3QoZWZmZWN0Q29kZS5weSk7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBBVFRFUk5fREVMQVk6XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybkRlbGF5RWZmZWN0KGVmZmVjdENvZGUucHkpO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9TUEVFRDpcbiAgICAgICAgICAgIHJldHVybiBzZXRTcGVlZEVmZmVjdChlZmZlY3RDb2RlLnApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWZmZWN0RmFjdG9yeTsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmVQb3J0YW1lbnRvRG93bkVmZmVjdCA9IChwMTogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblJvd0VuZCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKGNoYW5uZWwuZ2V0UGVyaW9kKCkgKyBwMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Sb3dFbmRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmVQb3J0YW1lbnRvRG93bkVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmVQb3J0YW1lbnRvVXBFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dFbmQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjaGFubmVsLnNldFBlcmlvZChjaGFubmVsLmdldFBlcmlvZCgpIC0gcDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93RW5kXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5lUG9ydGFtZW50b1VwRWZmZWN0OyIsImltcG9ydCB7IG1pbk1heExpbWl0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmVWb2x1bWVTbGlkZURvd25FZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZvbHVtZSA9IGNoYW5uZWwuZ2V0Vm9sdW1lKCkgLSBwMTtcbiAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUobWluTWF4TGltaXQobmV3Vm9sdW1lLCAwLCA2NCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmVWb2x1bWVTbGlkZURvd25FZmZlY3Q7IiwiaW1wb3J0IHsgbWluTWF4TGltaXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgZmluZVZvbHVtZVNsaWRlVXBFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZvbHVtZSA9IGNoYW5uZWwuZ2V0Vm9sdW1lKCkgKyBwMTtcbiAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUobWluTWF4TGltaXQobmV3Vm9sdW1lLCAwLCA2NCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmVWb2x1bWVTbGlkZVVwRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3Qgbm90ZUN1dEVmZmVjdCA9IChwMTogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblRpY2tTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gcGxheWVyLmdldFBsYXliYWNrU3RhdGUoKTtcblxuICAgICAgICBpZiAoc3RhdGUuY3VycmVudFRpY2sgPT09IHAxKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFZvbHVtZSgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGlja1N0YXJ0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBub3RlQ3V0RWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3Qgbm90ZURlbGF5RWZmZWN0ID0gKHAxOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uVGlja1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0UGxheWJhY2tTdGF0ZSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZS5jdXJyZW50VGljayA8IHAxKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFNhbXBsZUFzRW5kZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuY3VycmVudFRpY2sgPT09IHAxKSB7XG4gICAgICAgICAgICBjaGFubmVsLnJlc2V0U2FtcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbm90ZURlbGF5RWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgcGF0dGVybkJyZWFrRWZmZWN0ID0gKHAxOiBudW1iZXIsIHAyOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93RW5kID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgcGxheWVyLm5leHRQYXR0ZXJuKCkgfHwgcGxheWVyLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHBsYXllci5nZXRTb25nTG9vcEluZGV4KCkpO1xuICAgICAgICBwbGF5ZXIuc2V0Um93SW5kZXgoKDEwICogcDEpICsgcDIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93RW5kXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXR0ZXJuQnJlYWtFZmZlY3Q7IiwiaW1wb3J0IFByb3RyYWNrZXIgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJcIjtcbmltcG9ydCBQcm90cmFja2VyQ2hhbm5lbCBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCBFZmZlY3RQcm9jZXNzb3IgZnJvbSBcIi4uLy4uL21vZGVscy9FZmZlY3RQcm9jZXNzb3IuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuRGVsYXlFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIHBsYXllci5zZXRQYXR0ZXJuRGVsYXkocDEgKiBwbGF5ZXIuc3RhdGUuc3BlZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhdHRlcm5EZWxheUVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5Mb29wRWZmZWN0ID0gKHAxOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93RW5kID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgaWYocDEgPT09IDApIHtcbiAgICAgICAgICAgIHBsYXllci5zZXRQYXR0ZXJuTG9vcFJvd0luZGV4KHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCkuY3VycmVudFJvd0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxvb3BDb3VudCA9IHBsYXllci5nZXRQYXR0ZXJuTG9vcENvdW50KCkgLSAxO1xuICAgICAgICAgICAgcGxheWVyLnNldFBhdHRlcm5Mb29wQ291bnQobG9vcENvdW50KTtcblxuICAgICAgICAgICAgaWYgKGxvb3BDb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0UGF0dGVybkxvb3BDb3VudChwMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsb29wQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNldFJvd0luZGV4KHBsYXllci5nZXRQYXR0ZXJuTG9vcFJvd0luZGV4KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Sb3dFbmRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhdHRlcm5Mb29wRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgcG9ydGFtZW50b0Rvd25FZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25UaWNrU3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCk7XG5cbiAgICAgICAgaWYoc3RhdGUuY3VycmVudFRpY2sgPiAwKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChjaGFubmVsLmdldFBlcmlvZCgpICsgcDEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9ydGFtZW50b0Rvd25FZmZlY3Q7IiwiaW1wb3J0IFByb3RyYWNrZXIgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJcIjtcbmltcG9ydCBQcm90cmFja2VyQ2hhbm5lbCBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCBFZmZlY3RQcm9jZXNzb3IgZnJvbSBcIi4uLy4uL21vZGVscy9FZmZlY3RQcm9jZXNzb3IuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBwb3J0YW1lbnRvVXBFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25UaWNrU3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCk7XG5cbiAgICAgICAgaWYoc3RhdGUuY3VycmVudFRpY2sgPiAwKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChjaGFubmVsLmdldFBlcmlvZCgpIC0gcDEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9ydGFtZW50b1VwRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgcG9zaXRpb25KdW1wRWZmZWN0ID0gKHAxOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93RW5kID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgcGxheWVyLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHAxLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblJvd0VuZFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25KdW1wRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgcmV0cmlnZ2VyTm90ZUVmZmVjdCA9IChwMTogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblRpY2tTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gcGxheWVyLmdldFBsYXliYWNrU3RhdGUoKTtcblxuICAgICAgICBpZiAoc3RhdGUuY3VycmVudFRpY2sgJSBwMSA9PT0gMCkge1xuICAgICAgICAgICAgY2hhbm5lbC5zZXRTYW1wbGVQb3NpdGlvbigwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGlja1N0YXJ0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXRyaWdnZXJOb3RlRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3Qgc2V0RmluZVR1bmVFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uID0gY2hhbm5lbC5nZXRJbnN0cnVjdGlvbigpO1xuXG4gICAgICAgIGlmIChpbnN0cnVjdGlvbiAmJiBpbnN0cnVjdGlvbi5wZXJpb2QgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbmVUdW5lID0gcDEgPCA4ID8gcDEgOiAtMTYgKyBwMTtcbiAgICAgICAgICAgIGNoYW5uZWwuc2V0RmluZVR1bmUobmV3RmluZVR1bmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Sb3dTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0RmluZVR1bmVFZmZlY3Q7IiwiaW1wb3J0IFByb3RyYWNrZXIgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJcIjtcbmltcG9ydCBQcm90cmFja2VyQ2hhbm5lbCBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCBFZmZlY3RQcm9jZXNzb3IgZnJvbSBcIi4uLy4uL21vZGVscy9FZmZlY3RQcm9jZXNzb3IuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRTYW1wbGVPZmZzZXRFZmZlY3QgPSAocDE6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNoYW5uZWwuc2V0U2FtcGxlUG9zaXRpb24oMjU2ICogcDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFNhbXBsZU9mZnNldEVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHNldFNwZWVkRWZmZWN0ID0gKHAxOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93U3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBpZihwMSA+IDMxKSB7XG4gICAgICAgICAgICBwbGF5ZXIuc2V0VGVtcG8ocDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyLnNldFNwZWVkKHAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFNwZWVkRWZmZWN0OyIsImltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgc2V0T3NjaWxsYXRvcldhdmVmb3JtIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRUZW1vbG9XYXZlZm9ybUVmZmVjdCA9IChwMTogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblJvd1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3QgdHJlbW9sbyA9IGNoYW5uZWwuZ2V0VHJlbW9sbygpO1xuXG4gICAgICAgIGlmKHAxIDw9IDcpIHtcbiAgICAgICAgICAgIHNldE9zY2lsbGF0b3JXYXZlZm9ybSh0cmVtb2xvLCBwMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblJvd1N0YXJ0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRUZW1vbG9XYXZlZm9ybUVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHNldE9zY2lsbGF0b3JXYXZlZm9ybSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0VmlicmF0b1dhdmVmb3JtRWZmZWN0ID0gKHAxOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93U3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCB2aWJyYXRvID0gY2hhbm5lbC5nZXRWaWJyYXRvKCk7XG5cbiAgICAgICAgaWYocDEgPD0gNykge1xuICAgICAgICAgICAgc2V0T3NjaWxsYXRvcldhdmVmb3JtKHZpYnJhdG8sIHAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFZpYnJhdG9XYXZlZm9ybUVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHNldFZvbHVtZUVmZmVjdCA9IChwMTogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblJvd1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUocDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFZvbHVtZUVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHRvbmVQb3J0YW1lbnRvRWZmZWN0ID0gKHAxPzogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblJvd1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBjaGFubmVsLmdldEluc3RydWN0aW9uKCk7XG5cbiAgICAgICAgaWYocDEgJiYgcDEgPiAwKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFNsaWRlUmF0ZShwMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5zdHJ1Y3Rpb24gJiYgaW5zdHJ1Y3Rpb24ucGVyaW9kKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFNsaWRlVGFyZ2V0KGluc3RydWN0aW9uLnBlcmlvZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblRpY2tTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGlmIChjaGFubmVsLmdldFBlcmlvZCgpID4gY2hhbm5lbC5nZXRTbGlkZVRhcmdldCgpKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChNYXRoLm1heChjaGFubmVsLmdldFBlcmlvZCgpIC0gY2hhbm5lbC5nZXRTbGlkZVJhdGUoKSwgY2hhbm5lbC5nZXRTbGlkZVRhcmdldCgpKSk7XG4gICAgICAgIH0gZWxzZSBpZihjaGFubmVsLmdldFBlcmlvZCgpIDwgY2hhbm5lbC5nZXRTbGlkZVRhcmdldCgpKSB7XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChNYXRoLm1pbihjaGFubmVsLmdldFBlcmlvZCgpICsgY2hhbm5lbC5nZXRTbGlkZVJhdGUoKSwgY2hhbm5lbC5nZXRTbGlkZVRhcmdldCgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblJvd1N0YXJ0LFxuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9uZVBvcnRhbWVudG9FZmZlY3Q7IiwiaW1wb3J0IFByb3RyYWNrZXIgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJcIjtcbmltcG9ydCBQcm90cmFja2VyQ2hhbm5lbCBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCBFZmZlY3RQcm9jZXNzb3IgZnJvbSBcIi4uLy4uL21vZGVscy9FZmZlY3RQcm9jZXNzb3IuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCB0cmVtb2xvRWZmZWN0ID0gKHAxOiBudW1iZXIsIHAyOiBudW1iZXIpOiBFZmZlY3RQcm9jZXNzb3IgPT4ge1xuICAgIGNvbnN0IG9uUm93U3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCk7XG4gICAgICAgIGNvbnN0IHRyZW1vbG8gPSBjaGFubmVsLmdldFRyZW1vbG8oKTtcblxuICAgICAgICB0cmVtb2xvLnNldE9yaWdpbmFsVmFsdWUoY2hhbm5lbC5nZXRWb2x1bWUoKSk7XG4gICAgICAgIHRyZW1vbG8uc2V0T3NjaWxsYXRpb25zUGVyUm93KChwMSAqIChzdGF0ZS5zcGVlZCAtIDEpKSAvIDY0KTtcbiAgICAgICAgdHJlbW9sby5zZXRBbXBsaXR1ZGUocDIgKiAyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJvd0VuZCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyZW1vbG8gPSBjaGFubmVsLmdldFRyZW1vbG8oKTtcblxuICAgICAgICBpZih0cmVtb2xvLmdldFJldHJpZ2dlcigpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJlbW9sby5pbmNyZW1lbnRPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBjaGFubmVsLnNldFZvbHVtZSh0cmVtb2xvLmdldE9yaWdpbmFsVmFsdWUoKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25UaWNrU3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCB0cmVtb2xvID0gY2hhbm5lbC5nZXRUcmVtb2xvKCk7XG5cbiAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUodHJlbW9sby5nZXRWYWx1ZShwbGF5ZXIuZ2V0Um93UG9zaXRpb24oKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnQsXG4gICAgICAgIG9uUm93RW5kLFxuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJlbW9sb0VmZmVjdDsiLCJpbXBvcnQgeyBFRkZFQ1RfQ09ERVMsIFdBVkVfVFlQRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFZmZlY3RDb2RlIH0gZnJvbSBcIi4uL21vZGVscy9FZmZlY3RDb2RlLmludGVyZmFjZVwiO1xuaW1wb3J0IFByb3RyYWNrZXJPc2NpbGxhdG9yIGZyb20gXCIuLi9Qcm90cmFja2VyT3NjaWxsYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUb25lUG9ydGFtZW50byhlZmZlY3Q6IEVmZmVjdENvZGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIWVmZmVjdCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGNvZGUgPSBlZmZlY3QuY29kZSA9PT0gMTQgPyBgJHtlZmZlY3QuY29kZX0tJHtlZmZlY3QucHh9YCA6IGAke2VmZmVjdC5jb2RlfWA7XG4gICAgcmV0dXJuIGNvZGUgPT09IEVGRkVDVF9DT0RFUy5UT05FX1BPUlRBTUVOVE8gfHwgY29kZSA9PT0gRUZGRUNUX0NPREVTLlZPTFVNRV9TTElERV9UT05FX1BPUlRBTUVOVE87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPc2NpbGxhdG9yV2F2ZWZvcm0ob3NjaWxsYXRvcjogUHJvdHJhY2tlck9zY2lsbGF0b3IsIHBhcmFtOiBudW1iZXIpIHtcbiAgICBjb25zdCB0eXBlQ29kZSA9IHBhcmFtID49IDQgPyBwYXJhbSAtIDQgOiBwYXJhbTtcbiAgICBjb25zdCByZXRyaWdnZXIgPSBwYXJhbSA8IDQ7XG4gICAgY29uc3QgZ2VuZXJhdG9yID0gV0FWRV9UWVBFU1t0eXBlQ29kZV07XG5cbiAgICBvc2NpbGxhdG9yLnNldFdhdmVHZW5lcmF0b3IoZ2VuZXJhdG9yKTtcbiAgICBvc2NpbGxhdG9yLnNldFJldHJpZ2dlcihyZXRyaWdnZXIpO1xufTsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHZpYnJhdG9FZmZlY3QgPSAocDE/OiBudW1iZXIsIHAyPzogbnVtYmVyKTogRWZmZWN0UHJvY2Vzc29yID0+IHtcbiAgICBjb25zdCBvblJvd1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0UGxheWJhY2tTdGF0ZSgpO1xuICAgICAgICBjb25zdCB2aWJyYXRvID0gY2hhbm5lbC5nZXRWaWJyYXRvKCk7XG5cbiAgICAgICAgdmlicmF0by5zZXRPcmlnaW5hbFZhbHVlKGNoYW5uZWwuZ2V0UGVyaW9kKCkpO1xuICAgICAgICBpZihwMSkge1xuICAgICAgICAgICAgdmlicmF0by5zZXRPc2NpbGxhdGlvbnNQZXJSb3coKHAxICogKHN0YXRlLnNwZWVkIC0gMSkpIC8gNjQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAyKSB7XG4gICAgICAgICAgICB2aWJyYXRvLnNldEFtcGxpdHVkZShwMiAqIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25Sb3dFbmQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCB2aWJyYXRvID0gY2hhbm5lbC5nZXRWaWJyYXRvKCk7XG5cbiAgICAgICAgaWYodmlicmF0by5nZXRSZXRyaWdnZXIoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZpYnJhdG8uaW5jcmVtZW50T2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbm5lbC5zZXRQZXJpb2QodmlicmF0by5nZXRPcmlnaW5hbFZhbHVlKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uVGlja1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3QgdmlicmF0byA9IGNoYW5uZWwuZ2V0VmlicmF0bygpO1xuXG4gICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKHZpYnJhdG8uZ2V0VmFsdWUocGxheWVyLmdldFJvd1Bvc2l0aW9uKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblJvd1N0YXJ0LFxuICAgICAgICBvblJvd0VuZCxcbiAgICAgICAgb25UaWNrU3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpYnJhdG9FZmZlY3Q7IiwiaW1wb3J0IHsgbWluTWF4TGltaXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBQcm90cmFja2VyIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyXCI7XG5pbXBvcnQgUHJvdHJhY2tlckNoYW5uZWwgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJDaGFubmVsL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgRWZmZWN0UHJvY2Vzc29yIGZyb20gXCIuLi8uLi9tb2RlbHMvRWZmZWN0UHJvY2Vzc29yLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3Qgdm9sdW1lU2xpZGVFZmZlY3QgPSAocDE6IG51bWJlciwgcDI6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgb25UaWNrU3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRQbGF5YmFja1N0YXRlKCk7XG5cbiAgICAgICAgaWYoc3RhdGUuY3VycmVudFRpY2sgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWb2x1bWUgPSBwMSA/IGNoYW5uZWwuZ2V0Vm9sdW1lKCkgKyBwMSA6IGNoYW5uZWwuZ2V0Vm9sdW1lKCkgLSBwMjtcbiAgICAgICAgICAgIGNoYW5uZWwuc2V0Vm9sdW1lKG1pbk1heExpbWl0KG5ld1ZvbHVtZSwgMCwgNjQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGlja1N0YXJ0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2b2x1bWVTbGlkZUVmZmVjdDsiLCJpbXBvcnQgUHJvdHJhY2tlciBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuLi8uLi9Qcm90cmFja2VyQ2hhbm5lbC9Qcm90cmFja2VyQ2hhbm5lbFwiO1xuaW1wb3J0IEVmZmVjdFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbW9kZWxzL0VmZmVjdFByb2Nlc3Nvci5pbnRlcmZhY2VcIjtcbmltcG9ydCB0b25lUG9ydGFtZW50b0VmZmVjdCBmcm9tIFwiLi4vdG9uZVBvcnRhbWVudG9FZmZlY3QvdG9uZVBvcnRhbWVudG9FZmZlY3RcIjtcbmltcG9ydCB2b2x1bWVTbGlkZUVmZmVjdCBmcm9tIFwiLi4vdm9sdW1lU2xpZGVFZmZlY3Qvdm9sdW1lU2xpZGVFZmZlY3RcIjtcblxuZXhwb3J0IGNvbnN0IHZvbHVtZVNsaWRlVG9uZVBvcnRhbWVudG9FZmZlY3QgPSAocDE6IG51bWJlciwgcDI6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgdm9sdW1lU2xpZGUgPSB2b2x1bWVTbGlkZUVmZmVjdChwMSwgcDIpO1xuICAgIGNvbnN0IHRvbmVQb3J0YW1lbnRvID0gdG9uZVBvcnRhbWVudG9FZmZlY3QoKTsgLy8gY29udGludWF0aW9uIG9mIGxhc3QgdG9uZSBwb3J0YW1lbnRvLCBoZW5jZSBubyBwYXJhbXNcblxuICAgIGNvbnN0IG9uUm93U3RhcnQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICB2b2x1bWVTbGlkZS5vblJvd1N0YXJ0ICYmIHZvbHVtZVNsaWRlLm9uUm93U3RhcnQocGxheWVyLCBjaGFubmVsKTtcbiAgICAgICAgdG9uZVBvcnRhbWVudG8ub25Sb3dTdGFydCAmJiB0b25lUG9ydGFtZW50by5vblJvd1N0YXJ0KHBsYXllciwgY2hhbm5lbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Sb3dFbmQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICB2b2x1bWVTbGlkZS5vblJvd0VuZCAmJiB2b2x1bWVTbGlkZS5vblJvd0VuZChwbGF5ZXIsIGNoYW5uZWwpO1xuICAgICAgICB0b25lUG9ydGFtZW50by5vblJvd0VuZCAmJiB0b25lUG9ydGFtZW50by5vblJvd0VuZChwbGF5ZXIsIGNoYW5uZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uVGlja1N0YXJ0ID0gKHBsYXllcjogUHJvdHJhY2tlciwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpID0+IHtcbiAgICAgICAgdm9sdW1lU2xpZGUub25UaWNrU3RhcnQgJiYgdm9sdW1lU2xpZGUub25UaWNrU3RhcnQocGxheWVyLCBjaGFubmVsKTtcbiAgICAgICAgdG9uZVBvcnRhbWVudG8ub25UaWNrU3RhcnQgJiYgdG9uZVBvcnRhbWVudG8ub25UaWNrU3RhcnQocGxheWVyLCBjaGFubmVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvblJvd1N0YXJ0LFxuICAgICAgICBvblJvd0VuZCxcbiAgICAgICAgb25UaWNrU3RhcnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZvbHVtZVNsaWRlVG9uZVBvcnRhbWVudG9FZmZlY3Q7IiwiaW1wb3J0IFByb3RyYWNrZXIgZnJvbSBcIi4uLy4uL1Byb3RyYWNrZXJcIjtcbmltcG9ydCBQcm90cmFja2VyQ2hhbm5lbCBmcm9tIFwiLi4vLi4vUHJvdHJhY2tlckNoYW5uZWwvUHJvdHJhY2tlckNoYW5uZWxcIjtcbmltcG9ydCBFZmZlY3RQcm9jZXNzb3IgZnJvbSBcIi4uLy4uL21vZGVscy9FZmZlY3RQcm9jZXNzb3IuaW50ZXJmYWNlXCI7XG5pbXBvcnQgdmlicmF0b0VmZmVjdCBmcm9tIFwiLi4vdmlicmF0b0VmZmVjdC92aWJyYXRvRWZmZWN0XCI7XG5pbXBvcnQgdm9sdW1lU2xpZGVFZmZlY3QgZnJvbSBcIi4uL3ZvbHVtZVNsaWRlRWZmZWN0L3ZvbHVtZVNsaWRlRWZmZWN0XCI7XG5cbmV4cG9ydCBjb25zdCB2b2x1bWVTbGlkZVZpYnJhdG9FZmZlY3QgPSAocDE6IG51bWJlciwgcDI6IG51bWJlcik6IEVmZmVjdFByb2Nlc3NvciA9PiB7XG4gICAgY29uc3Qgdm9sdW1lU2xpZGUgPSB2b2x1bWVTbGlkZUVmZmVjdChwMSwgcDIpO1xuICAgIGNvbnN0IHZpYnJhdG8gPSB2aWJyYXRvRWZmZWN0KCk7IC8vIGNvbnRpbnVhdGlvbiBvZiBsYXN0IHZpYnJhdG8sIGhlbmNlIG5vIHBhcmFtc1xuXG4gICAgY29uc3Qgb25Sb3dTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIHZvbHVtZVNsaWRlLm9uUm93U3RhcnQgJiYgdm9sdW1lU2xpZGUub25Sb3dTdGFydChwbGF5ZXIsIGNoYW5uZWwpO1xuICAgICAgICB2aWJyYXRvLm9uUm93U3RhcnQgJiYgdmlicmF0by5vblJvd1N0YXJ0KHBsYXllciwgY2hhbm5lbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Sb3dFbmQgPSAocGxheWVyOiBQcm90cmFja2VyLCBjaGFubmVsOiBQcm90cmFja2VyQ2hhbm5lbCkgPT4ge1xuICAgICAgICB2b2x1bWVTbGlkZS5vblJvd0VuZCAmJiB2b2x1bWVTbGlkZS5vblJvd0VuZChwbGF5ZXIsIGNoYW5uZWwpO1xuICAgICAgICB2aWJyYXRvLm9uUm93RW5kICYmIHZpYnJhdG8ub25Sb3dFbmQocGxheWVyLCBjaGFubmVsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblRpY2tTdGFydCA9IChwbGF5ZXI6IFByb3RyYWNrZXIsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSA9PiB7XG4gICAgICAgIHZvbHVtZVNsaWRlLm9uVGlja1N0YXJ0ICYmIHZvbHVtZVNsaWRlLm9uVGlja1N0YXJ0KHBsYXllciwgY2hhbm5lbCk7XG4gICAgICAgIHZpYnJhdG8ub25UaWNrU3RhcnQgJiYgdmlicmF0by5vblRpY2tTdGFydChwbGF5ZXIsIGNoYW5uZWwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uUm93U3RhcnQsXG4gICAgICAgIG9uUm93RW5kLFxuICAgICAgICBvblRpY2tTdGFydFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdm9sdW1lU2xpZGVWaWJyYXRvRWZmZWN0OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQoKTogQXVkaW9Db250ZXh0IHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICh3aW5kb3cgYXMgYW55KS53ZWJraXRBdWRpb0NvbnRleHQpKClcbiAgICAgICAgOiBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgQXVkaW9Db250ZXh0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGUoc291cmNlOiBzdHJpbmcgfCBGaWxlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyBsb2FkRmlsZUZyb21Vcmwoc291cmNlKSA6IGxvYWRGaWxlRnJvbURpc2soc291cmNlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlRnJvbURpc2soc291cmNlOiBGaWxlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXI7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KFwiVElNRU9VVFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoJ0FCT1JUJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZTpgLCBzb3VyY2UpO1xuICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc291cmNlKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlRnJvbVVybChzb3VyY2U6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICAgIHJlcS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihyZXEucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFTVBUWVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlamVjdChcIlRJTUVPVVRcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWplY3QoJ0FCT1JUJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZSBmcm9tIFVSTDogJyR7c291cmNlfSdgKTtcbiAgICAgICAgcmVxLnNlbmQoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrUmFuZG9tKC4uLnBhcmFtczogYW55W10pIHtcbiAgICByZXR1cm4gcGFyYW1zW3JhbmRvbUludChwYXJhbXMubGVuZ3RoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5NYXhMaW1pdCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbilcbn1cblxuLyoqXG4gKiBHaXZlbiBhIG1heCBvZiAzLCBpdCB3aWxsIHJldHVybiAwLDEsMlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWQ4Yml0SW50KGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKS5nZXRVaW50OChvZmZzZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRCaWdFbmRpYW4xNmJpdEludChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIG9mZnNldDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcikuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRTdHJpbmdGcm9tQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlci5zbGljZShzdGFydCwgZW5kKSkpXG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9