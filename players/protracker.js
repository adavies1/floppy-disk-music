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
/* harmony import */ var _ProtrackerChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProtrackerChannel */ "./src/players/Protracker/ProtrackerChannel.ts");
/* harmony import */ var _ProtrackerReader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProtrackerReader */ "./src/players/Protracker/ProtrackerReader.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects */ "./src/players/Protracker/effects.ts");






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
    /****************************
     *     Public functions     *
     ****************************/
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
    /***************************
     *     Event functions     *
     ***************************/
    onAudioProcess(channelBuffers) {
        let stillMoreToPlay = true;
        if (!this._isDelayed()) {
            if (this._isStartofRow()) {
                this._assignInstructionsToChannels(this._getCurrentRow());
                this._processEffects(_effects__WEBPACK_IMPORTED_MODULE_5__["onRowStart"]);
            }
            if (this._isStartOfTick()) {
                this._processEffects(_effects__WEBPACK_IMPORTED_MODULE_5__["onTickStart"]);
            }
        }
        this._fillBuffers(channelBuffers);
        if (!this._isDelayed() && this._isEndOfRow()) {
            this._processEffects(_effects__WEBPACK_IMPORTED_MODULE_5__["onRowEnd"]);
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
    /*****************************
     *     Private functions     *
     *****************************/
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
            if (instruction.period && (!_effects__WEBPACK_IMPORTED_MODULE_5__["isTonePortamento"](instruction.effect))) {
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
            const delay = this.getPatternDelay() - 1;
            this.setPatternDelay(delay);
            if (delay !== -1) {
                this.state.currentTickSamplePosition = 0;
                return true;
            }
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
    _processEffects(effectProcessor) {
        this.channels.forEach(channel => {
            const channelEffect = channel.getEffect();
            if (channelEffect) {
                effectProcessor(this, this.state, channel);
            }
        });
    }
    _setupChannels(channelCount) {
        this.channels.length = 0;
        for (let i = 0; i < channelCount; i++) {
            this.channels.push(new _ProtrackerChannel__WEBPACK_IMPORTED_MODULE_3__["default"](this.audioContext.sampleRate, this.amigaClockSpeed));
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
        this.onMessage = (event) => {
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
        };
        this.fileData = config.processorOptions.fileData;
        this.player = new _Protracker__WEBPACK_IMPORTED_MODULE_0__["default"](globalThis /* hack */, this.fileData);
        this.port.onmessage = this.onMessage;
    }
    process(inputs, outputs, parameters) {
        const notFinished = this.player.onAudioProcess(outputs.map(output => output[0]));
        if (!notFinished) {
            this.port.postMessage({ message: 'ended' });
        }
        return notFinished;
    }
}
registerProcessor('protracker', ProtrackerAudioWorkletProcessor); /* hack - registerProcessor is global to AudioWorkletProcessor scope */


/***/ }),

/***/ "./src/players/Protracker/ProtrackerChannel.ts":
/*!*****************************************************!*\
  !*** ./src/players/Protracker/ProtrackerChannel.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtrackerChannel; });
/* harmony import */ var _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtrackerOscillator */ "./src/players/Protracker/ProtrackerOscillator.ts");

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
        tremolo: new _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_0__["default"],
        vibrato: new _ProtrackerOscillator__WEBPACK_IMPORTED_MODULE_0__["default"],
        volume: 64
    };
};
class ProtrackerChannel {
    constructor(bufferFrequency, amigaClockSpeed) {
        this.state = getDefaultState();
        this.amigaClockSpeed = amigaClockSpeed;
        this.bufferFrequency = bufferFrequency;
        this.reset();
    }
    ;
    /****************************
     *     Public functions     *
     ****************************/
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
        return this.state.instruction ? this.state.instruction.effect : undefined;
    }
    ;
    getFineTune() {
        return this.state.fineTune;
    }
    ;
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
    /*****************************
     *     Private functions     *
     *****************************/
    _calculateFrequency() {
        this.state.frequency = this.amigaClockSpeed / (this.state.period * 2);
    }
    ;
    _calculateFineTunedPeriod() {
        const fineTune = this.state.fineTune || 0;
        let period = this.state.originalPeriod;
        if (fineTune !== 0) {
            if (fineTune > 0) {
                period = period / Math.pow(2, Math.abs(fineTune) / (8 * 12));
            }
            else {
                period = period * Math.pow(2, Math.abs(fineTune) / (8 * 12));
            }
        }
        this.state.fineTunedPeriod = period;
    }
    _calculateSampleIncrement() {
        this.state.sampleIncrement = this.state.frequency / this.bufferFrequency;
    }
    ;
    _getSampleValue() {
        if (this.state.sample && !this.state.sampleHasEnded) {
            const fractionOfNextSample = this.state.samplePosition % 1;
            const lowerSample = this.state.sample.audio[Math.floor(this.state.samplePosition)];
            const upperSample = this.state.sample.audio[Math.ceil(this.state.samplePosition)];
            const diff = upperSample - lowerSample;
            return (lowerSample + (fractionOfNextSample * diff)) * (this.state.volume / 64);
        }
        else {
            return 0;
        }
    }
    ;
    _incrementSamplePosition() {
        if (this.state.sample && !this.state.sampleHasEnded) {
            let nextPosition = this.state.samplePosition + this.state.sampleIncrement;
            let sampleEnd;
            // The end of the sample is different depending on if the sample is now looping or not
            if (this.state.sample.repeatLength > 2) {
                sampleEnd = this.state.sample.repeatOffset + this.state.sample.repeatLength;
            }
            else {
                sampleEnd = this.state.sample.length;
            }
            // Increment sample position
            if (nextPosition < sampleEnd) {
                this.state.samplePosition = nextPosition;
            }
            else {
                if (this.state.sample.repeatLength > 2) {
                    this.state.samplePosition = this.state.sample.repeatOffset + (nextPosition - sampleEnd);
                }
                else {
                    this.state.sampleHasEnded = true;
                }
            }
        }
    }
    ;
}
;


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

/***/ "./src/players/Protracker/effects.ts":
/*!*******************************************!*\
  !*** ./src/players/Protracker/effects.ts ***!
  \*******************************************/
