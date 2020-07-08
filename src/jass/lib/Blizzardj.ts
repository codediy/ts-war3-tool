import {handle, integer, nothing, real} from "./types";
import {
    boolexpr,
    camerafield,
    camerasetup, dialog, event, force,
    gamespeed,
    item, lightning, limitop,
    location,
    MAP_SPEED_NORMAL,
    player, playerunitevent,
    rect, region, terraindeformation, timer,
    trigger,
    unit, weathereffect
} from "./Commonj";

export const Jass___bj_PI: real = 3.14159;
export const Jass___bj_E: real = 2.71828;
export const Jass___bj_CELLWIDTH: real = 128.0;
export const Jass___bj_CLIFFHEIGHT: real = 128.0;
export const Jass___bj_UNIT_FACING: real = 270.0;
export const Jass___bj_RANDTODEG: real = 180.0 / Jass___bj_PI;
export const Jass___bj_DEGTORAD: real = Jass___bj_PI / 180.0;
export const Jass___bj_TEXT_DELAY_QUEST: real = 20.00;
export const Jass___bj_TEXT_DELAY_QUESTUPDATE: real = 20.00;
export const Jass___bj_TEXT_DELAY_QUESTDONE: real = 20.00;
export const Jass___bj_TEXT_DELAY_QUESTFAILED: real = 20.00;
export const Jass___bj_TEXT_DELAY_QUESTREQUIREMENT: real = 20.00;
export const Jass___bj_TEXT_DELAY_MISSIONFAILED: real = 20.00;
export const Jass___bj_TEXT_DELAY_ALWAYSHINT: real = 12.00;
export const Jass___bj_TEXT_DELAY_HINT: real = 12.00;
export const Jass___bj_TEXT_DELAY_SECRET: real = 10.00;
export const Jass___bj_TEXT_DELAY_UNITACQUIRED: real = 15.00;
export const Jass___bj_TEXT_DELAY_UNITAVAILABLE: real = 10.00;
export const Jass___bj_TEXT_DELAY_ITEMACQUIRED: real = 10.00;
export const Jass___bj_TEXT_DELAY_WARNING: real = 10.00;
export const Jass___bj_QUEUE_DELAY_QUEST: real = 5.00;
export const Jass___bj_QUEUE_DELAY_HINT: real = 5.00;
export const Jass___bj_QUEUE_DELAY_SECRET: real = 3.00;
export const Jass___bj_HANDICAP_EASY: real = 60.00;
export const Jass___bj_GAME_STARTED_THRESHOLD: real = 0.01;
export const Jass___bj_WAIT_FOR_COND_MIN_INTERVAL: real = 0.10;
export const Jass___bj_POLLED_WAIT_INTERVAL: real = 0.10;
export const Jass___bj_POLLED_WAIT_SKIP_THRESHOLD: real = 2.00;


export const Jass___bj_MAX_INVENTORY: integer = 6;
export const Jass___bj_MAX_PLAYERS: integer = 12;
export const Jass___bj_PLAYER_NEUTRAL_VICTIM: integer = 13;
export const Jass___bj_PLAYER_NEUTRAL_EXTRA: integer = 14;
export const Jass___bj_MAX_PLAYER_SLOTS: integer = 25;
export const Jass___bj_MAX_STOCK_ITEM_SLOTS: integer = 11;
export const Jass___bj_MAX_STOCK_UNIT_SLOTS: integer = 11;
export const Jass___bj_MAX_ITEM_LEVEL: integer = 10;

export const Jass___bj_TOD_DAWN: real = 6.00;
export const Jass___bj_TOD_DUSK: real = 18.00;

export const Jass___bj_MELEE_STARTING_TOD: real = 8.00;
export const Jass___bj_MELEE_STARTING_GOLD_V0: integer = 750;
export const Jass___bj_MELEE_STARTING_GOLD_V1: integer = 500;
export const Jass___bj_MELEE_STARTING_LUMBER_V0: integer = 200;
export const Jass___bj_MELEE_STARTING_LUMBER_V1: integer = 150;
export const Jass___bj_MELEE_STARTING_HERO_TOKENS: integer = 1;
export const Jass___bj_MELEE_HERO_LIMIT: integer = 3;
export const Jass___bj_MELEE_HERO_TYPE_LIMIT: integer = 1;
export const Jass___bj_MELEE_MINE_SEARCH_RADIUS: real = 2000;
export const Jass___bj_MELEE_CLEAR_UNITS_RADIUS: real = 2000;
export const Jass___bj_MELEE_CRIPPLE_TIMEOUT: real = 120.00;
export const Jass___bj_MELEE_CRIPPLE_MSG_DURATION: real = 20.00;
export const Jass___bj_MELEE_MAX_TWINKED_HEROES_V0: integer = 3;
export const Jass___bj_MELEE_MAX_TWINKED_HEROES_V1: integer = 1;

