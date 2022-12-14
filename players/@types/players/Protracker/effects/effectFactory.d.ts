import { EffectCode } from "../models/EffectCode.interface";
/**
 * Will return a Protracker<Effect>Effect class instance which can be used to process the given effect
 * @param effectCode - The effect code that we want to be able to process
 */
export declare function effectFactory(effectCode?: EffectCode): import("../models/EffectProcessor.interface").EffectProcessor | undefined;
export default effectFactory;