/*! exports provided: isTonePortamento, onRowEnd, onRowStart, onTickStart, setOscillatorWaveform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTonePortamento", function() { return isTonePortamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRowEnd", function() { return onRowEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRowStart", function() { return onRowStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTickStart", function() { return onTickStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOscillatorWaveform", function() { return setOscillatorWaveform; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/players/Protracker/constants.ts");


function isTonePortamento(effect) {
    if (!effect)
        return false;
    const code = effect.code === 14 ? `${effect.code}-${effect.px}` : `${effect.code}`;
    return code === _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TONE_PORTAMENTO || code === _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_TONE_PORTAMENTO;
}
function onRowEnd(player, state, channel) {
    const effectCode = channel.getEffect();
    if (!effectCode)
        return;
    const code = effectCode.code === 14 ? `${effectCode.code}-${effectCode.px}` : `${effectCode.code}`;
    const tremolo = channel.getTremolo();
    const vibrato = channel.getVibrato();
    switch (code) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VIBRATO:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_VIBRATO:
            if (vibrato.getRetrigger() === false) {
                vibrato.incrementOffset();
            }
            channel.setPeriod(vibrato.getOriginalValue());
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TREMOLO:
            if (tremolo.getRetrigger() === false) {
                tremolo.incrementOffset();
            }
            channel.setVolume(tremolo.getOriginalValue());
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].POSITION_JUMP:
            player.setPatternSequenceIndex(effectCode.p, true);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_BREAK:
            player.nextPattern() || player.setPatternSequenceIndex(player.getSongLoopIndex());
            player.setRowIndex((10 * effectCode.px) + effectCode.py);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_PORTAMENTO_UP:
            channel.setPeriod(channel.getPeriod() - effectCode.py);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_PORTAMENTO_DOWN:
            channel.setPeriod(channel.getPeriod() + effectCode.py);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_LOOP:
            if (effectCode.py === 0) {
                player.setPatternLoopRowIndex(player.getPlaybackState().currentRowIndex);
            }
            else {
                const loopCount = player.getPatternLoopCount() - 1;
                player.setPatternLoopCount(loopCount);
                if (loopCount < 0) {
                    player.setPatternLoopCount(effectCode.py);
                }
                if (loopCount > 0) {
                    player.setRowIndex(player.getPatternLoopRowIndex());
                }
            }
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_VOLUME_SLIDE_UP:
            channel.setVolume(Math.min(channel.getVolume() + effectCode.py, 64));
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].FINE_VOLUME_SLIDE_DOWN:
            channel.setVolume(Math.max(channel.getVolume() - effectCode.py, 0));
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PATTERN_DELAY:
            player.setPatternDelay(effectCode.py * player.state.speed);
            break;
    }
}
function onRowStart(player, state, channel) {
    const effectCode = channel.getEffect();
    if (!effectCode)
        return;
    const code = effectCode.code === 14 ? `${effectCode.code}-${effectCode.px}` : `${effectCode.code}`;
    const tremolo = channel.getTremolo();
    const vibrato = channel.getVibrato();
    switch (code) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VIBRATO:
            vibrato.setOriginalValue(channel.getPeriod());
            vibrato.setAmplitude(effectCode.py * 2);
            vibrato.setOscillationsPerRow((effectCode.px * (state.speed - 1)) / 64);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TREMOLO:
            tremolo.setOriginalValue(channel.getVolume());
            tremolo.setAmplitude(effectCode.py * 2);
            tremolo.setOscillationsPerRow((effectCode.px * (state.speed - 1)) / 64);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_SAMPLE_OFFSET:
            channel.setSamplePosition(256 * effectCode.p);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_VOLUME:
            channel.setVolume(effectCode.p);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_VIBRATO_WAVEFORM:
            if (effectCode.py > 7)
                break;
            setOscillatorWaveform(vibrato, effectCode.py);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_FINE_TUNE:
            const instruction = channel.getInstruction();
            if (instruction && instruction.period !== 0) {
                const newFineTune = effectCode.py < 8 ? effectCode.py : -16 + effectCode.py;
                channel.setFineTune(newFineTune);
            }
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_TREMOLO_WAVEFORM:
            if (effectCode.py > 7)
                break;
            setOscillatorWaveform(tremolo, effectCode.py);
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].SET_SPEED:
            if (effectCode.p > 31) {
                player.setTempo(effectCode.p);
            }
            else {
                player.setSpeed(effectCode.p);
            }
            break;
    }
}
function onTickStart(player, state, channel) {
    const effectCode = channel.getEffect();
    if (!effectCode)
        return;
    const instruction = channel.getInstruction();
    const code = effectCode.code === 14 ? `${effectCode.code}-${effectCode.px}` : `${effectCode.code}`;
    const tremolo = channel.getTremolo();
    const vibrato = channel.getVibrato();
    // Codes that trigger on every tick except the first
    if (state.currentTick > 0) {
        switch (code) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PORTAMENTO_UP:
                channel.setPeriod(channel.getPeriod() - effectCode.p);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].PORTAMENTO_DOWN:
                channel.setPeriod(channel.getPeriod() + effectCode.p);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE:
            case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_TONE_PORTAMENTO:
            case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_VIBRATO:
                channel.setVolume(Math.max(Math.min(channel.getVolume() + effectCode.px - effectCode.py, 64), 0));
                break;
        }
    }
    // Codes that trigger on every tick
    switch (code) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].ARPEGGIO:
            if (state.currentTick % 3 === 0) {
                channel.resetPeriod();
                break;
            }
            if (state.currentTick % 3 === 1) {
                channel.setPeriod(channel.getFineTunedPeriod() / Math.pow(2, effectCode.px / 12));
                break;
            }
            if (state.currentTick % 3 === 2) {
                channel.setPeriod(channel.getFineTunedPeriod() / Math.pow(2, effectCode.py / 12));
                break;
            }
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TONE_PORTAMENTO:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_TONE_PORTAMENTO:
            if (code === _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TONE_PORTAMENTO && state.currentTick === 0) {
                if (effectCode.p > 0)
                    channel.setSlideRate(effectCode.p);
                if (instruction && instruction.period)
                    channel.setSlideTarget(instruction.period);
            }
            if (channel.getPeriod() > channel.getSlideTarget()) {
                channel.setPeriod(Math.max(channel.getPeriod() - channel.getSlideRate(), channel.getSlideTarget()));
            }
            else if (channel.getPeriod() < channel.getSlideTarget()) {
                channel.setPeriod(Math.min(channel.getPeriod() + channel.getSlideRate(), channel.getSlideTarget()));
            }
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VIBRATO:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].VOLUME_SLIDE_VIBRATO:
            channel.setPeriod(vibrato.getValue(player.getRowPosition()));
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].TREMOLO:
            channel.setVolume(tremolo.getValue(player.getRowPosition()));
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].RETRIGGER_NOTE:
            if (state.currentTick % effectCode.py === 0) {
                channel.setSamplePosition(0);
            }
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].NOTE_CUT:
            if (state.currentTick === effectCode.py) {
                channel.setVolume(0);
            }
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["EFFECT_CODES"].NOTE_DELAY:
            if (state.currentTick < effectCode.py) {
                channel.setSampleAsEnded();
            }
            if (state.currentTick === effectCode.py) {
                channel.resetSample();
            }
            break;
    }
}
;
function setOscillatorWaveform(oscillator, param) {
    const typeCode = param >= 4 ? param - 4 : param;
    const retrigger = param < 4;
    const generator = _constants__WEBPACK_IMPORTED_MODULE_0__["WAVE_TYPES"][typeCode];
    oscillator.setWaveGenerator(generator);
    oscillator.setRetrigger(retrigger);
}
;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: createAudioContext, loadFile, loadFileFromDisk, loadFileFromUrl, pickRandom, randomInt, read8bitInt, readBigEndian16bitInt, readStringFromArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFileFromDisk", function() { return loadFileFromDisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFileFromUrl", function() { return loadFileFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRandom", function() { return pickRandom; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9QbGF5ZXIvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvUHJvdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL1Byb3RyYWNrZXJBdWRpb1dvcmtsZXRQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcnMvUHJvdHJhY2tlci9Qcm90cmFja2VyQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL1Byb3RyYWNrZXJPc2NpbGxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvUHJvdHJhY2tlclJlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVycy9Qcm90cmFja2VyL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5Qyxp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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbGF5ZXJzL1Byb3RyYWNrZXIvUHJvdHJhY2tlckF1ZGlvV29ya2xldFByb2Nlc3Nvci50c1wiKTtcbiIsImV4cG9ydCBlbnVtIFBsYXllclN0YXR1cyB7XG4gICAgU1RPUFBFRCA9ICdTVE9QUEVEJyxcbiAgICBQQVVTRUQgPSAnUEFVU0VEJyxcbiAgICBQTEFZSU5HID0gJ1BMQVlJTkcnLFxuICAgIEVSUk9SID0gJ0VSUk9SJyxcbn1cbiIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQbGF5ZXIge1xuICAgIGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xuICAgIHN0YXR1czogY29uc3RhbnRzLlBsYXllclN0YXR1cyA9IGNvbnN0YW50cy5QbGF5ZXJTdGF0dXMuU1RPUFBFRDtcblxuICAgIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICAgIH1cblxuICAgIGFic3RyYWN0IGdldFBsYXliYWNrU3RhdHVzKCk6IGNvbnN0YW50cy5QbGF5ZXJTdGF0dXM7XG4gICAgYWJzdHJhY3QgaGFzU3VidHJhY2tzKCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgcGF1c2UoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwbGF5KCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcHJldmlvdXNTdWJ0cmFjaygpOiBib29sZWFuO1xuICAgIGFic3RyYWN0IG5leHRTdWJ0cmFjaygpOiBib29sZWFuO1xuICAgIGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2V0U3VidHJhY2soaW5kZXg6IG51bWJlcik6IGJvb2xlYW47XG4gICAgYWJzdHJhY3Qgc2tpcFRvUG9zaXRpb24obmV3UG9zaXRpb246IG51bWJlcik6IGJvb2xlYW47XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBjb25zdGFudHMuUGxheWVyU3RhdHVzLlNUT1BQRUQ7XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgKiBhcyBwcm90cmFja2VyQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGFwcENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBJbnN0cnVjdGlvbiB9IGZyb20gJy4vbW9kZWxzL0luc3RydWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTYW1wbGUgfSBmcm9tICcuL21vZGVscy9TYW1wbGUuaW50ZXJmYWNlJztcblxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyL1BsYXllclwiO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gXCIuL1Byb3RyYWNrZXJDaGFubmVsXCI7XG5pbXBvcnQgKiBhcyByZWFkZXIgZnJvbSBcIi4vUHJvdHJhY2tlclJlYWRlclwiO1xuaW1wb3J0ICogYXMgZWZmZWN0cyBmcm9tICcuL2VmZmVjdHMnO1xuXG4vLyBpbXBvcnQgeyBtZXJnZUNoYW5uZWxzVG9PdXRwdXQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFNvbmcgPSB7XG4gICAgY2hhbm5lbENvdW50OiAgICBudW1iZXI7XG4gICAgcGF0dGVybkNvdW50OiAgICBudW1iZXI7XG4gICAgcGF0dGVybnM6ICAgICAgICBJbnN0cnVjdGlvbltdW11bXTtcbiAgICBwYXR0ZXJuU2VxdWVuY2U6IG51bWJlcltdO1xuICAgIHJvd3NQZXJQYXR0ZXJuOiAgbnVtYmVyLFxuICAgIHNhbXBsZXM6ICAgICAgICAgU2FtcGxlW107XG4gICAgc2lnbmF0dXJlOiAgICAgICBzdHJpbmc7XG4gICAgc29uZ0xlbmd0aDogICAgICBudW1iZXI7XG4gICAgc29uZ0xvb3A6ICAgICAgICBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgdGl0bGU6ICAgICAgICAgICBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcbiAgICBjdXJyZW50QnVmZmVyU2FtcGxlUG9zaXRpb246IG51bWJlcixcbiAgICBjdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXg6IG51bWJlcixcbiAgICBjdXJyZW50Um93SW5kZXg6ICAgICAgICAgICAgIG51bWJlcixcbiAgICBjdXJyZW50U3VidHJhY2s6ICAgICAgICAgICAgIG51bWJlcixcbiAgICBjdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uOiAgIG51bWJlcixcbiAgICBjdXJyZW50VGljazogICAgICAgICAgICAgICAgIG51bWJlcixcbiAgICBwYXR0ZXJuRGVsYXk6ICAgICAgICAgICAgICAgIG51bWJlcjsgLy8gSW4gdGlja3NcbiAgICBwYXR0ZXJuTG9vcENvdW50OiAgICAgICAgICAgIG51bWJlcixcbiAgICBwYXR0ZXJuTG9vcFJvd0luZGV4OiAgICAgICAgIG51bWJlcixcbiAgICByb3dzUGVyQmVhdDogICAgICAgICAgICAgICAgIG51bWJlcixcbiAgICBzYW1wbGVzUGVyVGljazogICAgICAgICAgICAgIG51bWJlciwgLy8gMjUwMC9icG1cbiAgICBzcGVlZDogICAgICAgICAgICAgICAgICAgICAgIG51bWJlciwgLy8gQS5LLkEgdGlja3MtcGVyLXJvd1xuICAgIHRlbXBvOiAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyLCAvLyBBLksuQSBiZWF0cy1wZXItbWludWUgKEJQTSkuXG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uOiAwLFxuICAgIGN1cnJlbnRQYXR0ZXJuU2VxdWVuY2VJbmRleDogMCxcbiAgICBjdXJyZW50Um93SW5kZXg6ICAgICAgICAgICAgIDAsXG4gICAgY3VycmVudFN1YnRyYWNrOiAgICAgICAgICAgICAwLFxuICAgIGN1cnJlbnRUaWNrU2FtcGxlUG9zaXRpb246ICAgMCxcbiAgICBjdXJyZW50VGljazogICAgICAgICAgICAgICAgIDAsXG4gICAgcGF0dGVybkRlbGF5OiAgICAgICAgICAgICAgICAtMSxcbiAgICBwYXR0ZXJuTG9vcENvdW50OiAgICAgICAgICAgIDAsXG4gICAgcGF0dGVybkxvb3BSb3dJbmRleDogICAgICAgICAwLFxuICAgIHJvd3NQZXJCZWF0OiAgICAgICAgICAgICAgICAgNCxcbiAgICBzYW1wbGVzUGVyVGljazogICAgICAgICAgICAgIDAsXG4gICAgc3BlZWQ6ICAgICAgICAgICAgICAgICAgICAgICA2LFxuICAgIHRlbXBvOiAgICAgICAgICAgICAgICAgICAgICAgMTI1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdHJhY2tlciBleHRlbmRzIFBsYXllciB7XG4gICAgYW1pZ2FDbG9ja1NwZWVkICAgICA6IG51bWJlciAgICAgICAgICAgICAgICA9IHByb3RyYWNrZXJDb25zdGFudHMuQU1JR0FfQ0xPQ0tfU1BFRURfUEFMO1xuICAgIGNoYW5uZWxzICAgICAgICAgICAgOiBQcm90cmFja2VyQ2hhbm5lbFtdICAgPSBbXTtcbiAgICBzb25nICAgICAgICAgICAgICAgIDogU29uZztcbiAgICBzdGF0ZSAgICAgICAgICAgICAgIDogU3RhdGUgICAgICAgICAgICAgICAgID0gey4uLmRlZmF1bHRTdGF0ZX07XG5cbiAgICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCwgZmlsZURhdGE6IEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgcmVhZC1vbmx5IHByb3BlcnRpZXMgb2YgdGhlIHNvbmcgZnJvbSB0aGUgZmlsZVxuICAgICAgICB0aGlzLnNvbmcgPSB7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQ6ICAgIHJlYWRlci5nZXRDaGFubmVsQ291bnQoZmlsZURhdGEpLFxuICAgICAgICAgICAgcGF0dGVybkNvdW50OiAgICByZWFkZXIuZ2V0UGF0dGVybkNvdW50KGZpbGVEYXRhKSxcbiAgICAgICAgICAgIHBhdHRlcm5zOiAgICAgICAgcmVhZGVyLmdldFBhdHRlcm5zKGZpbGVEYXRhKSxcbiAgICAgICAgICAgIHBhdHRlcm5TZXF1ZW5jZTogcmVhZGVyLmdldFBhdHRlcm5TZXF1ZW5jZShmaWxlRGF0YSksXG4gICAgICAgICAgICByb3dzUGVyUGF0dGVybjogIHJlYWRlci5nZXRSb3dzUGVyUGF0dGVybihmaWxlRGF0YSksXG4gICAgICAgICAgICBzYW1wbGVzOiAgICAgICAgIHJlYWRlci5nZXRTYW1wbGVzKGZpbGVEYXRhLCB0cnVlKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogICAgICAgcmVhZGVyLmdldFNpZ25hdHVyZShmaWxlRGF0YSksXG4gICAgICAgICAgICBzb25nTGVuZ3RoOiAgICAgIHJlYWRlci5nZXRVc2VkUGF0dGVyblNlcXVlbmNlTGVuZ3RoKGZpbGVEYXRhKSxcbiAgICAgICAgICAgIHNvbmdMb29wOiAgICAgICAgcmVhZGVyLmdldFNvbmdMb29wUGF0dGVyblNlcXVlbmNlSW5kZXgoZmlsZURhdGEpLFxuICAgICAgICAgICAgdGl0bGU6ICAgICAgICAgICByZWFkZXIuZ2V0VGl0bGUoZmlsZURhdGEpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldHVwQ2hhbm5lbHModGhpcy5zb25nLmNoYW5uZWxDb3VudCk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlc1BlclRpY2sgPSB0aGlzLl9jYWxjdWxhdGVTYW1wbGVzUGVyVGljaygpO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogICAgIFB1YmxpYyBmdW5jdGlvbnMgICAgICpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIGdldENoYW5uZWxzKCk6IFByb3RyYWNrZXJDaGFubmVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscztcbiAgICB9O1xuXG4gICAgZ2V0UGF0dGVybkRlbGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdHRlcm5EZWxheTtcbiAgICB9XG5cbiAgICBnZXRQYXR0ZXJuTG9vcENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdHRlcm5Mb29wQ291bnQ7XG4gICAgfVxuXG4gICAgZ2V0UGF0dGVybkxvb3BSb3dJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXR0ZXJuTG9vcFJvd0luZGV4O1xuICAgIH1cblxuICAgIGdldFBsYXliYWNrU3RhdGUoKTogU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICAgIH07XG5cbiAgICBnZXRQbGF5YmFja1N0YXR1cygpOiBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH07XG5cbiAgICBnZXRSb3dQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjdXJyZW50U2FtcGxlcyA9ICh0aGlzLnN0YXRlLmN1cnJlbnRUaWNrICogdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljaykgKyB0aGlzLnN0YXRlLmN1cnJlbnRUaWNrU2FtcGxlUG9zaXRpb247XG4gICAgICAgIHJldHVybiBjdXJyZW50U2FtcGxlcyAvICh0aGlzLnN0YXRlLnNwZWVkICogdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljayk7XG4gICAgfVxuXG4gICAgZ2V0U29uZygpOiBTb25nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uZztcbiAgICB9O1xuXG4gICAgZ2V0U29uZ0xvb3BJbmRleCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zb25nLnNvbmdMb29wO1xuICAgIH1cblxuICAgIGhhc1N1YnRyYWNrcygpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1YnRyYWNrIHN1cHBvcnRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBuZXh0UGF0dGVybigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXggKyAxKTtcbiAgICB9O1xuXG4gICAgbmV4dFJvdygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Um93SW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50Um93SW5kZXggKyAxKSB8fCB0aGlzLm5leHRQYXR0ZXJuKCk7XG4gICAgfTtcblxuICAgIG5leHRTdWJ0cmFjaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3VidHJhY2sodGhpcy5zdGF0ZS5jdXJyZW50U3VidHJhY2sgKyAxKTtcbiAgICB9O1xuXG4gICAgbmV4dFRpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5jdXJyZW50VGljayArIDEpIHx8IHRoaXMubmV4dFJvdygpO1xuICAgIH07XG5cbiAgICBwYXVzZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09IGFwcENvbnN0YW50cy5QbGF5ZXJTdGF0dXMuUExBWUlORykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzLlBBVVNFRDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBhcHBDb25zdGFudHMuUGxheWVyU3RhdHVzLlBMQVlJTkc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1BhdHRlcm4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4IC0gMSk7XG4gICAgfTtcblxuICAgIHByZXZpb3VzUm93KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZighdGhpcy5zZXRSb3dJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnRSb3dJbmRleCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91c1BhdHRlcm4oKSAmJiB0aGlzLnNldFJvd0luZGV4KHRoaXMuc29uZy5yb3dzUGVyUGF0dGVybiAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1N1YnRyYWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJ0cmFjayh0aGlzLnN0YXRlLmN1cnJlbnRTdWJ0cmFjayAtIDEpO1xuICAgIH07XG5cbiAgICBwcmV2aW91c1RpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKCF0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5jdXJyZW50VGljayAtIDEpKSB7XG4gICAgICAgICAgICBpZih0aGlzLnByZXZpb3VzUm93KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5zcGVlZCAtIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Li4uZGVmYXVsdFN0YXRlLCBjdXJyZW50U3VidHJhY2s6IHRoaXMuc3RhdGUuY3VycmVudFN1YnRyYWNrfVxuICAgICAgICB0aGlzLmNoYW5uZWxzLmZvckVhY2goY2hhbm5lbCA9PiBjaGFubmVsLnJlc2V0KCkpO1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrID0gdGhpcy5fY2FsY3VsYXRlU2FtcGxlc1BlclRpY2soKTtcbiAgICB9O1xuXG4gICAgc2V0QW1pZ2FDbG9ja1NwZWVkKGNsb2NrU3BlZWQ6IHByb3RyYWNrZXJDb25zdGFudHMuQU1JR0FfQ0xPQ0tfU1BFRUQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbWlnYUNsb2NrU3BlZWQgPSBjbG9ja1NwZWVkO1xuICAgIH07XG5cbiAgICBzZXRQYXR0ZXJuRGVsYXkodGlja3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnBhdHRlcm5EZWxheSA9IHRpY2tzO1xuICAgIH1cblxuICAgIHNldFBhdHRlcm5Mb29wQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnBhdHRlcm5Mb29wQ291bnQgPSBjb3VudDtcbiAgICB9XG5cbiAgICBzZXRQYXR0ZXJuTG9vcFJvd0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXR0ZXJuTG9vcFJvd0luZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgoaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCwgemVyb09uRmFpbDogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuc29uZy5wYXR0ZXJuU2VxdWVuY2VbaW5kZXhdICE9PSAndW5kZWZpbmVkJyAmJiBpbmRleCA8PSB0aGlzLnNvbmcuc29uZ0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFJvd0luZGV4KDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoemVyb09uRmFpbCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZXRSb3dJbmRleCgwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2V0Um93SW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLl9nZXRDdXJyZW50UGF0dGVybigpW2luZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Um93SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0UGF0dGVybkxvb3BSb3dJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGljaygwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2V0U3BlZWQoc3BlZWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXRlLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxuXG4gICAgc2V0U3VidHJhY2soaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VidHJhY2sgc3VwcG9ydFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHNldFRlbXBvKHRlbXBvOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS50ZW1wbyA9IHRlbXBvO1xuICAgICAgICB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrID0gdGhpcy5fY2FsY3VsYXRlU2FtcGxlc1BlclRpY2soKTtcbiAgICB9XG5cbiAgICBzZXRUaWNrKHRpY2s6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aWNrIDwgdGhpcy5zdGF0ZS5zcGVlZCAmJiB0aWNrID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFRpY2sgPSB0aWNrO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2tpcFRvUG9zaXRpb24obmV3UG9zaXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqICAgICBFdmVudCBmdW5jdGlvbnMgICAgICpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgb25BdWRpb1Byb2Nlc3MoY2hhbm5lbEJ1ZmZlcnM6IEZsb2F0MzJBcnJheVtdKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdGlsbE1vcmVUb1BsYXkgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5faXNEZWxheWVkKCkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2lzU3RhcnRvZlJvdygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzaWduSW5zdHJ1Y3Rpb25zVG9DaGFubmVscyh0aGlzLl9nZXRDdXJyZW50Um93KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NFZmZlY3RzKGVmZmVjdHMub25Sb3dTdGFydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2lzU3RhcnRPZlRpY2soKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NFZmZlY3RzKGVmZmVjdHMub25UaWNrU3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsbEJ1ZmZlcnMoY2hhbm5lbEJ1ZmZlcnMpO1xuXG4gICAgICAgIGlmICghdGhpcy5faXNEZWxheWVkKCkgJiYgdGhpcy5faXNFbmRPZlJvdygpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzRWZmZWN0cyhlZmZlY3RzLm9uUm93RW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2lzRW5kT2ZUaWNrKCkpIHtcbiAgICAgICAgICAgIHN0aWxsTW9yZVRvUGxheSA9IHRoaXMuX2dvVG9OZXh0UG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHN0aWxsTW9yZVRvUGxheSkge1xuICAgICAgICAgICAgaWYoIXRoaXMuX2lzQnVmZmVyRnVsbChjaGFubmVsQnVmZmVyc1swXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgc3RpbGxNb3JlVG9QbGF5ID0gdGhpcy5vbkF1ZGlvUHJvY2VzcyhjaGFubmVsQnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RpbGxNb3JlVG9QbGF5O1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqICAgICBQcml2YXRlIGZ1bmN0aW9ucyAgICAgKlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHByaXZhdGUgX2Fzc2lnbkluc3RydWN0aW9uc1RvQ2hhbm5lbHMocm93OiBJbnN0cnVjdGlvbltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RydWN0aW9uID0gcm93W2luZGV4XTtcblxuICAgICAgICAgICAgY2hhbm5lbC5zZXRJbnN0cnVjdGlvbihpbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICAgIGlmKGluc3RydWN0aW9uLnNhbXBsZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gQSBzYW1wbGVJbmRleCBvZiAwIG1lYW5zIG5vIHNhbXBsZSBzcGVjaWZpZWQsIHdoaWNoIG1lYW5zIHRoYXRcbiAgICAgICAgICAgICAgICAvLyBFZmZlY3RpdmVseSwgdGhlIHNhbXBsZXMgY29taW5nIGZyb20gdGhlIGluc3RydWN0aW9ucyBhcmUgMS1iYXNlZC5cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGhhbmRsZSB0aGlzIGFzIHRoZSBzYW1wbGUgYXJyYXkgaXMgMC1iYXNlZC5cbiAgICAgICAgICAgICAgICBjaGFubmVsLnNldFNhbXBsZSh0aGlzLnNvbmcuc2FtcGxlc1tpbnN0cnVjdGlvbi5zYW1wbGVJbmRleCAtIDFdKTtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnJlc2V0Vm9sdW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGluc3RydWN0aW9uLnBlcmlvZCAmJiAoIWVmZmVjdHMuaXNUb25lUG9ydGFtZW50byhpbnN0cnVjdGlvbi5lZmZlY3QpKSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwucmVzZXRGaW5lVHVuZSgpO1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0T3JpZ2luYWxQZXJpb2QoaW5zdHJ1Y3Rpb24ucGVyaW9kKTtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnJlc2V0U2FtcGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZU51bWJlck9mU2FtcGxlc1RvR2VuZXJhdGUoYnVmZmVyU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVzUGVyVGljayAtIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbixcbiAgICAgICAgICAgIGJ1ZmZlclNpemUgLSB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvblxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVTYW1wbGVzUGVyVGljaygpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0aWNrRHVyYXRpb25NcyA9ICgyNTAwIC8gdGhpcy5zdGF0ZS50ZW1wbyk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUgKiAodGlja0R1cmF0aW9uTXMgLyAxMDAwKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlsbEJ1ZmZlcnMoY2hhbm5lbEJ1ZmZlcnM6IEZsb2F0MzJBcnJheVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNhbXBsZXNUb0dlbmVyYXRlID0gdGhpcy5fY2FsY3VsYXRlTnVtYmVyT2ZTYW1wbGVzVG9HZW5lcmF0ZShjaGFubmVsQnVmZmVyc1swXS5sZW5ndGgpO1xuXG4gICAgICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNoYW5uZWwuZmlsbEJ1ZmZlcihjaGFubmVsQnVmZmVyc1tpbmRleF0sIHRoaXMuc3RhdGUuY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uLCBzYW1wbGVzVG9HZW5lcmF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiArIHNhbXBsZXNUb0dlbmVyYXRlO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUuY3VycmVudEJ1ZmZlclNhbXBsZVBvc2l0aW9uICsgc2FtcGxlc1RvR2VuZXJhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q3VycmVudFBhdHRlcm4oKTogSW5zdHJ1Y3Rpb25bXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uZy5wYXR0ZXJuc1t0aGlzLnNvbmcucGF0dGVyblNlcXVlbmNlW3RoaXMuc3RhdGUuY3VycmVudFBhdHRlcm5TZXF1ZW5jZUluZGV4XV07XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2dldEN1cnJlbnRSb3coKTogSW5zdHJ1Y3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDdXJyZW50UGF0dGVybigpW3RoaXMuc3RhdGUuY3VycmVudFJvd0luZGV4XTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfZ29Ub05leHRQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbjtcblxuICAgICAgICBpZih0aGlzLl9pc0RlbGF5ZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmdldFBhdHRlcm5EZWxheSgpIC0gMTtcbiAgICAgICAgICAgIHRoaXMuc2V0UGF0dGVybkRlbGF5KGRlbGF5KTtcbiAgICAgICAgICAgIGlmKGRlbGF5ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFRpY2tTYW1wbGVQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0UG9zaXRpb24gPSAoXG4gICAgICAgICAgICB0aGlzLnNldFRpY2sodGhpcy5zdGF0ZS5jdXJyZW50VGljayArIDEpIHx8XG4gICAgICAgICAgICB0aGlzLnNldFJvd0luZGV4KHRoaXMuc3RhdGUuY3VycmVudFJvd0luZGV4ICsgMSkgfHxcbiAgICAgICAgICAgIHRoaXMuc2V0UGF0dGVyblNlcXVlbmNlSW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50UGF0dGVyblNlcXVlbmNlSW5kZXggKyAxKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIHdhcyBubyBuZXh0IHBvc2l0aW9uIHRvIGFkdmFuY2UgdG8sIGF0dGVtcHQgdG8gbG9vcFxuICAgICAgICBpZighbmV4dFBvc2l0aW9uICYmIHRoaXMuc29uZy5zb25nTG9vcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQYXR0ZXJuU2VxdWVuY2VJbmRleCh0aGlzLnNvbmcuc29uZ0xvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIF9pc0J1ZmZlckZ1bGwoYnVmZmVyU2l6ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRCdWZmZXJTYW1wbGVQb3NpdGlvbiA9PT0gYnVmZmVyU2l6ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0RlbGF5ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuZE9mUm93KCkgJiYgdGhpcy5nZXRQYXR0ZXJuRGVsYXkoKSA+PSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRW5kT2ZSb3coKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRUaWNrID09PSB0aGlzLnN0YXRlLnNwZWVkIC0gMSAmJiB0aGlzLl9pc0VuZE9mVGljaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRW5kT2ZUaWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID09PSB0aGlzLnN0YXRlLnNhbXBsZXNQZXJUaWNrO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU3RhcnRvZlJvdygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudFRpY2sgPT09IDAgJiYgdGhpcy5zdGF0ZS5jdXJyZW50VGlja1NhbXBsZVBvc2l0aW9uID09PSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU3RhcnRPZlRpY2soKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRUaWNrU2FtcGxlUG9zaXRpb24gPT09IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc0VmZmVjdHMoZWZmZWN0UHJvY2Vzc29yOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5uZWxzLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFubmVsRWZmZWN0ID0gY2hhbm5lbC5nZXRFZmZlY3QoKTtcbiAgICAgICAgICAgIGlmKGNoYW5uZWxFZmZlY3QpIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RQcm9jZXNzb3IodGhpcywgdGhpcy5zdGF0ZSwgY2hhbm5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldHVwQ2hhbm5lbHMoY2hhbm5lbENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFubmVscy5sZW5ndGggPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxjaGFubmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5wdXNoKG5ldyBQcm90cmFja2VyQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlLCB0aGlzLmFtaWdhQ2xvY2tTcGVlZCkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImludGVyZmFjZSBBdWRpb1dvcmtsZXRQcm9jZXNzb3Ige1xuICAgIHJlYWRvbmx5IHBvcnQ6IE1lc3NhZ2VQb3J0O1xuICAgIHByb2Nlc3MoXG4gICAgICBpbnB1dHM6IEZsb2F0MzJBcnJheVtdW10sXG4gICAgICBvdXRwdXRzOiBGbG9hdDMyQXJyYXlbXVtdLFxuICAgICAgcGFyYW1ldGVyczogUmVjb3JkPHN0cmluZywgRmxvYXQzMkFycmF5PlxuICAgICk6IGJvb2xlYW47XG59XG5cbmRlY2xhcmUgdmFyIEF1ZGlvV29ya2xldFByb2Nlc3Nvcjoge1xuICAgIHByb3RvdHlwZTogQXVkaW9Xb3JrbGV0UHJvY2Vzc29yO1xuICAgIG5ldyAob3B0aW9ucz86IEF1ZGlvV29ya2xldE5vZGVPcHRpb25zKTogQXVkaW9Xb3JrbGV0UHJvY2Vzc29yO1xufTtcblxuZGVjbGFyZSBmdW5jdGlvbiByZWdpc3RlclByb2Nlc3NvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcHJvY2Vzc29yQ3RvcjogKG5ldyAoXG4gICAgICBvcHRpb25zPzogQXVkaW9Xb3JrbGV0Tm9kZU9wdGlvbnNcbiAgICApID0+IEF1ZGlvV29ya2xldFByb2Nlc3NvcikgJiB7XG4gICAgICBwYXJhbWV0ZXJEZXNjcmlwdG9ycz86IEF1ZGlvUGFyYW1EZXNjcmlwdG9yW107XG4gICAgfVxuKTogdm9pZDtcblxuXG5cblxuaW1wb3J0IFByb3RyYWNrZXIgZnJvbSAnLi9Qcm90cmFja2VyJztcblxuY2xhc3MgUHJvdHJhY2tlckF1ZGlvV29ya2xldFByb2Nlc3NvciBleHRlbmRzIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7XG4gICAgZmlsZURhdGE6IEFycmF5QnVmZmVyO1xuICAgIHBsYXllcjogUHJvdHJhY2tlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQXVkaW9Xb3JrbGV0Tm9kZU9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLmZpbGVEYXRhID0gY29uZmlnLnByb2Nlc3Nvck9wdGlvbnMuZmlsZURhdGE7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFByb3RyYWNrZXIoKChnbG9iYWxUaGlzIGFzIHVua25vd24pIGFzIEF1ZGlvQ29udGV4dCkgLyogaGFjayAqLywgdGhpcy5maWxlRGF0YSk7XG4gICAgICAgIHRoaXMucG9ydC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZTtcbiAgICB9XG5cbiAgICBwcm9jZXNzIChpbnB1dHM6RmxvYXQzMkFycmF5W11bXSwgb3V0cHV0czpGbG9hdDMyQXJyYXlbXVtdLCBwYXJhbWV0ZXJzOlJlY29yZDxzdHJpbmcsIEZsb2F0MzJBcnJheT4pIHtcbiAgICAgICAgY29uc3Qgbm90RmluaXNoZWQgPSB0aGlzLnBsYXllci5vbkF1ZGlvUHJvY2VzcyhvdXRwdXRzLm1hcChvdXRwdXQgPT4gb3V0cHV0WzBdKSk7XG5cbiAgICAgICAgaWYoIW5vdEZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UoeyBtZXNzYWdlOiAnZW5kZWQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdEZpbmlzaGVkO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHN3aXRjaChldmVudC5kYXRhLmNtZCkge1xuICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF1c2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdG9wJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnZXRJbmZvJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc29uZ0luZm8nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wbGF5ZXIuZ2V0U29uZygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5yZWdpc3RlclByb2Nlc3NvcigncHJvdHJhY2tlcicsIFByb3RyYWNrZXJBdWRpb1dvcmtsZXRQcm9jZXNzb3IpIC8qIGhhY2sgLSByZWdpc3RlclByb2Nlc3NvciBpcyBnbG9iYWwgdG8gQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHNjb3BlICovIiwiaW1wb3J0IHsgRWZmZWN0Q29kZSB9IGZyb20gJy4vbW9kZWxzL0VmZmVjdENvZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluc3RydWN0aW9uIH0gZnJvbSAnLi9tb2RlbHMvSW5zdHJ1Y3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFNhbXBsZSB9IGZyb20gJy4vbW9kZWxzL1NhbXBsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IFByb3RyYWNrZXJPc2NpbGxhdG9yIGZyb20gJy4vUHJvdHJhY2tlck9zY2lsbGF0b3InO1xuXG5leHBvcnQgdHlwZSBzdGF0ZSA9IHtcbiAgICBlZmZlY3Q6IEVmZmVjdENvZGUgfCB1bmRlZmluZWQsXG4gICAgZmluZVR1bmU6IG51bWJlcixcbiAgICBmcmVxdWVuY3k6IG51bWJlcixcbiAgICBpbnN0cnVjdGlvbjogSW5zdHJ1Y3Rpb24gfCB1bmRlZmluZWQsXG4gICAgb3JpZ2luYWxQZXJpb2Q6IG51bWJlcixcbiAgICBmaW5lVHVuZWRQZXJpb2Q6IG51bWJlcixcbiAgICBwZXJpb2Q6IG51bWJlcixcbiAgICBzYW1wbGU6IFNhbXBsZSB8IHVuZGVmaW5lZCxcbiAgICBzYW1wbGVIYXNFbmRlZDogYm9vbGVhbixcbiAgICBzYW1wbGVJbmNyZW1lbnQ6IG51bWJlcixcbiAgICBzYW1wbGVQb3NpdGlvbjogbnVtYmVyLFxuICAgIHNsaWRlUmF0ZTogbnVtYmVyLFxuICAgIHNsaWRlVGFyZ2V0OiBudW1iZXIsXG4gICAgdHJlbW9sbzogUHJvdHJhY2tlck9zY2lsbGF0b3IsXG4gICAgdmlicmF0bzogUHJvdHJhY2tlck9zY2lsbGF0b3IsXG4gICAgdm9sdW1lOiBudW1iZXJcbn1cblxuY29uc3QgZ2V0RGVmYXVsdFN0YXRlID0gKCk6c3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVmZmVjdDogdW5kZWZpbmVkLFxuICAgICAgICBmaW5lVHVuZTogMCxcbiAgICAgICAgZnJlcXVlbmN5OiAwLFxuICAgICAgICBpbnN0cnVjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBvcmlnaW5hbFBlcmlvZDogMCxcbiAgICAgICAgZmluZVR1bmVkUGVyaW9kOiAwLFxuICAgICAgICBwZXJpb2Q6IDAsXG4gICAgICAgIHNhbXBsZTogdW5kZWZpbmVkLFxuICAgICAgICBzYW1wbGVIYXNFbmRlZDogZmFsc2UsXG4gICAgICAgIHNhbXBsZUluY3JlbWVudDogMCxcbiAgICAgICAgc2FtcGxlUG9zaXRpb246IDAsXG4gICAgICAgIHNsaWRlUmF0ZTogMCxcbiAgICAgICAgc2xpZGVUYXJnZXQ6IDAsXG4gICAgICAgIHRyZW1vbG86IG5ldyBQcm90cmFja2VyT3NjaWxsYXRvcixcbiAgICAgICAgdmlicmF0bzogbmV3IFByb3RyYWNrZXJPc2NpbGxhdG9yLFxuICAgICAgICB2b2x1bWU6IDY0XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdHJhY2tlckNoYW5uZWwge1xuICAgIGFtaWdhQ2xvY2tTcGVlZDogbnVtYmVyO1xuICAgIGJ1ZmZlckZyZXF1ZW5jeTogbnVtYmVyO1xuICAgIHN0YXRlOiBzdGF0ZSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IoYnVmZmVyRnJlcXVlbmN5OiBudW1iZXIsIGFtaWdhQ2xvY2tTcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW1pZ2FDbG9ja1NwZWVkID0gYW1pZ2FDbG9ja1NwZWVkO1xuICAgICAgICB0aGlzLmJ1ZmZlckZyZXF1ZW5jeSA9IGJ1ZmZlckZyZXF1ZW5jeTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogICAgIFB1YmxpYyBmdW5jdGlvbnMgICAgICpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIGZpbGxCdWZmZXIoYnVmZmVyOiBGbG9hdDMyQXJyYXksIGJ1ZmZlclN0YXJ0OiBudW1iZXIsIHNhbXBsZXNUb0dlbmVyYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZW5kID0gTWF0aC5taW4oYnVmZmVyU3RhcnQgKyBzYW1wbGVzVG9HZW5lcmF0ZSwgYnVmZmVyLmxlbmd0aCk7XG4gICAgICAgIGxldCBpID0gYnVmZmVyU3RhcnQ7XG5cbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHNhbXBsZSB3ZSBuZWVkIHRvIGdlbmVyYXRlXG4gICAgICAgIGZvcihpOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgd2UgaGF2ZSBhIHNhbXBsZSBhc3NpZ25lZCBhbmQgdGhhdCB0aGUgc2FtcGxlIGhhc24ndCBlbmRlZFxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zYW1wbGUgIT09IG51bGwgJiYgIXRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSB0aGlzLl9nZXRTYW1wbGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlbWVudFNhbXBsZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldEVmZmVjdCgpOiBFZmZlY3RDb2RlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaW5zdHJ1Y3Rpb24gPyB0aGlzLnN0YXRlLmluc3RydWN0aW9uLmVmZmVjdCA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgZ2V0RmluZVR1bmUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZmluZVR1bmU7XG4gICAgfTtcblxuICAgIGdldEluc3RydWN0aW9uKCk6IEluc3RydWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaW5zdHJ1Y3Rpb247XG4gICAgfVxuXG4gICAgZ2V0T3JpZ2luYWxQZXJpb2QoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3JpZ2luYWxQZXJpb2Q7XG4gICAgfVxuXG4gICAgZ2V0RmluZVR1bmVkUGVyaW9kKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmZpbmVUdW5lZFBlcmlvZDtcbiAgICB9XG5cbiAgICBnZXRQZXJpb2QoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGVyaW9kO1xuICAgIH07XG5cbiAgICBnZXRTYW1wbGUoKTogU2FtcGxlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2FtcGxlO1xuICAgIH07XG5cbiAgICBnZXRTYW1wbGVQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTbGlkZVJhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2xpZGVSYXRlO1xuICAgIH1cblxuICAgIGdldFNsaWRlVGFyZ2V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNsaWRlVGFyZ2V0O1xuICAgIH1cblxuICAgIGdldFRyZW1vbG8oKTogUHJvdHJhY2tlck9zY2lsbGF0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50cmVtb2xvO1xuICAgIH1cblxuICAgIGdldFZpYnJhdG8oKTogUHJvdHJhY2tlck9zY2lsbGF0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52aWJyYXRvO1xuICAgIH1cblxuICAgIGdldFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52b2x1bWU7XG4gICAgfVxuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXREZWZhdWx0U3RhdGUoKTtcbiAgICB9O1xuXG4gICAgcmVzZXRGaW5lVHVuZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5maW5lVHVuZSA9IHRoaXMuc3RhdGUuc2FtcGxlID8gdGhpcy5zdGF0ZS5zYW1wbGUuZmluZVR1bmUgOiAwO1xuICAgIH1cblxuICAgIHJlc2V0UGVyaW9kKCkge1xuICAgICAgICB0aGlzLnNldFBlcmlvZCh0aGlzLnN0YXRlLmZpbmVUdW5lZFBlcmlvZCk7XG4gICAgfVxuXG4gICAgcmVzZXRTYW1wbGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVNhbXBsZUluY3JlbWVudCgpO1xuICAgIH1cblxuICAgIHJlc2V0Vm9sdW1lKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnZvbHVtZSA9IHRoaXMuc3RhdGUuc2FtcGxlID8gdGhpcy5zdGF0ZS5zYW1wbGUudm9sdW1lIDogNjQ7XG4gICAgfVxuXG4gICAgc2V0RmluZVR1bmUoZmluZVR1bmU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmZpbmVUdW5lID0gZmluZVR1bmU7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUZpbmVUdW5lZFBlcmlvZCgpO1xuICAgICAgICB0aGlzLnNldFBlcmlvZCh0aGlzLnN0YXRlLmZpbmVUdW5lZFBlcmlvZCk7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUZyZXF1ZW5jeSgpO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVTYW1wbGVJbmNyZW1lbnQoKTtcbiAgICB9O1xuXG4gICAgc2V0SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb246IEluc3RydWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgICB9XG5cbiAgICBzZXRPcmlnaW5hbFBlcmlvZChwZXJpb2Q6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm9yaWdpbmFsUGVyaW9kID0gcGVyaW9kO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVGaW5lVHVuZWRQZXJpb2QoKTtcbiAgICAgICAgdGhpcy5zZXRQZXJpb2QodGhpcy5zdGF0ZS5maW5lVHVuZWRQZXJpb2QpO1xuICAgIH1cblxuICAgIHNldFBlcmlvZChwZXJpb2Q6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLnBlcmlvZCA9IHBlcmlvZDtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlRnJlcXVlbmN5KCk7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVNhbXBsZUluY3JlbWVudCgpO1xuICAgIH07XG5cbiAgICBzZXRTYW1wbGUoc2FtcGxlOiBTYW1wbGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGUgPSBzYW1wbGU7XG4gICAgfTtcblxuICAgIHNldFNhbXBsZUFzRW5kZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldFNhbXBsZVBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHNldFNsaWRlUmF0ZShyYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZVJhdGUgPSByYXRlO1xuICAgIH1cblxuICAgIHNldFNsaWRlVGFyZ2V0KHRhcmdldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2xpZGVUYXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgc2V0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUudm9sdW1lID0gdm9sdW1lO1xuICAgIH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogICAgIFByaXZhdGUgZnVuY3Rpb25zICAgICAqXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgX2NhbGN1bGF0ZUZyZXF1ZW5jeSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcmVxdWVuY3kgPSB0aGlzLmFtaWdhQ2xvY2tTcGVlZCAvICh0aGlzLnN0YXRlLnBlcmlvZCAqIDIpO1xuICAgIH07XG5cbiAgICBfY2FsY3VsYXRlRmluZVR1bmVkUGVyaW9kKCkge1xuICAgICAgICBjb25zdCBmaW5lVHVuZSA9IHRoaXMuc3RhdGUuZmluZVR1bmUgfHwgMDtcbiAgICAgICAgbGV0IHBlcmlvZCA9IHRoaXMuc3RhdGUub3JpZ2luYWxQZXJpb2Q7XG5cbiAgICAgICAgaWYoZmluZVR1bmUgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChmaW5lVHVuZSA+IDApIHtcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSBwZXJpb2QgLyBNYXRoLnBvdygyLCBNYXRoLmFicyhmaW5lVHVuZSkgLyAoOCAqIDEyKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmlvZCA9IHBlcmlvZCAqIE1hdGgucG93KDIsIE1hdGguYWJzKGZpbmVUdW5lKSAvICg4ICogMTIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5maW5lVHVuZWRQZXJpb2QgPSBwZXJpb2Q7XG4gICAgfVxuXG4gICAgX2NhbGN1bGF0ZVNhbXBsZUluY3JlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVJbmNyZW1lbnQgPSB0aGlzLnN0YXRlLmZyZXF1ZW5jeSAvIHRoaXMuYnVmZmVyRnJlcXVlbmN5O1xuICAgIH07XG5cbiAgICBfZ2V0U2FtcGxlVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zYW1wbGUgJiYgIXRoaXMuc3RhdGUuc2FtcGxlSGFzRW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWN0aW9uT2ZOZXh0U2FtcGxlID0gdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiAlIDE7XG4gICAgICAgICAgICBjb25zdCBsb3dlclNhbXBsZSA9IHRoaXMuc3RhdGUuc2FtcGxlLmF1ZGlvW01hdGguZmxvb3IodGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbildO1xuICAgICAgICAgICAgY29uc3QgdXBwZXJTYW1wbGUgPSB0aGlzLnN0YXRlLnNhbXBsZS5hdWRpb1tNYXRoLmNlaWwodGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbildO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHVwcGVyU2FtcGxlIC0gbG93ZXJTYW1wbGU7XG5cbiAgICAgICAgICAgIHJldHVybiAobG93ZXJTYW1wbGUgKyAoZnJhY3Rpb25PZk5leHRTYW1wbGUgKiBkaWZmKSkgKiAodGhpcy5zdGF0ZS52b2x1bWUgLyA2NCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfaW5jcmVtZW50U2FtcGxlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2FtcGxlICYmICF0aGlzLnN0YXRlLnNhbXBsZUhhc0VuZGVkKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiArIHRoaXMuc3RhdGUuc2FtcGxlSW5jcmVtZW50O1xuICAgICAgICAgICAgbGV0IHNhbXBsZUVuZDogbnVtYmVyO1xuXG4gICAgICAgICAgICAvLyBUaGUgZW5kIG9mIHRoZSBzYW1wbGUgaXMgZGlmZmVyZW50IGRlcGVuZGluZyBvbiBpZiB0aGUgc2FtcGxlIGlzIG5vdyBsb29waW5nIG9yIG5vdFxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zYW1wbGUucmVwZWF0TGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHNhbXBsZUVuZCA9IHRoaXMuc3RhdGUuc2FtcGxlLnJlcGVhdE9mZnNldCArIHRoaXMuc3RhdGUuc2FtcGxlLnJlcGVhdExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNhbXBsZUVuZCA9IHRoaXMuc3RhdGUuc2FtcGxlLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHNhbXBsZSBwb3NpdGlvblxuICAgICAgICAgICAgaWYobmV4dFBvc2l0aW9uIDwgc2FtcGxlRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiA9IG5leHRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2FtcGxlLnJlcGVhdExlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVQb3NpdGlvbiA9IHRoaXMuc3RhdGUuc2FtcGxlLnJlcGVhdE9mZnNldCArIChuZXh0UG9zaXRpb24gLSBzYW1wbGVFbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1wbGVIYXNFbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBPc2NpbGxhdG9yIH0gZnJvbSAnLi9tb2RlbHMvT3NjaWxsYXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgV2F2ZUdlbmVyYXRvciB9IGZyb20gJy4vbW9kZWxzL1dhdmVHZW5lcmF0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFdhdmVUeXBlIH0gZnJvbSAnLi9tb2RlbHMvV2F2ZVR5cGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IHBpY2tSYW5kb20gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RyYWNrZXJPc2NpbGxhdG9yIGltcGxlbWVudHMgT3NjaWxsYXRvciB7XG4gICAgYW1wbGl0dWRlOiBudW1iZXIgPSAxO1xuICAgIG9mZnNldDogbnVtYmVyID0gMDtcbiAgICBvcmlnaW5hbFZhbHVlOiBudW1iZXIgPSAwO1xuICAgIG9zY2lsbGF0aW9uc1BlclJvdzogbnVtYmVyID0gMTtcbiAgICByZXRyaWdnZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB3YXZlR2VuZXJhdG9yOiBXYXZlR2VuZXJhdG9yID0gZ2VuZXJhdGVTaW5lV2F2ZTtcblxuICAgIGdldEFtcGxpdHVkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1wbGl0dWRlO1xuICAgIH1cblxuICAgIGdldE9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIGdldE9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0T3NjaWxsYXRpb25zUGVyUm93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vc2NpbGxhdGlvbnNQZXJSb3c7XG4gICAgfVxuXG4gICAgZ2V0UmV0cmlnZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyaWdnZXI7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUocm93UG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsVmFsdWUgKyB0aGlzLndhdmVHZW5lcmF0b3Iocm93UG9zaXRpb24sIHRoaXMub2Zmc2V0LCB0aGlzLm9zY2lsbGF0aW9uc1BlclJvdywgdGhpcy5hbXBsaXR1ZGUpO1xuICAgIH1cblxuICAgIGdldFdhdmVHZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhdmVHZW5lcmF0b3I7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50T2Zmc2V0KCkge1xuICAgICAgICB0aGlzLm9mZnNldCA9ICh0aGlzLm9mZnNldCArIHRoaXMub3NjaWxsYXRpb25zUGVyUm93KSAlIDE7XG4gICAgfVxuXG4gICAgc2V0QW1wbGl0dWRlKGFtcGxpdHVkZTogbnVtYmVyKSB7XG4gICAgICAgIGlmKGFtcGxpdHVkZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW1wbGl0dWRlID0gYW1wbGl0dWRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T2Zmc2V0KG9mZnNldDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cblxuICAgIHNldE9yaWdpbmFsVmFsdWUocGVyaW9kOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFZhbHVlID0gcGVyaW9kO1xuICAgIH1cblxuICAgIHNldE9zY2lsbGF0aW9uc1BlclJvdyhvc2NpbGxhdGlvbnNQZXJSb3c6IG51bWJlcikge1xuICAgICAgICBpZihvc2NpbGxhdGlvbnNQZXJSb3cgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9zY2lsbGF0aW9uc1BlclJvdyA9IG9zY2lsbGF0aW9uc1BlclJvdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFJldHJpZ2dlcihyZXRyaWdnZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5yZXRyaWdnZXIgPSByZXRyaWdnZXI7XG4gICAgfVxuXG4gICAgc2V0V2F2ZUdlbmVyYXRvcih0eXBlOiBXYXZlVHlwZSkge1xuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmFuZG9tJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFdhdmVHZW5lcmF0b3IocGlja1JhbmRvbSgnc2F3dG9vdGgnLCAnc2luZScsICdzcXVhcmUnKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzYXd0b290aCc6XG4gICAgICAgICAgICAgICAgdGhpcy53YXZlR2VuZXJhdG9yID0gZ2VuZXJhdGVTYXd0b290aFdhdmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzaW5lJzpcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVHZW5lcmF0b3IgPSBnZW5lcmF0ZVNpbmVXYXZlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVHZW5lcmF0b3IgPSBnZW5lcmF0ZVNxdWFyZVdhdmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNhd3Rvb3RoV2F2ZSA6IFdhdmVHZW5lcmF0b3IgPSAocm93UG9zaXRpb24sIG9mZnNldCA9IDAsIG9zY2lsbGF0aW9uc1BlclJvdyA9IDEsIGFtcGxpdHVkZSA9IDEpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICgocm93UG9zaXRpb24gKiBvc2NpbGxhdGlvbnNQZXJSb3cpICsgb2Zmc2V0KSAlIDE7XG4gICAgcmV0dXJuICgxIC0gcG9zaXRpb24pICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTaW5lV2F2ZSA6IFdhdmVHZW5lcmF0b3IgPSAocm93UG9zaXRpb24sIG9mZnNldCA9IDAsIG9zY2lsbGF0aW9uc1BlclJvdyA9IDEsIGFtcGxpdHVkZSA9IDEpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKChyb3dQb3NpdGlvbiAqIG9zY2lsbGF0aW9uc1BlclJvdykgKyBvZmZzZXQpICogMiAqIE1hdGguUEkgKSAqIGFtcGxpdHVkZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU3F1YXJlV2F2ZSA6IFdhdmVHZW5lcmF0b3IgPSAocm93UG9zaXRpb24sIG9mZnNldCA9IDAsIG9zY2lsbGF0aW9uc1BlclJvdyA9IDEsIGFtcGxpdHVkZSA9IDEpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9ICgocm93UG9zaXRpb24gKiBvc2NpbGxhdGlvbnNQZXJSb3cpICsgb2Zmc2V0KSAlIDE7XG4gICAgcmV0dXJuIChwb3NpdGlvbiA8IDAuNSA/IDEgOiAtMSkgKiBhbXBsaXR1ZGU7XG59XG4iLCJpbXBvcnQgeyBFZmZlY3RDb2RlIH0gZnJvbSAnLi9tb2RlbHMvRWZmZWN0Q29kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5zdHJ1Y3Rpb24gfSBmcm9tICcuL21vZGVscy9JbnN0cnVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2FtcGxlIH0gZnJvbSAnLi9tb2RlbHMvU2FtcGxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTYW1wbGVIZWFkZXIgfSBmcm9tICcuL21vZGVscy9TYW1wbGVIZWFkZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgIFB1YmxpYyBmdW5jdGlvbnMgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxDb3VudChmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGdldFNpZ25hdHVyZShmaWxlRGF0YSk7XG4gICAgbGV0IGNoYW5uZWxDb3VudDogbnVtYmVyID0gNDtcblxuICAgIHN3aXRjaChzaWduYXR1cmUpIHtcbiAgICAgICAgY2FzZSAnOENITic6XG4gICAgICAgIGNhc2UgJ0ZMVDgnOlxuICAgICAgICBjYXNlICdDRDgxJzpcbiAgICAgICAgY2FzZSAnT0tUQSc6XG4gICAgICAgIGNhc2UgJ09DVEEnOlxuICAgICAgICAgICAgY2hhbm5lbENvdW50ID0gODtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc2Q0hOJzpcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCA9IDY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMkNITic6XG4gICAgICAgICAgICBjaGFubmVsQ291bnQgPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZigvXlswLTldWzAtOV1DW0gsTl0kLy50ZXN0KHNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsQ291bnQgPSBwYXJzZUludChzaWduYXR1cmUuc3Vic3RyKDAsMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigvXlREWlswLTldJC8udGVzdChzaWduYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbENvdW50ID0gcGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKC9eWzU3OV1DSE4kLy50ZXN0KHNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsQ291bnQgPSBwYXJzZUludChzaWduYXR1cmUuc3Vic3RyKDAsMSkpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFubmVsQ291bnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0RGVzY3JpcHRpb24oZmlsZURhdGE6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBnZXRTaWduYXR1cmUoZmlsZURhdGEpO1xuICAgIGxldCB0eXBlOiBzdHJpbmcgPSBjb25zdGFudHMuVU5LTk9XTl9GT1JNQVQ7XG5cbiAgICBzd2l0Y2goc2lnbmF0dXJlKSB7XG4gICAgICAgIGNhc2UgJ00uSy4nOlxuICAgICAgICAgICAgdHlwZSA9ICdQcm9UcmFja2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNIUshJzpcbiAgICAgICAgY2FzZSAnTSZLISc6XG4gICAgICAgICAgICB0eXBlID0gJ1Byb1RyYWNrZXIgKGV4dGVuZGVkIHBhdHRlcm5zKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnNkNITic6XG4gICAgICAgICAgICB0eXBlID0gJ1Byb1RyYWNrZXIgKDYgY2hhbm5lbHMpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc4Q0hOJzpcbiAgICAgICAgICAgIHR5cGUgPSAnUHJvVHJhY2tlciAoOCBjaGFubmVscyknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzJDSE4nOlxuICAgICAgICAgICAgdHlwZSA9ICdGYXN0VHJhY2tlciAoMiBjaGFubmVscyknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NEODEnOlxuICAgICAgICBjYXNlICdPS1RBJzpcbiAgICAgICAgICAgIHR5cGUgPSAnT2t0YWx5emVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPQ1RBJzpcbiAgICAgICAgICAgIHR5cGUgPSAnT2N0YW1lZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRkxUNCc6XG4gICAgICAgICAgICB0eXBlID0gJ1N0YXJUcmVra2VyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdGTFQ4JzpcbiAgICAgICAgICAgIHR5cGUgPSAnU3RhclRyZWtrZXIgKDggY2hhbm5lbHMpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYoL15bMC05XVswLTldQ0gkLy50ZXN0KHNpZ25hdHVyZSkpe1xuICAgICAgICAgICAgICAgIHR5cGUgPSBgRmFzdFRyYWNrZXIgKCR7cGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigwLDIpKX0gY2hhbm5lbHMpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKC9eWzAtOV1bMC05XUNOJC8udGVzdChzaWduYXR1cmUpKXtcbiAgICAgICAgICAgICAgICB0eXBlID0gYFRha2VUcmFja2VyICgke3BhcnNlSW50KHNpZ25hdHVyZS5zdWJzdHIoMCwyKSl9IGNoYW5uZWxzKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKC9eVERaWzAtOV0kLy50ZXN0KHNpZ25hdHVyZSkpe1xuICAgICAgICAgICAgICAgIHR5cGUgPSBgVGFrZVRyYWNrZXIgKCR7cGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigzKSl9IGNoYW5uZWxzKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKC9eWzU3OV1DSE4kLy50ZXN0KHNpZ25hdHVyZSkpe1xuICAgICAgICAgICAgICAgIHR5cGUgPSBgVGFrZVRyYWNrZXIgKCR7cGFyc2VJbnQoc2lnbmF0dXJlLnN1YnN0cigwLDEpKX0gY2hhbm5lbHMpYDtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbn07XG5cbi8qXG4gICAgUmV0dXJucyB0aGUgZGF0YSByZXF1aXJlZCB0byBjcmVhdGUgYSBuZXcgQXVkaW9Xb3JrbGV0Tm9kZVxuICAgIFRoaXMgYWxsb3dzIHRoZSBwcm90cmFja2VyIHBsYXliYWNrIGNvZGUgdG8gYmUgZXhlY3V0ZWQgaW4gaXRzIG93biB0aHJlYWRcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdE9wdGlvbnMoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogQXVkaW9Xb3JrbGV0Tm9kZU9wdGlvbnMge1xuICAgIGlmKCFpc0ZpbGVTdXBwb3J0ZWQoZmlsZURhdGEpKSB0aHJvdyBuZXcgRXJyb3I7XG4gICAgY29uc3Qgb3V0cHV0Q291bnQgPSBnZXRDaGFubmVsQ291bnQoZmlsZURhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbnVtYmVyT2ZPdXRwdXRzOiBvdXRwdXRDb3VudCxcbiAgICAgICAgb3V0cHV0Q2hhbm5lbENvdW50OiBbLi4ubmV3IEFycmF5KG91dHB1dENvdW50KV0ubWFwKGl0ZW0gPT4gMSksXG4gICAgICAgIHByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZpbGVEYXRhOiBmaWxlRGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgIFRoaXMgc2NhbnMgdGhyb3VnaCB0aGUgcGF0dGVybiBzZXF1ZW5jZSB0YWJsZSB0byBmaW5kIHRoZSBoaWdoZXN0IHBhdHRlcm4gaW5kZXguXG4gICAgVGhhdCBpcyB0aGUgbnVtYmVyIG9mIHBhdHRlcm5zIHVzZWQgYnkgdGhlIG1vZHVsZS5cblxuICAgIFRoZSBzb25nIG1heSBub3QgdXNlIGFsbCBvZiB0aGVzZSB0aG91Z2gsIGl0IG1heSBiZSB0aGF0IHNvbWUgcGF0dGVybnMgd2VyZSBlZGl0ZWQsXG4gICAgYnV0IG5ldmVyIGludGVuZGVkIHRvIGJlIHBsYXllZCAoaW1hZ2luZSBkZXZzIHdvcmtpbmcgdG8gYSBkZWFkbGluZSlcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0dGVybkNvdW50KGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IG51bWJlciB7XG4gICAgY29uc3QgcGF0dGVyblNlcXVlbmNlID0gZ2V0UGF0dGVyblNlcXVlbmNlKGZpbGVEYXRhKTtcblxuICAgIC8vIFBhdHRlcm4gY291bnQgaXMgdGhlIGxhcmdlc3QgcGF0dGVybiBpbmRleCArIDEgKGFzIHBhdHRlcm5zIGFyZSB6ZXJvLWluZGV4ZWQpXG4gICAgcmV0dXJuIHBhdHRlcm5TZXF1ZW5jZS5yZWR1Y2UoKGEsYikgPT4gTWF0aC5tYXgoYSxiKSkgKyAxO1xufTtcblxuLypcbiAgICBUaGlzIGxvYWRzIGFsbCBvZiB0aGUgcGF0dGVybiBkYXRhIGludG8gdGhlIHBhdHRlcm4gZGF0YSBhcnJheS5cbiAgICBUaGUgcGF0dGVybiBkYXRhIGFycmF5IGlzIHNwbGl0IHVwIGludG8gc2luZ2xlIGNoYW5uZWwgcm93cy5cbiAgICBTbyB0aGF0IG1lYW5zIHdlIGhhdmUgYSAzRCBhcnJheSAtIFtwYXR0ZXJuXVtjaGFubmVsXVtyb3dzXS5cblxuICAgIEkgc2hvdWxkIGFsc28gbWVudGlvbiB0aGUgc3RydWN0dXJlIG9mIGhvdyBhIGNoYW5uZWxzIHBhdHRlcm4gZGF0YVxuICAgIGlzIHNldCBvdXQuIEl0IGlzIGNvbXByaXNlZCBvZiAzMiBiaXRzICg0IGJ5dGVzKTpcblxuICAgICMxICAgICAgICAgICAjMiAgICAgICAgICAgICAgICAgICMzICAgICAgICAgIzRcbiAgICAwMDAwICAgICAgICAgMDAwMC0wMDAwMDAwMCAgICAgICAwMDAwICAgICAgIDAwMDAtMDAwMDAwMFxuXG4gICAgIzEgPSBmaXJzdCA0IGJpdHMgYXJlIHRoZSBVUFBFUiA0IGJpdHMgb2YgdGhlIHNhbXBsZSBudW1iZXJcbiAgICAjMiA9IDEyIGJpdHMsIHRoaXMgaXMgdGhlIG5vdGUgcGVyaW9kLlxuICAgICMzID0gNCBiaXRzLCB0aGlzIGlzIHRoZSBMT1dFUiA0IGJpdHMgb2YgdGhlIHNhbXBsZSBudW1iZXJcbiAgICAjNCA9IDEyIGJpdHMsIGVmZmVjdCBjb21tYW5kLiBDYW4gYmUgc3BsaXQgaW50byA0Yml0IGVmZmVjdCBjb21tYW5kIGFuZCA4Yml0IHBhcmFtZXRlci5cblxuICAgIFRoZSBwYXR0ZXJuIGRhdGEgaXMgc2V0IG91dCBhcyBhYm92ZSBpbiA0IGJ5dGUgY2h1bmtzIGluIHRoZSBmaWxlLlxuICAgIFRoZSByb3cgZGF0YSBmb3IgZWFjaCBjaGFubmVsIGlzIHN0b3JlZCBpbiBvcmRlciwgc28gdGhlIGZpbGUgaXMgbGlrZSBzbzpcblxuICAgIFtjaGFubmVsMHJvdzAtNGJ5dGVzXVtjaGFubmVsMXJvdzAtNGJ5dGVzXVtjaGFubmVsMnJvdzAtNGJ5dGVzXVtjaGFubmVsM3JvdzAtNGJ5dGVzXVxuICAgIFtjaGFubmVsMHJvdzEtNGJ5dGVzXVtjaGFubmVsMXJvdzEtNGJ5dGVzXVtjaGFubmVsMnJvdzEtNGJ5dGVzXVtjaGFubmVsM3JvdzEtNGJ5dGVzXVxuICAgIGV0Yy4uLlxuXG4gICAgSWYgdGhlIGZpbGUgaGFzIG1vcmUgdGhhbiA0IGNoYW5uZWxzLCBpdCBzaG91bGQganVzdCBmb2xsb3cgc3VpdCBhcyBhYm92ZSAoc28gaWYgdGhlcmVcbiAgICBhcmUgOCBjaGFubmVscywgaXQgd291bGQgYmUgW2NoMF1bY2gxXVtjaDJdW2NoM11bY2g0XVtjaDVdW2NoNl1bY2g3XSBhbmQgY2Fycnkgb24gbGlrZVxuICAgIHRoYXQgZm9yIDY0IHJvd3MpLiBUaGUgZXhjZXB0aW9uIGlzIGlmIHRoZSBzaWduYXR1cmUgRkxUOCwgd2hlcmUgaW5zdGVhZCBvZiBoYXZpbmdcbiAgICA4IGluc3RydWN0aW9ucyBwZXIgcm93LCBpdCBoYXMgNCBpbnN0cnVjdGlvbnMgcGVyIHJvdyBhbmQgdXNlcyB0d28gcGF0dGVybnMgd29ydGggb2ZcbiAgICByb3dzIHRvIGNyZWF0ZSBvbmUgOC1jaGFubmVsIHBhdHRlcm4uIEUuRyAtIHRoZSBmaXJzdCBwYXR0ZXJuIGhhcyBbY2gwXVtjaDFdW2NoMl1bY2gzXVxuICAgIGZvciA2NCByb3dzLCB0aGVuIHRoZSBuZXh0IHBhdHRlcm4gaGFzIFtjaDRdW2NoNV1bY2g2XVtjaDddIGZvciA2NCByb3dzLiBZb3UgdGhlbiBoYXZlXG4gICAgdG8gc3RpY2sgdGhlc2UgYmFjayB0b2dldGhlci5cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0dGVybnMoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogSW5zdHJ1Y3Rpb25bXVtdW10ge1xuICAgIGNvbnN0IGNoYW5uZWxDb3VudCA9IGdldENoYW5uZWxDb3VudChmaWxlRGF0YSk7XG4gICAgY29uc3QgcGF0dGVybnM6IEluc3RydWN0aW9uW11bXVtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSAyMCArICgzMCozMSkgKyAxICsgMSArIDEyOCArIDQ7XG4gICAgY29uc3QgcGF0dGVybkNvdW50ID0gZ2V0UGF0dGVybkNvdW50KGZpbGVEYXRhKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGZpbGVEYXRhKTtcblxuICAgIGxldCBpLCBqLCBrLCB0b3AsIGJvdHRvbTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBwYXR0ZXJuc1xuICAgIGZvcihpPTA7IGk8cGF0dGVybkNvdW50OyBpKyspIHtcbiAgICAgICAgcGF0dGVybnNbaV0gPSBbXTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcm93cyBpbiB0aGUgcGF0dGVyblxuICAgICAgICBmb3Ioaj0wOyBqPDY0OyBqKyspIHtcbiAgICAgICAgICAgIHBhdHRlcm5zW2ldW2pdID0gW107XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBjaGFubmVscyBpbiB0aGUgcm93XG4gICAgICAgICAgICBmb3Ioaz0wOyBrPGNoYW5uZWxDb3VudDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybnNbaV1bal1ba10gPSB7fSBhcyBJbnN0cnVjdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIFNhbXBsZSBudW1iZXJcbiAgICAgICAgICAgICAgICAvLyBXZSBzaGlmdCByaWdodCBieSA0IGJpdHMgYW5kIHRoZW4gbGVmdCBieSA0IGJpdHMgdG8gcmVtb3ZlIHRoZSBsb3dlciA0IGJpdHMuXG4gICAgICAgICAgICAgICAgdG9wID0gKHZpZXcuZ2V0VWludDgoc3RhcnQgKyAoaSo2NCpjaGFubmVsQ291bnQqNCkgKyAoaipjaGFubmVsQ291bnQqNCkgKyAoayo0KSkgPj4gNCkgPDwgNDtcbiAgICAgICAgICAgICAgICBib3R0b20gPSB2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkgKyAyKSA+PiA0O1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zW2ldW2pdW2tdLnNhbXBsZUluZGV4ID0gdG9wICsgYm90dG9tO1xuXG4gICAgICAgICAgICAgICAgLy8gcGVyaW9kIC0gcmVwcmVzZW50ZWQgYnkgYm90dG9tIDQgYml0cyBpbiB0aGUgZmlyc3QgYnl0ZSBhbmQgdGhlIHNlY29uZCBieXRlICgxMiBieXRlIG51bWJlcikuXG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHRoZSBsb3dlciA0IGJpdHMgYnkgdXNpbmcgdGhlIG1vZHVsdXMgb2YgMTYgKHJlbWFpbmRlciBvZiBkaXZpZGluZyBieSAxNikuXG4gICAgICAgICAgICAgICAgdG9wID0gKHZpZXcuZ2V0VWludDgoc3RhcnQgKyAoaSo2NCpjaGFubmVsQ291bnQqNCkgKyAoaipjaGFubmVsQ291bnQqNCkgKyAoayo0KSkgJSAxNikgPDwgODtcbiAgICAgICAgICAgICAgICBib3R0b20gPSB2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkgKyAxKTtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuc1tpXVtqXVtrXS5wZXJpb2QgPSB0b3AgKyBib3R0b207XG5cbiAgICAgICAgICAgICAgICAvLyBFZmZlY3QgLSBnZXQgdGhlIGxvd2VyIDQgYml0cyBvZiBieXRlIDMgYnkgdXNpbmcgbW9kdWx1cyAxNi5cbiAgICAgICAgICAgICAgICB0b3AgPSB2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkgKyAyKSAlIDE2O1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9ICB2aWV3LmdldFVpbnQ4KHN0YXJ0ICsgKGkqNjQqY2hhbm5lbENvdW50KjQpICsgKGoqY2hhbm5lbENvdW50KjQpICsgKGsqNCkgKyAzKTtcbiAgICAgICAgICAgICAgICBpZih0b3AgPiAwIHx8IGJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybnNbaV1bal1ba10uZWZmZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgcDogICAgYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6ICAgKGJvdHRvbSA+PiA0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB5OiAgIChib3R0b20gJSAxNilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0dGVyblNlcXVlbmNlKGZpbGVEYXRhOiBBcnJheUJ1ZmZlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBwYXR0ZXJuU2VxdWVuY2VEYXRhID0gZmlsZURhdGEuc2xpY2UoOTUyLCAxMDgwKTtcblxuICAgIGxldCBpO1xuICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgIGxldCBwYXR0ZXJuU2VxdWVuY2U6IG51bWJlcltdID0gW107XG5cbiAgICAvLyBDb252ZXJ0IHBhdHRlcm4gc2VxdWVuY2UgYnl0ZXMgdG8gYW4gaW50ZWdlciBhcnJheSAodGhleSBhcmUgYmlnIGVuZGlhbiBpbiB0aGUgZmlsZSlcbiAgICBmb3IoaT0wOyBpPDEyODsgaSsrKSB7XG4gICAgICAgIHBhdHRlcm5TZXF1ZW5jZVtpXSA9IHV0aWxzLnJlYWQ4Yml0SW50KHBhdHRlcm5TZXF1ZW5jZURhdGEsIGkpO1xuICAgIH07XG5cbiAgICAvLyBGaW5kIG91dCB3aGVyZSB0aGUgbGFzdCBwYXR0ZXJuIGluZGV4IGlzICh0aGUgc2VxdWVuY2UgaXMgemVyby1wYWRkZWQpXG4gICAgZm9yKGk9cGF0dGVyblNlcXVlbmNlLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgaWYocGF0dGVyblNlcXVlbmNlW2ldICE9PSAwKSB7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcGF0dGVybiBzZXF1ZW5jZSwgdHJpbW1pbmcgb2ZmIHplcm8tcGFkZGluZ1xuICAgIHJldHVybiBwYXR0ZXJuU2VxdWVuY2Uuc2xpY2UoMCwgbGFzdEluZGV4ICsgMSlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3dzUGVyUGF0dGVybihmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGdldFNpZ25hdHVyZShmaWxlRGF0YSk7XG5cbiAgICBzd2l0Y2goc2lnbmF0dXJlKSB7XG4gICAgICAgIGNhc2UgJ00hSyEnOlxuICAgICAgICAgICAgcmV0dXJuIDEyODtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA2NDtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FtcGxlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMzE7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FtcGxlcyhmaWxlRGF0YTogQXJyYXlCdWZmZXIsIGFkZEV4dHJhRW5kU2FtcGxlOiBib29sZWFuID0gZmFsc2UpOiBTYW1wbGVbXSB7XG4gICAgY29uc3QgY2hhbm5lbENvdW50ID0gZ2V0Q2hhbm5lbENvdW50KGZpbGVEYXRhKTtcbiAgICBjb25zdCBwYXR0ZXJuQ291bnQgPSBnZXRQYXR0ZXJuQ291bnQoZmlsZURhdGEpO1xuICAgIGNvbnN0IHNhbXBsZXM6IFNhbXBsZVtdID0gW107XG5cbiAgICBsZXQgYXVkaW87XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGhlYWRlcjtcbiAgICBsZXQgaGVhZGVyRGF0YVN0YXJ0T2Zmc2V0ID0gMjA7XG4gICAgbGV0IHNhbXBsZUF1ZGlvU3RhcnRPZmZzZXQgPSAyMCArICgzMCozMSkgKyAxICsgMSArIDEyOCArIDQgKyAocGF0dGVybkNvdW50ICogNjQgKiBjaGFubmVsQ291bnQgKiA0KTtcbiAgICBsZXQgc2FtcGxlSGVhZGVyRGF0YTtcbiAgICBsZXQgaTtcblxuICAgIC8vIFJ1biB0aHJvdWdoIGFuZCBleHRyYWN0IGhlYWRlciBhbmQgYXVkaW8gZGF0YSBmb3IgYWxsIHNhbXBsZXNcbiAgICBmb3IoaT0wOyBpPDMxOyBpKyspIHtcbiAgICAgICAgLy8gRWFjaCBoZWFkZXIgaXMgMzAgYnl0ZXMsIGV4dHJhY3QgdGhlbSwgdGhlbiBkZWNvZGUuIEluY3JlbWVudCBzdGFydCBvZmZzZXQgcG9zaXRpb24gYnkgMzAgZm9yIG5leHQgcmVhZC5cbiAgICAgICAgc2FtcGxlSGVhZGVyRGF0YSA9IGZpbGVEYXRhLnNsaWNlKGhlYWRlckRhdGFTdGFydE9mZnNldCwgaGVhZGVyRGF0YVN0YXJ0T2Zmc2V0ICsgMzApO1xuICAgICAgICBoZWFkZXIgPSBfZ2V0U2FtcGxlSGVhZGVyKHNhbXBsZUhlYWRlckRhdGEpO1xuICAgICAgICBoZWFkZXJEYXRhU3RhcnRPZmZzZXQgPSBoZWFkZXJEYXRhU3RhcnRPZmZzZXQgKyAzMDtcblxuICAgICAgICAvLyBFeHRyYWN0IGF1ZGlvIGRhdGEgLSB0aGUgbGVuZ3RoIG9mIHRoZSBzYW1wbGUgY29tZXMgZnJvbSB0aGUgaGVhZGVyXG4gICAgICAgIGRhdGEgPSBmaWxlRGF0YS5zbGljZShzYW1wbGVBdWRpb1N0YXJ0T2Zmc2V0LCBzYW1wbGVBdWRpb1N0YXJ0T2Zmc2V0ICsgaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIGF1ZGlvID0gX2dldFNhbXBsZUF1ZGlvKGRhdGEsIGFkZEV4dHJhRW5kU2FtcGxlKTtcbiAgICAgICAgc2FtcGxlQXVkaW9TdGFydE9mZnNldCA9IHNhbXBsZUF1ZGlvU3RhcnRPZmZzZXQgKyBoZWFkZXIubGVuZ3RoO1xuXG4gICAgICAgIC8vIENvbmNhdGVuYXRlIGFuZCBhZGQgdG8gc2FtcGxlcyBhcnJheVxuICAgICAgICBzYW1wbGVzW2ldID0ge1xuICAgICAgICAgICAgLi4uaGVhZGVyLFxuICAgICAgICAgICAgYXVkaW9cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2FtcGxlcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaWduYXR1cmUoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBoZWFkZXJTdGFydCA9IDIwICsgKDMwKjMxKSArIDEgKyAxICsgMTI4O1xuICAgIHJldHVybiB1dGlscy5yZWFkU3RyaW5nRnJvbUFycmF5QnVmZmVyKGZpbGVEYXRhLCBoZWFkZXJTdGFydCwgaGVhZGVyU3RhcnQgKyA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvbmdMb29wUGF0dGVyblNlcXVlbmNlSW5kZXgoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBzdGFydCA9IDIwICsgKDMwKjMxKSArIDE7XG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5yZWFkOGJpdEludChmaWxlRGF0YSwgc3RhcnQpXG5cbiAgICAvLyBJZiB2YWx1ZSA8IDEyNywgaXQgc2lnbmlmaWVzIGxvb3AgaW5kZXguIE90aGVyd2lzZSwgdGhlcmUgaXMgbm8gbG9vcCAocmV0dXJuIHVuZGVmaW5lZCkuXG4gICAgLy8gcmV0dXJuICh2YWx1ZSA8IDEyNykgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIE9kZGx5LCBpdCBzZWVtcyB5b3Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gMCBmb3IgdGhpcy4uLj9cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaXRsZShmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB1dGlscy5yZWFkU3RyaW5nRnJvbUFycmF5QnVmZmVyKGZpbGVEYXRhLCAwLCAyMCkucmVwbGFjZSgvXFx1MDAwMC9nLCAnICcpLnRyaW0oKTtcbn07XG5cbi8qXG4gICAgVGhpcyBmaWd1cmUgaXMgdGhlIG51bWJlciBvZiBwYXR0ZXJuIHNlcXVlbmNlIHBvc2l0aW9ucyB1c2VkIGJ5IHRoZSBzb25nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZWRQYXR0ZXJuU2VxdWVuY2VMZW5ndGgoZmlsZURhdGE6IEFycmF5QnVmZmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdGFydCA9IDIwICsgKDMwKjMxKTtcbiAgICByZXR1cm4gdXRpbHMucmVhZDhiaXRJbnQoZmlsZURhdGEsIHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlsZVN1cHBvcnRlZChmaWxlRGF0YTogQXJyYXlCdWZmZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0Rm9ybWF0RGVzY3JpcHRpb24oZmlsZURhdGEpICE9PSBjb25zdGFudHMuVU5LTk9XTl9GT1JNQVQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgICAgUHJpdmF0ZSBmdW5jdGlvbnMgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypcbiAgICBWYWx1ZTogICAgMCAgIDEgICAyICAgMyAgIDQgICA1ICAgNiAgIDcgICA4ICAgOSAgIEEgICBCICAgQyAgIEQgICBFICAgRlxuICAgIEZpbmV0dW5lOiAwICArMSAgKzIgICszICArNCAgKzUgICs2ICArNyAgLTggIC03ICAtNiAgLTUgIC00ICAtMyAgLTIgIC0xXG4qL1xuZnVuY3Rpb24gX2dldEZpbmVUdW5lVmFsdWUocmF3SW50ZWdlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZihyYXdJbnRlZ2VyID49IDgpICB7XG4gICAgICAgIHJldHVybiAtMTYgKyByYXdJbnRlZ2VyXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmF3SW50ZWdlcjtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBfZ2V0U2FtcGxlQXVkaW8oc2FtcGxlRGF0YTogQXJyYXlCdWZmZXIsIGFkZEV4dHJhRW5kU2FtcGxlOiBib29sZWFuID0gZmFsc2UpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IGZsb2F0MzJTYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheShzYW1wbGVEYXRhLmJ5dGVMZW5ndGggKyAoYWRkRXh0cmFFbmRTYW1wbGUgPyAxIDogMCkpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoc2FtcGxlRGF0YSk7XG5cbiAgICBsZXQgaTtcblxuICAgIC8vIFJ1biB0aHJvdWdoIHNhbXBsZXMgYW5kIGNvbnZlcnQgZnJvbSBzaWduZWQgOC1iaXQgaW50IHRvIHNpZ25lZCBmbG9hdDMyXG4gICAgZm9yKGk9MDsgaTxzYW1wbGVEYXRhLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBmbG9hdDMyU2FtcGxlc1tpXSA9IHZpZXcuZ2V0SW50OChpKSAvIDEyOC4wMDtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIHJlYWxseSBjb25mdXNpbmcuIEltYWdpbmUgeW91IGhhdmUgYSBzYW1wbGUgOCBieXRlcyBsb25nLiBZb3UgY2FuIHNldCB0aGUgbG9vcCBsZW5ndGggdG8gYmUgOCxcbiAgICAvLyB3aGljaCB5b3UgY2FuIGltYWdlIGFzICdhIGxvb3AgbGVuZ3RoIG9mIDggd2F2ZSBzZWN0aW9ucycuIEhvd2V2ZXIsIHlvdSBhY3R1YWxseSBuZWVkIDkgc2FtcGxlcyB0byBiZVxuICAgIC8vIGFibGUgdG8gbG9vcCA4IHdhdmUgc2VjdGlvbnMuIFNvLCB0byBzb3J0IHRoaXMsIHdlIGZ1ZGdlIGl0IGJ5IGR1cGxpY2F0aW5nIHRoZSBsYXN0IHNhbXBsZS4gWW91IGNhbiBjaGVja1xuICAgIC8vIG1pbGt5dHJhY2tlciBvbiB0aGlzLCBpdCBkb2VzIHRoZSBzYW1lLiBJZiB5b3UgZG9uJ3QgZG8gdGhpcywgdmVyeSBzaG9ydCBsb29waW5nIHNhbXBsZXMgd2lsbCBzb3VuZCBub3RpY2FibHlcbiAgICAvLyBoaWdoZXIgcGl0Y2hlZC5cbiAgICBpZihhZGRFeHRyYUVuZFNhbXBsZSkge1xuICAgICAgICBpZihhZGRFeHRyYUVuZFNhbXBsZSkge1xuICAgICAgICAgICAgZmxvYXQzMlNhbXBsZXNbaV0gPSBmbG9hdDMyU2FtcGxlc1tpIC0gMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmxvYXQzMlNhbXBsZXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0U2FtcGxlSGVhZGVyKHNhbXBsZUhlYWRlckRhdGE6IEFycmF5QnVmZmVyKTogU2FtcGxlSGVhZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAgICAgICAgIHV0aWxzLnJlYWRTdHJpbmdGcm9tQXJyYXlCdWZmZXIoc2FtcGxlSGVhZGVyRGF0YSwgMCwgMjIpLFxuICAgICAgICBsZW5ndGg6ICAgICAgIHV0aWxzLnJlYWRCaWdFbmRpYW4xNmJpdEludChzYW1wbGVIZWFkZXJEYXRhLCAyMikgKiAyLFxuICAgICAgICBmaW5lVHVuZTogICAgIF9nZXRGaW5lVHVuZVZhbHVlKHV0aWxzLnJlYWQ4Yml0SW50KHNhbXBsZUhlYWRlckRhdGEsIDI0KSksXG4gICAgICAgIHZvbHVtZTogICAgICAgTWF0aC5taW4odXRpbHMucmVhZDhiaXRJbnQoc2FtcGxlSGVhZGVyRGF0YSwgMjUpLCA2NCksXG4gICAgICAgIHJlcGVhdE9mZnNldDogdXRpbHMucmVhZEJpZ0VuZGlhbjE2Yml0SW50KHNhbXBsZUhlYWRlckRhdGEsIDI2KSAqIDIsXG4gICAgICAgIHJlcGVhdExlbmd0aDogdXRpbHMucmVhZEJpZ0VuZGlhbjE2Yml0SW50KHNhbXBsZUhlYWRlckRhdGEsIDI4KSAqIDJcbiAgICB9XG59O1xuXG5cbiIsImltcG9ydCB7IFdhdmVUeXBlIH0gZnJvbSBcIi4vbW9kZWxzL1dhdmVUeXBlLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgQU1JR0FfQ0xPQ0tfU1BFRURfTlRTQyA9IDcxNTkwOTAuNTtcbmV4cG9ydCBjb25zdCBBTUlHQV9DTE9DS19TUEVFRF9QQUwgPSA3MDkzNzg5LjI7XG5cbmV4cG9ydCBlbnVtIEFNSUdBX0NMT0NLX1NQRUVEIHtcbiAgICBOVFNDID0gQU1JR0FfQ0xPQ0tfU1BFRURfTlRTQyxcbiAgICBQQUwgID0gQU1JR0FfQ0xPQ0tfU1BFRURfUEFMXG59XG5cbmV4cG9ydCBjb25zdCBFRkZFQ1RfQ09ERVMgPSB7XG4gICAgQVJQRUdHSU86ICAgICAgICAgICAgICAgICAgICAgJzAnLCAgICAgICAgICAgLy8g4oiaXG4gICAgUE9SVEFNRU5UT19VUDogICAgICAgICAgICAgICAgJzEnLCAgICAgICAgICAgLy8g4oiaXG4gICAgUE9SVEFNRU5UT19ET1dOOiAgICAgICAgICAgICAgJzInLCAgICAgICAgICAgLy8g4oiaXG4gICAgVE9ORV9QT1JUQU1FTlRPOiAgICAgICAgICAgICAgJzMnLCAgICAgICAgICAgLy8g4oiaXG4gICAgVklCUkFUTzogICAgICAgICAgICAgICAgICAgICAgJzQnLCAgICAgICAgICAgLy8g4oiaXG4gICAgVk9MVU1FX1NMSURFX1RPTkVfUE9SVEFNRU5UTzogJzUnLCAgICAgICAgICAgLy8g4oiaXG4gICAgVk9MVU1FX1NMSURFX1ZJQlJBVE86ICAgICAgICAgJzYnLCAgICAgICAgICAgLy8g4oiaXG4gICAgVFJFTU9MTzogICAgICAgICAgICAgICAgICAgICAgJzcnLCAgICAgICAgICAgLy8g4oiaXG4gICAgU0VUX1BBTk5JTkdfUE9TSVRJT046ICAgICAgICAgJzgnLFxuICAgIFNFVF9TQU1QTEVfT0ZGU0VUOiAgICAgICAgICAgICc5JywgICAgICAgICAgIC8vIOKImlxuICAgIFZPTFVNRV9TTElERTogICAgICAgICAgICAgICAgICcxMCcsICAgICAgICAgIC8vIOKImlxuICAgIFBPU0lUSU9OX0pVTVA6ICAgICAgICAgICAgICAgICcxMScsICAgICAgICAgIC8vIOKImlxuICAgIFNFVF9WT0xVTUU6ICAgICAgICAgICAgICAgICAgICcxMicsICAgICAgICAgIC8vIOKImlxuICAgIFBBVFRFUk5fQlJFQUs6ICAgICAgICAgICAgICAgICcxMycsICAgICAgICAgIC8vIOKImlxuICAgIFNFVF9GSUxURVI6ICAgICAgICAgICAgICAgICAgICcxNC0wJyxcbiAgICBGSU5FX1BPUlRBTUVOVE9fVVA6ICAgICAgICAgICAnMTQtMScsICAgICAgICAvLyDiiJpcbiAgICBGSU5FX1BPUlRBTUVOVE9fRE9XTjogICAgICAgICAnMTQtMicsICAgICAgICAvLyDiiJpcbiAgICBHTElTU0FORE86ICAgICAgICAgICAgICAgICAgICAnMTQtMycsXG4gICAgU0VUX1ZJQlJBVE9fV0FWRUZPUk06ICAgICAgICAgJzE0LTQnLCAgICAgICAgLy8g4oiaXG4gICAgU0VUX0ZJTkVfVFVORTogICAgICAgICAgICAgICAgJzE0LTUnLCAgICAgICAgLy8g4oiaXG4gICAgUEFUVEVSTl9MT09QOiAgICAgICAgICAgICAgICAgJzE0LTYnLCAgICAgICAgLy8g4oiaXG4gICAgU0VUX1RSRU1PTE9fV0FWRUZPUk06ICAgICAgICAgJzE0LTcnLCAgICAgICAgLy8g4oiaXG4gICAgLy8gVU5VU0VEOiAgICAgICAgICAgICAgICAgICAgJzE0LTgnXG4gICAgUkVUUklHR0VSX05PVEU6ICAgICAgICAgICAgICAgJzE0LTknLCAgICAgICAgLy8g4oiaXG4gICAgRklORV9WT0xVTUVfU0xJREVfVVA6ICAgICAgICAgJzE0LTEwJywgICAgICAgLy8g4oiaXG4gICAgRklORV9WT0xVTUVfU0xJREVfRE9XTjogICAgICAgJzE0LTExJywgICAgICAgLy8g4oiaXG4gICAgTk9URV9DVVQ6ICAgICAgICAgICAgICAgICAgICAgJzE0LTEyJywgICAgICAgLy8g4oiaXG4gICAgTk9URV9ERUxBWTogICAgICAgICAgICAgICAgICAgJzE0LTEzJywgICAgICAgLy8g4oiaXG4gICAgUEFUVEVSTl9ERUxBWTogICAgICAgICAgICAgICAgJzE0LTE0JywgICAgICAgLy8g4oiaXG4gICAgRlVOS1JFUEVBVDogICAgICAgICAgICAgICAgICAgJzE0LTE1JyxcbiAgICBTRVRfU1BFRUQ6ICAgICAgICAgICAgICAgICAgICAnMTUnLCAgICAgICAgICAvLyDiiJpcbn07XG5cbmV4cG9ydCBjb25zdCBXQVZFX1RZUEVTOiBXYXZlVHlwZVtdID0gWydzaW5lJywgJ3Nhd3Rvb3RoJywgJ3NxdWFyZScsICdyYW5kb20nXTsgLy8gRG8gbm90IHJlLW9yZGVyIVxuXG5leHBvcnQgY29uc3QgVU5LTk9XTl9GT1JNQVQgPSAnVW5rbm93biBmb3JtYXQnO1xuIiwiaW1wb3J0IHsgRUZGRUNUX0NPREVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgUHJvdHJhY2tlciBmcm9tICcuL1Byb3RyYWNrZXInO1xuaW1wb3J0IFByb3RyYWNrZXJDaGFubmVsIGZyb20gJy4vUHJvdHJhY2tlckNoYW5uZWwnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1Byb3RyYWNrZXInO1xuaW1wb3J0IHsgRWZmZWN0Q29kZSB9IGZyb20gJy4vbW9kZWxzL0VmZmVjdENvZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFdBVkVfVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgUHJvdHJhY2tlck9zY2lsbGF0b3IgZnJvbSAnLi9Qcm90cmFja2VyT3NjaWxsYXRvcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9uZVBvcnRhbWVudG8oZWZmZWN0OiBFZmZlY3RDb2RlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFlZmZlY3QpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBjb2RlID0gZWZmZWN0LmNvZGUgPT09IDE0ID8gYCR7ZWZmZWN0LmNvZGV9LSR7ZWZmZWN0LnB4fWAgOiBgJHtlZmZlY3QuY29kZX1gO1xuICAgIHJldHVybiBjb2RlID09PSBFRkZFQ1RfQ09ERVMuVE9ORV9QT1JUQU1FTlRPIHx8IGNvZGUgPT09IEVGRkVDVF9DT0RFUy5WT0xVTUVfU0xJREVfVE9ORV9QT1JUQU1FTlRPO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Sb3dFbmQocGxheWVyOiBQcm90cmFja2VyLCBzdGF0ZTogU3RhdGUsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSB7XG4gICAgY29uc3QgZWZmZWN0Q29kZSA9IGNoYW5uZWwuZ2V0RWZmZWN0KCk7XG4gICAgaWYoIWVmZmVjdENvZGUpIHJldHVybjtcblxuICAgIGNvbnN0IGNvZGUgPSBlZmZlY3RDb2RlLmNvZGUgPT09IDE0ID8gYCR7ZWZmZWN0Q29kZS5jb2RlfS0ke2VmZmVjdENvZGUucHh9YCA6IGAke2VmZmVjdENvZGUuY29kZX1gO1xuICAgIGNvbnN0IHRyZW1vbG8gPSBjaGFubmVsLmdldFRyZW1vbG8oKTtcbiAgICBjb25zdCB2aWJyYXRvID0gY2hhbm5lbC5nZXRWaWJyYXRvKCk7XG5cbiAgICBzd2l0Y2goY29kZSkge1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5WSUJSQVRPOlxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5WT0xVTUVfU0xJREVfVklCUkFUTzpcbiAgICAgICAgICAgIGlmKHZpYnJhdG8uZ2V0UmV0cmlnZ2VyKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmlicmF0by5pbmNyZW1lbnRPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKHZpYnJhdG8uZ2V0T3JpZ2luYWxWYWx1ZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlRSRU1PTE86XG4gICAgICAgICAgICBpZih0cmVtb2xvLmdldFJldHJpZ2dlcigpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRyZW1vbG8uaW5jcmVtZW50T2Zmc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFubmVsLnNldFZvbHVtZSh0cmVtb2xvLmdldE9yaWdpbmFsVmFsdWUoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5QT1NJVElPTl9KVU1QOlxuICAgICAgICAgICAgcGxheWVyLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KGVmZmVjdENvZGUucCwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5QQVRURVJOX0JSRUFLOlxuICAgICAgICAgICAgcGxheWVyLm5leHRQYXR0ZXJuKCkgfHwgcGxheWVyLnNldFBhdHRlcm5TZXF1ZW5jZUluZGV4KHBsYXllci5nZXRTb25nTG9vcEluZGV4KCkpO1xuICAgICAgICAgICAgcGxheWVyLnNldFJvd0luZGV4KCgxMCAqIGVmZmVjdENvZGUucHgpICsgZWZmZWN0Q29kZS5weSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5GSU5FX1BPUlRBTUVOVE9fVVA6XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZChjaGFubmVsLmdldFBlcmlvZCgpIC0gZWZmZWN0Q29kZS5weSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5GSU5FX1BPUlRBTUVOVE9fRE9XTjpcbiAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKGNoYW5uZWwuZ2V0UGVyaW9kKCkgKyBlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBBVFRFUk5fTE9PUDpcbiAgICAgICAgICAgIGlmKGVmZmVjdENvZGUucHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0UGF0dGVybkxvb3BSb3dJbmRleChwbGF5ZXIuZ2V0UGxheWJhY2tTdGF0ZSgpLmN1cnJlbnRSb3dJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb29wQ291bnQgPSBwbGF5ZXIuZ2V0UGF0dGVybkxvb3BDb3VudCgpIC0gMTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0UGF0dGVybkxvb3BDb3VudChsb29wQ291bnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvb3BDb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldFBhdHRlcm5Mb29wQ291bnQoZWZmZWN0Q29kZS5weSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxvb3BDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldFJvd0luZGV4KHBsYXllci5nZXRQYXR0ZXJuTG9vcFJvd0luZGV4KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLkZJTkVfVk9MVU1FX1NMSURFX1VQOlxuICAgICAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUoTWF0aC5taW4oY2hhbm5lbC5nZXRWb2x1bWUoKSArIGVmZmVjdENvZGUucHksIDY0KSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5GSU5FX1ZPTFVNRV9TTElERV9ET1dOOlxuICAgICAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUoTWF0aC5tYXgoY2hhbm5lbC5nZXRWb2x1bWUoKSAtIGVmZmVjdENvZGUucHksIDApKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlBBVFRFUk5fREVMQVk6XG4gICAgICAgICAgICBwbGF5ZXIuc2V0UGF0dGVybkRlbGF5KGVmZmVjdENvZGUucHkgKiBwbGF5ZXIuc3RhdGUuc3BlZWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Sb3dTdGFydChwbGF5ZXI6IFByb3RyYWNrZXIsIHN0YXRlOiBTdGF0ZSwgY2hhbm5lbDogUHJvdHJhY2tlckNoYW5uZWwpIHtcbiAgICBjb25zdCBlZmZlY3RDb2RlID0gY2hhbm5lbC5nZXRFZmZlY3QoKTtcbiAgICBpZighZWZmZWN0Q29kZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29kZSA9IGVmZmVjdENvZGUuY29kZSA9PT0gMTQgPyBgJHtlZmZlY3RDb2RlLmNvZGV9LSR7ZWZmZWN0Q29kZS5weH1gIDogYCR7ZWZmZWN0Q29kZS5jb2RlfWA7XG4gICAgY29uc3QgdHJlbW9sbyA9IGNoYW5uZWwuZ2V0VHJlbW9sbygpO1xuICAgIGNvbnN0IHZpYnJhdG8gPSBjaGFubmVsLmdldFZpYnJhdG8oKTtcblxuICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlZJQlJBVE86XG4gICAgICAgICAgICB2aWJyYXRvLnNldE9yaWdpbmFsVmFsdWUoY2hhbm5lbC5nZXRQZXJpb2QoKSk7XG4gICAgICAgICAgICB2aWJyYXRvLnNldEFtcGxpdHVkZShlZmZlY3RDb2RlLnB5ICogMik7XG4gICAgICAgICAgICB2aWJyYXRvLnNldE9zY2lsbGF0aW9uc1BlclJvdygoZWZmZWN0Q29kZS5weCAqIChzdGF0ZS5zcGVlZCAtIDEpKSAvIDY0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlRSRU1PTE86XG4gICAgICAgICAgICB0cmVtb2xvLnNldE9yaWdpbmFsVmFsdWUoY2hhbm5lbC5nZXRWb2x1bWUoKSk7XG4gICAgICAgICAgICB0cmVtb2xvLnNldEFtcGxpdHVkZShlZmZlY3RDb2RlLnB5ICogMik7XG4gICAgICAgICAgICB0cmVtb2xvLnNldE9zY2lsbGF0aW9uc1BlclJvdygoZWZmZWN0Q29kZS5weCAqIChzdGF0ZS5zcGVlZCAtIDEpKSAvIDY0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9TQU1QTEVfT0ZGU0VUOlxuICAgICAgICAgICAgY2hhbm5lbC5zZXRTYW1wbGVQb3NpdGlvbigyNTYgKiBlZmZlY3RDb2RlLnApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuU0VUX1ZPTFVNRTpcbiAgICAgICAgICAgIGNoYW5uZWwuc2V0Vm9sdW1lKGVmZmVjdENvZGUucCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5TRVRfVklCUkFUT19XQVZFRk9STTpcbiAgICAgICAgICAgIGlmKGVmZmVjdENvZGUucHkgPiA3KSBicmVhaztcbiAgICAgICAgICAgIHNldE9zY2lsbGF0b3JXYXZlZm9ybSh2aWJyYXRvLCBlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9GSU5FX1RVTkU6XG4gICAgICAgICAgICBjb25zdCBpbnN0cnVjdGlvbiA9IGNoYW5uZWwuZ2V0SW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbiAmJiBpbnN0cnVjdGlvbi5wZXJpb2QgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaW5lVHVuZSA9IGVmZmVjdENvZGUucHkgPCA4ID8gZWZmZWN0Q29kZS5weSA6IC0xNiArIGVmZmVjdENvZGUucHk7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRGaW5lVHVuZShuZXdGaW5lVHVuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5TRVRfVFJFTU9MT19XQVZFRk9STTpcbiAgICAgICAgICAgIGlmKGVmZmVjdENvZGUucHkgPiA3KSBicmVhaztcbiAgICAgICAgICAgIHNldE9zY2lsbGF0b3JXYXZlZm9ybSh0cmVtb2xvLCBlZmZlY3RDb2RlLnB5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlNFVF9TUEVFRDpcbiAgICAgICAgICAgIGlmKGVmZmVjdENvZGUucCA+IDMxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNldFRlbXBvKGVmZmVjdENvZGUucCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllci5zZXRTcGVlZChlZmZlY3RDb2RlLnApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25UaWNrU3RhcnQocGxheWVyOiBQcm90cmFja2VyLCBzdGF0ZTogU3RhdGUsIGNoYW5uZWw6IFByb3RyYWNrZXJDaGFubmVsKSB7XG4gICAgY29uc3QgZWZmZWN0Q29kZSA9IGNoYW5uZWwuZ2V0RWZmZWN0KCk7XG4gICAgaWYoIWVmZmVjdENvZGUpIHJldHVybjtcblxuICAgIGNvbnN0IGluc3RydWN0aW9uID0gY2hhbm5lbC5nZXRJbnN0cnVjdGlvbigpO1xuICAgIGNvbnN0IGNvZGUgPSBlZmZlY3RDb2RlLmNvZGUgPT09IDE0ID8gYCR7ZWZmZWN0Q29kZS5jb2RlfS0ke2VmZmVjdENvZGUucHh9YCA6IGAke2VmZmVjdENvZGUuY29kZX1gO1xuICAgIGNvbnN0IHRyZW1vbG8gPSBjaGFubmVsLmdldFRyZW1vbG8oKTtcbiAgICBjb25zdCB2aWJyYXRvID0gY2hhbm5lbC5nZXRWaWJyYXRvKCk7XG5cbiAgICAvLyBDb2RlcyB0aGF0IHRyaWdnZXIgb24gZXZlcnkgdGljayBleGNlcHQgdGhlIGZpcnN0XG4gICAgaWYoc3RhdGUuY3VycmVudFRpY2sgPiAwKSB7XG4gICAgICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5QT1JUQU1FTlRPX1VQOlxuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKGNoYW5uZWwuZ2V0UGVyaW9kKCkgLSBlZmZlY3RDb2RlLnApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5QT1JUQU1FTlRPX0RPV046XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRQZXJpb2QoY2hhbm5lbC5nZXRQZXJpb2QoKSArIGVmZmVjdENvZGUucCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlZPTFVNRV9TTElERTpcbiAgICAgICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlZPTFVNRV9TTElERV9UT05FX1BPUlRBTUVOVE86XG4gICAgICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5WT0xVTUVfU0xJREVfVklCUkFUTzpcbiAgICAgICAgICAgICAgICBjaGFubmVsLnNldFZvbHVtZShNYXRoLm1heChNYXRoLm1pbihjaGFubmVsLmdldFZvbHVtZSgpICsgZWZmZWN0Q29kZS5weCAtIGVmZmVjdENvZGUucHksIDY0KSwgMCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29kZXMgdGhhdCB0cmlnZ2VyIG9uIGV2ZXJ5IHRpY2tcbiAgICBzd2l0Y2goY29kZSkge1xuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5BUlBFR0dJTzpcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50VGljayAlIDMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnJlc2V0UGVyaW9kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudFRpY2sgJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRQZXJpb2QoY2hhbm5lbC5nZXRGaW5lVHVuZWRQZXJpb2QoKSAvIE1hdGgucG93KDIsIGVmZmVjdENvZGUucHggLyAxMikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRUaWNrICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKGNoYW5uZWwuZ2V0RmluZVR1bmVkUGVyaW9kKCkgLyBNYXRoLnBvdygyLCBlZmZlY3RDb2RlLnB5IC8gMTIpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5UT05FX1BPUlRBTUVOVE86XG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLlZPTFVNRV9TTElERV9UT05FX1BPUlRBTUVOVE86XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gRUZGRUNUX0NPREVTLlRPTkVfUE9SVEFNRU5UTyAmJiBzdGF0ZS5jdXJyZW50VGljayA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKGVmZmVjdENvZGUucCA+IDApIGNoYW5uZWwuc2V0U2xpZGVSYXRlKGVmZmVjdENvZGUucCk7XG4gICAgICAgICAgICAgICAgaWYoaW5zdHJ1Y3Rpb24gJiYgaW5zdHJ1Y3Rpb24ucGVyaW9kKSBjaGFubmVsLnNldFNsaWRlVGFyZ2V0KGluc3RydWN0aW9uLnBlcmlvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbm5lbC5nZXRQZXJpb2QoKSA+IGNoYW5uZWwuZ2V0U2xpZGVUYXJnZXQoKSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0UGVyaW9kKE1hdGgubWF4KGNoYW5uZWwuZ2V0UGVyaW9kKCkgLSBjaGFubmVsLmdldFNsaWRlUmF0ZSgpLCBjaGFubmVsLmdldFNsaWRlVGFyZ2V0KCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihjaGFubmVsLmdldFBlcmlvZCgpIDwgY2hhbm5lbC5nZXRTbGlkZVRhcmdldCgpKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRQZXJpb2QoTWF0aC5taW4oY2hhbm5lbC5nZXRQZXJpb2QoKSArIGNoYW5uZWwuZ2V0U2xpZGVSYXRlKCksIGNoYW5uZWwuZ2V0U2xpZGVUYXJnZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuVklCUkFUTzpcbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuVk9MVU1FX1NMSURFX1ZJQlJBVE86XG4gICAgICAgICAgICBjaGFubmVsLnNldFBlcmlvZCh2aWJyYXRvLmdldFZhbHVlKHBsYXllci5nZXRSb3dQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5UUkVNT0xPOlxuICAgICAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUodHJlbW9sby5nZXRWYWx1ZShwbGF5ZXIuZ2V0Um93UG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFRkZFQ1RfQ09ERVMuUkVUUklHR0VSX05PVEU6XG4gICAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudFRpY2sgJSBlZmZlY3RDb2RlLnB5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRTYW1wbGVQb3NpdGlvbigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRUZGRUNUX0NPREVTLk5PVEVfQ1VUOlxuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRUaWNrID09PSBlZmZlY3RDb2RlLnB5KSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5zZXRWb2x1bWUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVGRkVDVF9DT0RFUy5OT1RFX0RFTEFZOlxuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRUaWNrIDwgZWZmZWN0Q29kZS5weSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2V0U2FtcGxlQXNFbmRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRUaWNrID09PSBlZmZlY3RDb2RlLnB5KSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5yZXNldFNhbXBsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9zY2lsbGF0b3JXYXZlZm9ybShvc2NpbGxhdG9yOiBQcm90cmFja2VyT3NjaWxsYXRvciwgcGFyYW06IG51bWJlcikge1xuICAgIGNvbnN0IHR5cGVDb2RlID0gcGFyYW0gPj0gNCA/IHBhcmFtIC0gNCA6IHBhcmFtO1xuICAgIGNvbnN0IHJldHJpZ2dlciA9IHBhcmFtIDwgNDtcbiAgICBjb25zdCBnZW5lcmF0b3IgPSBXQVZFX1RZUEVTW3R5cGVDb2RlXTtcblxuICAgIG9zY2lsbGF0b3Iuc2V0V2F2ZUdlbmVyYXRvcihnZW5lcmF0b3IpO1xuICAgIG9zY2lsbGF0b3Iuc2V0UmV0cmlnZ2VyKHJldHJpZ2dlcik7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQoKTogQXVkaW9Db250ZXh0IHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICh3aW5kb3cgYXMgYW55KS53ZWJraXRBdWRpb0NvbnRleHQpKClcbiAgICAgICAgOiBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgQXVkaW9Db250ZXh0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGUoc291cmNlOiBzdHJpbmcgfCBGaWxlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyBsb2FkRmlsZUZyb21Vcmwoc291cmNlKSA6IGxvYWRGaWxlRnJvbURpc2soc291cmNlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlRnJvbURpc2soc291cmNlOiBGaWxlKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXI7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KFwiVElNRU9VVFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoJ0FCT1JUJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZTpgLCBzb3VyY2UpO1xuICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc291cmNlKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlRnJvbVVybChzb3VyY2U6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICAgIHJlcS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihyZXEucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFTVBUWVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlamVjdChcIlRJTUVPVVRcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcS5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWplY3QoJ0FCT1JUJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZSBmcm9tIFVSTDogJyR7c291cmNlfSdgKTtcbiAgICAgICAgcmVxLnNlbmQoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrUmFuZG9tKC4uLnBhcmFtczogYW55W10pIHtcbiAgICByZXR1cm4gcGFyYW1zW3JhbmRvbUludChwYXJhbXMubGVuZ3RoKV07XG59XG5cbi8qKlxuICogR2l2ZW4gYSBtYXggb2YgMywgaXQgd2lsbCByZXR1cm4gMCwxLDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkOGJpdEludChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIG9mZnNldDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcikuZ2V0VWludDgob2Zmc2V0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQmlnRW5kaWFuMTZiaXRJbnQoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBvZmZzZXQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpLmdldFVpbnQxNihvZmZzZXQsIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkU3RyaW5nRnJvbUFycmF5QnVmZmVyKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciwgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICAgIG51bGwsXG4gICAgICAgIEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCkpKVxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==