export const Jass___bj_CREEP_ITEM_DELAY: real = 0.50;

export const Jass___bj_STOCK_RESTOCK_INITIAL_DELAY: real = 120;
export const Jass___bj_STOCK_RESTOCK_INTERVAL: real = 30;
export const Jass___bj_STOCK_MAX_ITERATIONS: integer = 20;

export const Jass___bj_MAX_DEST_IN_REGIONS_EVENTS: integer = 64;

export const Jass___bj_CAMERA_MIN_FARZ: integer = 100;
export const Jass___bj_CAMERA_DEFAULT_DISTANCE: integer = 1650;
export const Jass___bj_CAMERA_DEFAULT_FARZ: integer = 5000;
export const Jass___bj_CAMERA_DEFAULT_AOA: integer = 304;
export const Jass___bj_CAMERA_DEFAULT_FOA: integer = 70;
export const Jass___bj_CAMERA_DEFAULT_ROLL: integer = 0;
export const Jass___bj_CAMERA_DEFAULT_ROTATION: integer = 90;

export const Jass___bj_RESCUE_PING_TIME: real = 2.0;

export const Jass___bj_NOTHING_SOUND_DURATION: real = 5.00;
export const Jass___bj_TRANSMISSION_PING_TIME: real = 1.0;
export const Jass___bj_TRANSMISSION_IND_RED: integer = 255;
export const Jass___bj_TRANSMISSION_IND_BLUE: integer = 255;
export const Jass___bj_TRANSMISSION_IND_GREEN: integer = 255;
export const Jass___bj_TRANSMISSION_IND_ALPHA: integer = 255;
export const Jass___bj_TRANSMISSION_PORT_HANGTIME: real = 1.50;

export const Jass___bj_CINEMODE_INTERFACEFADE: real = 0.50;
export const Jass___bj_CINEMODE_GAMESPEED: gamespeed = MAP_SPEED_NORMAL;

export const Jass___bj_CINEMODE_VOLUME_UNITMOVEMENT: real = 0.40;
export const Jass___bj_CINEMODE_VOLUME_UNITSOUNDS: real = 0.00;
export const Jass___bj_CINEMODE_VOLUME_COMBAT: real = 0.40;
export const Jass___bj_CINEMODE_VOLUME_SPELLS: real = 0.40;
export const Jass___bj_CINEMODE_VOLUME_UI: real = 0.00;
export const Jass___bj_CINEMODE_VOLUME_MUSIC: real = 0.55;
export const Jass___bj_CINEMODE_VOLUME_AMBIENTSOUNDS: real = 1.00;
export const Jass___bj_CINEMODE_VOLUME_FIRE: real = 0.60;

export const Jass___bj_SPEECH_VOLUME_UNITMOVEMENT: real = 0.25;
export const Jass___bj_SPEECH_VOLUME_UNITSOUNDS: real = 0.00;
export const Jass___bj_SPEECH_VOLUME_COMBAT: real = 0.25;
export const Jass___bj_SPEECH_VOLUME_SPELLS: real = 0.25;
export const Jass___bj_SPEECH_VOLUME_UI: real = 0.00;
export const Jass___bj_SPEECH_VOLUME_MUSIC: real = 0.55;
export const Jass___bj_SPEECH_VOLUME_AMBIENTSOUNDS: real = 1.00;
export const Jass___bj_SPEECH_VOLUME_FIRE: real = 0.60;

export const Jass___bj_SMARTPAN_TRESHOLD_PAN: real = 500;
export const Jass___bj_SMARTPAN_TRESHOLD_SNAP: real = 3500;


export const Jass___bj_MAX_QUEUED_TRIGGERS: integer = 100;
export const Jass___bj_QUEUED_TRIGGER_TIMEOUT: real = 180.00;

export const Jass___bj_CAMPAIGN_INDEX_T: integer = 0;
export const Jass___bj_CAMPAIGN_INDEX_H: integer = 1;
export const Jass___bj_CAMPAIGN_INDEX_U: integer = 2;
export const Jass___bj_CAMPAIGN_INDEX_O: integer = 3;
export const Jass___bj_CAMPAIGN_INDEX_N: integer = 4;
export const Jass___bj_CAMPAIGN_INDEX_XN: integer = 5;
export const Jass___bj_CAMPAIGN_INDEX_XH: integer = 6;
export const Jass___bj_CAMPAIGN_INDEX_XU: integer = 7;
export const Jass___bj_CAMPAIGN_INDEX_XO: integer = 8;


export const Jass___bj_CAMPAIGN_OFFSET_T: integer = 0;
export const Jass___bj_CAMPAIGN_OFFSET_H: integer = 1;
export const Jass___bj_CAMPAIGN_OFFSET_U: integer = 2;
export const Jass___bj_CAMPAIGN_OFFSET_O: integer = 3;
export const Jass___bj_CAMPAIGN_OFFSET_N: integer = 4;
export const Jass___bj_CAMPAIGN_OFFSET_XN: integer = 0;
export const Jass___bj_CAMPAIGN_OFFSET_XH: integer = 1;
export const Jass___bj_CAMPAIGN_OFFSET_XU: integer = 2;
export const Jass___bj_CAMPAIGN_OFFSET_XO: integer = 3;


export const Jass___bj_MISSION_INDEX_T00: integer = Jass___bj_CAMPAIGN_OFFSET_T * 1000 /* + 0*/;
export const Jass___bj_MISSION_INDEX_T01: integer = Jass___bj_CAMPAIGN_OFFSET_T * 1000 + 1;

/*Human*/
export const Jass___bj_MISSION_INDEX_H00: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 /* + 0*/;
export const Jass___bj_MISSION_INDEX_H01: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 1;
export const Jass___bj_MISSION_INDEX_H02: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 2;
export const Jass___bj_MISSION_INDEX_H03: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 3;
export const Jass___bj_MISSION_INDEX_H04: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 4;
export const Jass___bj_MISSION_INDEX_H05: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 5;
export const Jass___bj_MISSION_INDEX_H06: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 6;
export const Jass___bj_MISSION_INDEX_H07: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 7;
export const Jass___bj_MISSION_INDEX_H08: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 8;
export const Jass___bj_MISSION_INDEX_H09: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 9;
export const Jass___bj_MISSION_INDEX_H10: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 10;
export const Jass___bj_MISSION_INDEX_H11: integer = Jass___bj_CAMPAIGN_OFFSET_H * 1000 + 11;

/*Undead*/
export const Jass___bj_MISSION_INDEX_U00: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 /* + 0*/;
export const Jass___bj_MISSION_INDEX_U01: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 1;
export const Jass___bj_MISSION_INDEX_U02: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 2;
export const Jass___bj_MISSION_INDEX_U03: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 3;
export const Jass___bj_MISSION_INDEX_U04: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 4;
export const Jass___bj_MISSION_INDEX_U05: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 5;
export const Jass___bj_MISSION_INDEX_U06: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 6;
export const Jass___bj_MISSION_INDEX_U07: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 7;
export const Jass___bj_MISSION_INDEX_U08: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 8;
export const Jass___bj_MISSION_INDEX_U09: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 9;
export const Jass___bj_MISSION_INDEX_U10: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 10;
export const Jass___bj_MISSION_INDEX_U11: integer = Jass___bj_CAMPAIGN_OFFSET_U * 1000 + 11;

/*Orc*/
export const Jass___bj_MISSION_INDEX_O00: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 /* + 0*/;
export const Jass___bj_MISSION_INDEX_O01: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 1;
export const Jass___bj_MISSION_INDEX_O02: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 2;
export const Jass___bj_MISSION_INDEX_O03: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 3;
export const Jass___bj_MISSION_INDEX_O04: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 4;
export const Jass___bj_MISSION_INDEX_O05: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 5;
export const Jass___bj_MISSION_INDEX_O06: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 6;
export const Jass___bj_MISSION_INDEX_O07: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 7;
export const Jass___bj_MISSION_INDEX_O08: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 8;
export const Jass___bj_MISSION_INDEX_O09: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 9;
export const Jass___bj_MISSION_INDEX_O10: integer = Jass___bj_CAMPAIGN_OFFSET_O * 1000 + 10;

/*Night Elf*/
export const Jass___bj_MISSION_INDEX_N00: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 /* + 0*/;
export const Jass___bj_MISSION_INDEX_N01: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 1;
export const Jass___bj_MISSION_INDEX_N02: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 2;
export const Jass___bj_MISSION_INDEX_N03: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 3;
export const Jass___bj_MISSION_INDEX_N04: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 4;
export const Jass___bj_MISSION_INDEX_N05: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 5;
export const Jass___bj_MISSION_INDEX_N06: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 6;
export const Jass___bj_MISSION_INDEX_N07: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 7;
export const Jass___bj_MISSION_INDEX_N08: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 8;
export const Jass___bj_MISSION_INDEX_N09: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 9;
export const Jass___bj_MISSION_INDEX_N10: integer = Jass___bj_CAMPAIGN_OFFSET_N * 1000 + 10;

/*Ex Night Elf*/
export const Jass___bj_MISSION_INDEX_XN00: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 10;
export const Jass___bj_MISSION_INDEX_XN01: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 1;
export const Jass___bj_MISSION_INDEX_XN02: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 2;
export const Jass___bj_MISSION_INDEX_XN03: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 3;
export const Jass___bj_MISSION_INDEX_XN04: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 4;
export const Jass___bj_MISSION_INDEX_XN05: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 5;
export const Jass___bj_MISSION_INDEX_XN06: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 6;
export const Jass___bj_MISSION_INDEX_XN07: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 7;
export const Jass___bj_MISSION_INDEX_XN08: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 8;
export const Jass___bj_MISSION_INDEX_XN09: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 9;
export const Jass___bj_MISSION_INDEX_XN10: integer = Jass___bj_CAMPAIGN_OFFSET_XN * 1000 + 10;


export declare function Jass___BJDebugMsg(msg: string): nothing;

export declare function Jass___RMinBJ(a: real, b: real): real;

export declare function Jass___RMaxBJ(a: real, b: real): real;

export declare function Jass___RAbsBJ(a: real): real;

export declare function Jass___RSignBJ(a: real): real;

export declare function Jass___IMinBJ(a: integer, b: integer): integer;

export declare function Jass___IMaxBJ(a: integer, b: integer): integer;

export declare function Jass___IAbsBJ(a: integer): integer;

export declare function Jass___ISignBJ(a: integer): integer;

export declare function Jass___SinBJ(degrees: real): real;

export declare function Jass___CosBJ(degrees: real): real;

export declare function Jass___TanBJ(degrees: real): real;

export declare function Jass___AsinBJ(degrees: real): real;

export declare function Jass___AcosBJ(degrees: real): real;

export declare function Jass___AtanBJ(degrees: real): real;

export declare function Jass___Atan2BJ(y: real, x: real): real;

export declare function Jass___AngleBetweenPoints(
    locA: location,
    locB: location
): real;

export declare function Jass___DistanceBetweenPoints(
    locA: location,
    locB: location
): real;

export declare function Jass___polarProjectionBJ(
    source: location,
    dist: real,
    angle: real
): location;


export declare function Jass___GetRandomDirectionDeg(): real;

export declare function Jass___GetRandomPercentageBJ(): real;

export declare function Jass___ModuloInteger(
    dividend: integer,
    divisor: integer
): integer;

export declare function Jass___ModuloReal(
    dividend: real,
    divisor: real
): real;

export declare function Jass___OffsetLocation(
    loc: location,
    dx: real,
    dy: real
): location;

export declare function Jass___OffsetRectBJ(
    r: rect,
    dx: real,
    dy: real
): rect;

export declare function Jass___RectFromCenterSizeBJ(
    center: location,
    width: real,
    height: real
): rect;

export declare function Jass___RectContainsCoord(
    r: rect,
    x: real,
    y: real
): boolean;

export declare function Jass___RectContainsLoc(
    r: rect,
    loc: location
): boolean;


export declare function Jass___RectContainsUnit(
    r: rect,
    whichUnit: unit
): boolean;

export declare function Jass___RectContainsItem(
    whichItem: item,
    r: rect
): boolean;


export declare function Jass___ConditionalTriggerExecute(
    trig: trigger
): nothing;

export declare function Jass___TriggerExecuteBJ(
    trig: trigger,
    checkConditions: boolean
): boolean;

export declare function Jass___PostTriggerExecuteBJ(
    trig: trigger,
    checkConditions: boolean
): boolean;

export declare function Jass___QueuedTriggerCheck(): nothing;

export declare function Jass___QueuedTriggerGetIndex(
    trig: trigger
): integer;

export declare function Jass___QueuedTriggerRemoveByIndex(
    trig: integer
): boolean;

export declare function Jass___QueuedTriggerAttemptExec(): boolean;

export declare function Jass___QueuedTriggerAddBJ(
    trig: trigger,
    checkConditions: boolean
): boolean;

export declare function Jass___QueuedTriggerRemoveBJ(
    trig: trigger
): nothing;

export declare function Jass___QueuedTriggerDoneBJ(): nothing;

export declare function Jass___QueuedTriggerClearBJ(): nothing;

export declare function Jass___QueuedTriggerClearInactiveBJ(): nothing;

export declare function Jass___QueuedTriggerCountBJ(): integer;

export declare function Jass___IsTriggerQueueEmptyBJ(): boolean;

export declare function Jass___IsTriggerQueueBJ(
    trig: trigger
): boolean;

export declare function Jass___GetForLoopIndexA(): integer;

export declare function Jass___SetFroLoopIndexA(
    newIndex: integer
): nothing;

export declare function Jass___GetForLoopIndexB(): integer;

export declare function Jass___SetForLoopIndexB(
    newIndex: integer
): nothing;

export declare function Jass___PolleWait(
    duration: real
): nothing;

export declare function Jass___IntegerTertiaryOp(
    flag: boolean,
    valueA: integer,
    valueB: integer
): integer;

export declare function Jass___DoNothing(): nothing;

export declare function Jass___CommentString(): nothing;

export declare function Jass___StringIdentity(
    theString: string
): string;

export declare function Jass___GetBooleanAnd(
    valueA: boolean,
    valueB: boolean
): boolean;

export declare function Jass___GetBooleanOr(
    valueA: boolean,
    valueB: boolean
): boolean;

export declare function Jass___PercentToInt(
    percentage: real,
    max: integer
): integer;

export declare function Jass___PercentTo255(
    percentage: real
): integer;

export declare function Jass___GetTimeOfDay(): real;

export declare function Jass___SetTimeOfDay(
    whatTime: real
): nothing;

export declare function Jass___SetTimeOfDayScalePercentBJ(
    scalePercent: real
): nothing;

export declare function Jass___GetTimeOfDayScalePercentBJ(): real;

export declare function Jass___PlaySound(
    soundName: string
): nothing;

export declare function Jass___CompareLocationsBJ(
    a: location,
    b: location
): boolean;

export declare function Jass___CompareRectsBJ(
    a: rect,
    b: rect
): boolean;

export declare function Jass___GetRectFromCircleBJ(
    center: location,
    radius: real
): rect;

/*Camera*/
export declare function Jass___GetCurrentCameraSetup(): camerasetup;

export declare function Jass___CameraSetupApplyForPlayer(
    doPan: boolean,
    whichSetup: camerasetup,
    whichPlayer: player,
    duration: real
): nothing;

export declare function Jass___CameraSetupGetFieldSwap(
    whichField: camerafield,
    whichSetup: camerasetup
): real;

export declare function Jass___SetCameraFieldForPlayer(
    whichPlayer: player,
    whichField: camerafield,
    value: real,
    duration: real
): nothing;

export declare function Jass___SetCameraTargetControllerNoZForPlayer(
    whichPlayer: player,
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
    inheritOrientation: boolean
): nothing;

export declare function Jass___SetCameraPositionForPlayer(
    whichPlayer: player,
    x: real,
    y: real
): nothing;

export declare function Jass___SetCameraPositionLocForPlayer(
    whichPlayer: player,
    loc: location
): nothing;

export declare function Jass___RotateCameraAroundLocBJ(
    degrees: real,
    loc: location,
    whichPlayer: player,
    duration: real
): nothing;

export declare function Jass___PanCameraToLocForPlayer(
    whichPlayer: player,
    loc: location
): nothing;

export declare function Jass___PanCameraToTimeForPlayer(
    whichPlayer: player,
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass___PanCameraToTimedLocFroPlayer(
    whichPlayer: player,
    loc: location,
    duration: real
): nothing;

export declare function Jass___PanCameraToTimedLocWithZFroPlayer(
    whichPlayer: player,
    loc: location,
    zOffset: real,
    duration: real
): nothing;

export declare function Jass___SmartCameraPanBJ(
    whichPlayer: player,
    loc: location,
    duration: real
): nothing;

export declare function Jass___SetCinemationCameraForPlayer(
    whichPlayer: player,
    cameraModelFile: string
): nothing;

export declare function Jass___ResetToGameCameraForPlayer(
    whichPlayer: player,
    duration: real
): nothing;

export declare function Jass___CameraSetSourceNoiseForPlayer(
    whichPlayer: player,
    magnitude: real,
    velocity: real
): nothing;

export declare function Jass___CameraSetTargetNoiseForPlayer(
    whichPlayer: player,
    magnitude: real,
    velocity: real
): nothing;

export declare function Jass___CameraSetEQNoiseForPlayer(
    whichPlayer: player,
    magnitude: real
): nothing;

export declare function Jass___CameraClearNoiseForPlayer(
    whichPlayer: player
): nothing;

export declare function Jass___GetCurrentCameraBoundsMapRectBJ(): rect;

export declare function Jass___GetCameraBoundsMapRect(): rect;

export declare function Jass___GetPlayableMapRect(): rect;

export declare function Jass___GetEntireMapRect(): rect;

export declare function Jass___SetCameraBoundsToRect(
    r: rect
): nothing;

export declare function Jass___SetCameraBoundsToRectForPlayerBJ(
    whichPlayer: player,
    r: rect
): nothing;

export declare function Jass___AdjustCameraBoundsBJ(
    adjustMethod: integer,
    dxWest: real,
    dxEast: real,
    dyNorth: real,
    dySouth: real
): nothing;

export declare function Jass___AdjustCameraBoundsForPlayerBJ(
    adjustMethod: integer,
    whichPlayer: player,
    dxWest: real,
    dxEast: real,
    dyNorth: real,
    dySouth: real
): nothing;

export declare function Jass___SetCameraQuickPositionForPlayer(
    whichPlayer: player,
    x: real,
    y: real
): nothing;

export declare function Jass___SetCameraQuickPositionLocForPlayer(
    whichPlayer: player,
    loc: location
): nothing;

export declare function Jass___SetCameraForPlayerBJ(
    whichPlayer: player
): nothing;

export declare function Jass___SetCameraOrientControllerForPlayerBJ(
    whichPlayer: player,
    whichUnit: unit,
    xoffset: real,
    yoffset: real
): nothing;

export declare function Jass___CameraSetSmoothingFactorBJ(
    factor: real
): nothing;

export declare function Jass___CameraResetSmoothingFactorBJ(): nothing;

/*Text*/
export declare function Jass___DisplayTextToForce(
    toForce: force,
    message: string
): nothing;

export declare function Jass___DisplayTimedTextToForce(
    toForce: force,
    duration: real,
    message: string
): nothing;

export declare function Jass___ClearTextMessagesBJ(
    toForce: force
): nothing;

export declare function Jass___SubStringBJ(
    source: string,
    start: integer,
    end: integer
): string;

export declare function Jass___GetHandleIdBJ(
    h: handle
): integer;

export declare function Jass___StringHashBJ(
    s: string
): integer;

/*Event*/
export declare function Jass___TriggerRegisterTimerEventPeriodic(
    trig: trigger,
    timeout: real
): event;

export declare function Jass___TriggerRegisterTimerEventSingle(
    trig: trigger,
    timeout: real
): event;

export declare function Jass___TriggerRegisterTimerExpireEventBJ(
    trig: trigger,
    t: timer
): event;

export declare function Jass___TriggerRegisterPlayerUnitEventSimple(
    trig: trigger,
    whichPlayer: player,
    whichEvent: playerunitevent
): event;

export declare function Jass___TriggerRegisterAnyUnitEventBj(
    trig: trigger,
    whichEvent: playerunitevent
): nothing;

export declare function Jass___TriggerRegisterPlayerKeyEventBJ(
    trig: trigger,
    whichPlayer: player,
    keType: integer,
    keKey: integer
): event;

export declare function Jass___TriggerRegisterPlayerEVentVictory(
    trig: trigger,
    whichPlayer: player
): event;

export declare function Jass___TriggerRegisterPlayerEventDefeat(
    trig: trigger,
    whichPlayer: player
): event;

export declare function Jass___TriggerRegisterPlayerEventLeave(
    trig: trigger,
    whichPlayer: player
): event;

export declare function Jass___TriggerRegisterPlayerEventAllianceChanged(
    trig: trigger,
    whichPlayer: player
): event;

export declare function Jass___TriggerRegisterPlayerEventEndCinematic(
    trig: trigger,
    whichPlayer: player
): event;

export declare function Jass___TriggerRegisterGameStateEventTimeOfDay(
    trig: trigger,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass___TriggerRegisterEnterRegionSimple(
    trig: trigger,
    whichRegion: region
): nothing;

export declare function Jass___TriggerRegisterLeaveRegionSimple(
    trig: trigger,
    whichRegion: region
): nothing;

export declare function Jass___TriggerRegisterEnterRectSimple(
    trig: trigger,
    r: rect
): event;

export declare function Jass___TriggerRegisterLeaveRectSimple(
    trig: trigger,
    r: rect
): event;

export declare function Jass___TriggerRegisterDistanceBetweenUnits(
    trig: trigger,
    whichUnit: unit,
    condition: boolexpr,
    range: real
): event;

export declare function Jass___TriggerRegisterUnitInRangeSimple(
    trig: trigger,
    range: real,
    whichUnit: unit
): event;

export declare function Jass___TriggerRegisterUnitLifeEvent(
    trig: trigger,
    whichUnit: unit,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass___TriggerRegisterUnitManaEvent(
    trig: trigger,
    whichUnit: unit,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass___TriggerRegisterDialogEventBJ(
    trig: trigger,
    whichDialog: dialog
): event;

export declare function Jass___TriggerRegisterShowSkillEventBJ(
    trig: trigger
): event;

export declare function Jass___TriggerRegisterBuildSubmenuEventBJ(
    trig: trigger
): event;

export declare function Jass___TriggerRegisterGameLoadedEventBJ(
    trig: trigger
): event;

export declare function Jass___TriggerRegisterGameSaveEventBJ(
    trig: trigger
): event;

export declare function Jass___RegisterDestDeathInRegionEnum(): nothing;

export declare function Jass___TriggerRegisterDestDeathInRegionEvent(
    trig: trigger,
    r: rect
): nothing;

/*Environment*/
export declare function Jass___AddWeatherEffectSaveLast(
    where: rect,
    effectID: integer
): weathereffect;

export declare function Jass___GetLastCreatedWeatherEffect(): weathereffect;

export declare function Jass___RemoveWeatherEffectBJ(
    whichWeatherEffect: weathereffect
): nothing;

export declare function Jass___TerrainDeformationCraterBJ(
    duration: real,
    permanent: boolean,
    where: location,
    radius: real,
    depth: real
): terraindeformation;

export declare function Jass___TerrainDeformationRippleBJ(
    duration: real,
    limitNeg: boolean,
    where: location,
    startRadius: real,
    endRadius: real,
    depth: real,
    wavePeriod: real,
    waveWidth: real
): terraindeformation;

export declare function Jass___TerrainDeformationWaveBJ(
    duration: real,
    source: location,
    target: location,
    radius: real,
    depth: real,
    trailDelay: real
): terraindeformation;

export declare function Jass___TerrainDeformationRandomBJ(
    duration: real,
    where: location,
    radius: real,
    minDelta: real,
    maxDelta: real,
    updateInterval: real
): terraindeformation;

export declare function Jass___TerrainDeformationStopBJ(
    deformation: terraindeformation,
    duration: real
): nothing;

export declare function Jass___GetLastCreatedTerrainDeformation(): terraindeformation;

export declare function Jass___AddLightingLoc(
    codeName: string,
    where1: location,
    where2: location
): lightning;

export declare function Jass___DestroyLightningBJ(
    whichBolt: lightning
): boolean;

export declare function Jass___();
export declare function Jass___();
export declare function Jass___();
export declare function Jass___();
export declare function Jass___();
export declare function Jass___();
export declare function Jass___();