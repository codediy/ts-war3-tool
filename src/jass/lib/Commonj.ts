/// <reference path="types.ts" />
import {code, handle, integer, nothing, real,} from "./types";

export interface agent extends handle {
}

export interface event extends agent {
}

export interface player extends agent {
}

export interface widget extends agent {
}

export interface unit extends widget {
}

export interface destructable extends widget {
}

export interface item extends widget {
}

export interface ability extends agent {
}

export interface buff extends ability {

}

export interface force extends agent {

}

export interface group extends agent {

}

export interface trigger extends agent {

}

export interface triggercondition extends agent {

}

export interface triggeraction extends handle {

}

export interface timer extends agent {

}

export interface location extends agent {

}

export interface region extends agent {

}

export interface rect extends agent {

}

export interface boolexpr extends agent {

}

export interface sound extends agent {

}

export interface conditionfuncs extends boolexpr {

}

export interface filterfunc extends boolexpr {

}

export interface unitpool extends handle {

}

export interface itempool extends handle {

}

export interface race extends handle {

}

export interface alliancetype extends handle {

}

export interface racepreference extends handle {

}

export interface gamestate extends handle {

}

export interface igamestate extends gamestate {

}

export interface fgamestate extends gamestate {

}

export interface playerstate extends handle {

}

export interface playerscore extends handle {

}

export interface playergameresult extends handle {

}

export interface unitstate extends handle {

}

export interface aidifficulty extends handle {

}

export interface eventid extends handle {

}

export interface gameevent extends eventid {

}

export interface playerevent extends eventid {

}

export interface playerunitevent extends eventid {

}

export interface unitevent extends eventid {

}

export interface limitop extends eventid {

}

export interface widgetevent extends eventid {

}

export interface dialogevent extends eventid {

}

export interface unittype extends handle {

}

export interface gamespeed extends handle {

}

export interface gamedifficulty extends handle {

}

export interface gametype extends handle {

}

export interface mapflag extends handle {

}

export interface mapvisibility extends handle {

}

export interface mapsetting extends handle {

}

export interface mapdensity extends handle {

}

export interface mapcontrol extends handle {

}

export interface playerslotstate extends handle {

}

export interface volumegroup extends handle {

}

export interface camerafield extends handle {

}

export interface camerasetup extends handle {

}

export interface playercolor extends handle {

}

export interface placement extends handle {

}

export interface startlocprio extends handle {

}

export interface raritycontrol extends handle {

}

export interface blendmode extends handle {

}

export interface texmapflags extends handle {

}

export interface effect extends agent {

}

export interface effectype extends handle {

}

export interface weathereffect extends handle {

}

export interface terraindeformation extends handle {

}

export interface fogstate extends handle {

}

export interface fogmodifier extends agent {

}

export interface dialog extends agent {

}

export interface button extends agent {

}

export interface quest extends agent {

}

export interface questitem extends agent {

}

export interface defeatcondition extends agent {

}

export interface timerdialog extends agent {

}

export interface leaderboard extends agent {

}

export interface multiboard extends agent {

}

export interface multiboarditem extends agent {

}

export interface trackable extends agent {

}

export interface gamecache extends agent {

}

export interface version extends handle {

}

export interface itemtype extends handle {

}

export interface texttag extends handle {

}

export interface attacktype extends handle {

}

export interface damagetype extends handle {

}

export interface weapontype extends handle {

}

export interface soundtype extends handle {

}

export interface lightning extends handle {

}

export interface pathingtype extends handle {

}

export interface image extends handle {

}

export interface ubersplat extends handle {

}

export interface hashtable extends agent {

}

export declare function Jass_Constant_Native_ConvertRace(i: integer): race

export declare function Jass_Constant_Native_ConvertAllianceType(i: integer): alliancetype;

export declare function Jass_Constant_Native_ConvertRacePref(i: integer): racepreference;

export declare function Jass_Constant_Native_ConvertIGameState(i: integer): igamestate;

export declare function Jass_Constant_Native_ConvertFGameState(i: integer): fgamestate;

export declare function Jass_Constant_Native_ConvertPlayerState(i: integer): playerstate;

export declare function Jass_Constant_Native_ConvertPlayerScore(i: integer): playerscore;

export declare function Jass_Constant_Native_ConvertPlayerGameResult(i: integer): playergameresult;

export declare function Jass_Constant_Native_ConvertUnitState(i: integer): unitstate;

export declare function Jass_Constant_Native_ConvertAIDifficulty(i: integer): aidifficulty;

export declare function Jass_Constant_Native_ConvertGameEvent(i: integer): gameevent;

export declare function Jass_Constant_Native_ConvertPlayerEvent(i: integer): playerevent;

export declare function Jass_Constant_Native_ConvertPlayerUnitEvent(i: integer): playerunitevent;

export declare function Jass_Constant_Native_ConvertWidgetEvent(i: integer): widgetevent;

export declare function Jass_Constant_Native_ConvertDialogEvent(i: integer): dialogevent;

export declare function Jass_Constant_Native_ConvertUnitEvent(i: integer): unitevent;

export declare function Jass_Constant_Native_ConvertLimitOp(i: integer): limitop;

export declare function Jass_Constant_Native_ConvertUnitType(i: integer): unittype;

export declare function Jass_Constant_Native_ConvertGameSpeed(i: integer): gamespeed;

export declare function Jass_Constant_Native_ConvertPlacement(i: integer): placement;

export declare function Jass_Constant_Native_ConvertStartLocPrio(i: integer): startlocprio;

export declare function Jass_Constant_Native_ConvertGameDifficulty(i: integer): gamedifficulty;

export declare function Jass_Constant_Native_ConvertGameType(i: integer): gametype;

export declare function Jass_Constant_Native_ConvertMapFlag(i: integer): mapflag;

export declare function Jass_Constant_Native_ConvertMapVisibility(i: integer): mapvisibility;

export declare function Jass_Constant_Native_ConvertMapSetting(i: integer): mapsetting;

export declare function Jass_Constant_Native_ConvertMapDensity(i: integer): mapdensity;

export declare function Jass_Constant_Native_ConvertMapControl(i: integer): mapcontrol;

export declare function Jass_Constant_Native_ConvertPlayerColor(i: integer): playercolor;

export declare function Jass_Constant_Native_ConvertPlayerSlotState(i: integer): playerslotstate;

export declare function Jass_Constant_Native_ConvertVolumeGroup(i: integer): volumegroup;

export declare function Jass_Constant_Native_ConvertCameraField(i: integer): camerafield;

export declare function Jass_Constant_Native_ConvertBlendMode(i: integer): blendmode;

export declare function Jass_Constant_Native_ConvertRarityControl(i: integer): raritycontrol;

export declare function Jass_Constant_Native_ConvertTexMapFlags(i: integer): texmapflags;

export declare function Jass_Constant_Native_ConvertFogState(i: integer): fogstate;

export declare function Jass_Constant_Native_ConvertEffectType(i: integer): effectype;

export declare function Jass_Constant_Native_ConvertVersion(i: integer): version;

export declare function Jass_Constant_Native_ConvertItemType(i: integer): itemtype;

export declare function Jass_Constant_Native_ConvertAttackType(i: integer): attacktype;

export declare function Jass_Constant_Native_ConvertDamageType(i: integer): damagetype;

export declare function Jass_Constant_Native_ConvertWeaponType(i: integer): weapontype;

export declare function Jass_Constant_Native_ConvertSoundType(i: integer): soundtype;

export declare function Jass_Constant_Native_ConvertPathingType(i: integer): pathingtype;

export declare function Jass_Constant_Native_OrderId(orderIdString: string): integer;

export declare function Jass_Constant_Native_OrderId2String(orderId: integer): string;

export declare function Jass_Constant_Native_UnitId(unitIdString: string): integer;

export declare function Jass_Constant_Native_UnitId2String(unitId: integer): string;

export declare function Jass_Constant_Native_AbilityId(abilityIdString: string): integer;

export declare function Jass_Constant_Native_AbilityId2String(abilityId: integer): string;

export declare function Jass_Constant_Native_GetObjectName(objectId: integer): string;


export const FALSE = false;
export const TRUE = true;
export const JASS_MAX_ARRAY_SIZE = 8192;
export const PLAYER_NEUTRAL_PASSIVE = 15;
export const PLAYER_NEUTRAL_AGGRESSIVE = 12;

/*PlayerColor*/
export const PLAYER_COLOR_RED = Jass_Constant_Native_ConvertPlayerColor(0);
export const PLAYER_COLOR_BLUE = Jass_Constant_Native_ConvertPlayerColor(1);
export const PLAYER_COLOR_CYAN = Jass_Constant_Native_ConvertPlayerColor(2);
export const PLAYER_COLOR_PURPLE = Jass_Constant_Native_ConvertPlayerColor(3);
export const PLAYER_COLOR_YELLOW = Jass_Constant_Native_ConvertPlayerColor(4);
export const PLAYER_COLOR_ORANGE = Jass_Constant_Native_ConvertPlayerColor(5);
export const PLAYER_COLOR_GREEN = Jass_Constant_Native_ConvertPlayerColor(6);
export const PLAYER_COLOR_PINK = Jass_Constant_Native_ConvertPlayerColor(7);
export const PLAYER_COLOR_LIGHT_GRAY = Jass_Constant_Native_ConvertPlayerColor(8);
export const PLAYER_COLOR_LIGHT_BLUE = Jass_Constant_Native_ConvertPlayerColor(9);
export const PLAYER_COLOR_AQUA = Jass_Constant_Native_ConvertPlayerColor(10);
export const PLAYER_COLOR_BROWN = Jass_Constant_Native_ConvertPlayerColor(11);

/*Race*/
export const RACE_HUMAN = Jass_Constant_Native_ConvertRace(1);
export const RACE_ORC = Jass_Constant_Native_ConvertRace(2);
export const RACE_UNDEAD = Jass_Constant_Native_ConvertRace(3);
export const RACE_NIGHTELF = Jass_Constant_Native_ConvertRace(4);
export const RACE_DEMON = Jass_Constant_Native_ConvertRace(5);
export const RACE_OTHER = Jass_Constant_Native_ConvertRace(7);

/*GameResult*/
export const PLAYER_GAME_RESULT_VICTORY = Jass_Constant_Native_ConvertPlayerGameResult(0);
export const PLAYER_GAME_RESULT_DEFEAT = Jass_Constant_Native_ConvertPlayerGameResult(1);
export const PLAYER_GAME_RESULT_TIE = Jass_Constant_Native_ConvertPlayerGameResult(2);
export const PLAYER_GAME_RESULT_NEUTRAL = Jass_Constant_Native_ConvertPlayerGameResult(3);

export const ALLIANCE_PASSIVE = Jass_Constant_Native_ConvertAllianceType(0);
export const ALLIANCE_HELP_REQUEST = Jass_Constant_Native_ConvertAllianceType(1);
export const ALLIANCE_HELP_RESPONSE = Jass_Constant_Native_ConvertAllianceType(2);
export const ALLIANCE_SHARED_XP = Jass_Constant_Native_ConvertAllianceType(3);
export const ALLIANCE_SHARED_SPELLS = Jass_Constant_Native_ConvertAllianceType(4);
export const ALLIANCE_SHARED_VISION = Jass_Constant_Native_ConvertAllianceType(5);
export const ALLIANCE_SHARED_CONTROL = Jass_Constant_Native_ConvertAllianceType(6);
export const ALLIANCE_SHARED_ADVANCED_CONTROL = Jass_Constant_Native_ConvertAllianceType(7);
export const ALLIANCE_RESCUABLE = Jass_Constant_Native_ConvertAllianceType(8);
export const ALLIANCE_SHARED_VISION_FORCED = Jass_Constant_Native_ConvertAllianceType(9);


export const VERSION_REIGN_OF_CHAOS = Jass_Constant_Native_ConvertVersion(0);
export const VERSION_FROZEN_THRONE = Jass_Constant_Native_ConvertVersion(1);

export const ATTACK_TYPE_NORMAL = Jass_Constant_Native_ConvertAttackType(0);
export const ATTACK_TYPE_MELEE = Jass_Constant_Native_ConvertAttackType(1);
export const ATTACK_TYPE_PIERCE = Jass_Constant_Native_ConvertAttackType(2);
export const ATTACK_TYPE_SIEGE = Jass_Constant_Native_ConvertAttackType(3);
export const ATTACK_TYPE_MAGIC = Jass_Constant_Native_ConvertAttackType(4);
export const ATTACK_TYPE_CHAOS = Jass_Constant_Native_ConvertAttackType(5);
export const ATTACK_TYPE_HERO = Jass_Constant_Native_ConvertAttackType(6);

export const DAMAGE_TYPE_UNKNOWN = Jass_Constant_Native_ConvertDamageType(0);
export const DAMAGE_TYPE_NORMAL = Jass_Constant_Native_ConvertDamageType(4);
export const DAMAGE_TYPE_ENHANCED = Jass_Constant_Native_ConvertDamageType(5);
export const DAMAGE_TYPE_FIRE = Jass_Constant_Native_ConvertDamageType(8);
export const DAMAGE_TYPE_COLD = Jass_Constant_Native_ConvertDamageType(9);
export const DAMAGE_TYPE_LIGHTNING = Jass_Constant_Native_ConvertDamageType(10);
export const DAMAGE_TYPE_POISON = Jass_Constant_Native_ConvertDamageType(11);
export const DAMAGE_TYPE_DISEASE = Jass_Constant_Native_ConvertDamageType(12);
export const DAMAGE_TYPE_DIVINE = Jass_Constant_Native_ConvertDamageType(13);
export const DAMAGE_TYPE_MAGIC = Jass_Constant_Native_ConvertDamageType(14);
export const DAMAGE_TYPE_SONIC = Jass_Constant_Native_ConvertDamageType(15);
export const DAMAGE_TYPE_ACID = Jass_Constant_Native_ConvertDamageType(16);
export const DAMAGE_TYPE_FORCE = Jass_Constant_Native_ConvertDamageType(17);
export const DAMAGE_TYPE_DEATH = Jass_Constant_Native_ConvertDamageType(18);
export const DAMAGE_TYPE_MIND = Jass_Constant_Native_ConvertDamageType(19);
export const DAMAGE_TYPE_PLANT = Jass_Constant_Native_ConvertDamageType(20);
export const DAMAGE_TYPE_DEFENSIVE = Jass_Constant_Native_ConvertDamageType(21);
export const DAMAGE_TYPE_DEMOLITION = Jass_Constant_Native_ConvertDamageType(22);
export const DAMAGE_TYPE_SLOW_POISON = Jass_Constant_Native_ConvertDamageType(23);
export const DAMAGE_TYPE_SPIRIT_LINK = Jass_Constant_Native_ConvertDamageType(24);
export const DAMAGE_TYPE_SHADOW_STRIKE = Jass_Constant_Native_ConvertDamageType(25);
export const DAMAGE_TYPE_UNIVERSAL = Jass_Constant_Native_ConvertDamageType(26);

export const WEAPON_TYPE_WHOKNOWS = Jass_Constant_Native_ConvertWeaponType(0);
export const WEAPON_TYPE_METAL_LIGHT_CHOP = Jass_Constant_Native_ConvertWeaponType(1);
export const WEAPON_TYPE_METAL_MEDIUM_CHOP = Jass_Constant_Native_ConvertWeaponType(2);
export const WEAPON_TYPE_METAL_HEAVY_CHOP = Jass_Constant_Native_ConvertWeaponType(3);
export const WEAPON_TYPE_METAL_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(4);
export const WEAPON_TYPE_METAL_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(5);
export const WEAPON_TYPE_METAL_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(6);
export const WEAPON_TYPE_METAL_MEDIUM_BASH = Jass_Constant_Native_ConvertWeaponType(7);
export const WEAPON_TYPE_METAL_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(8);
export const WEAPON_TYPE_METAL_MEDIUM_STAB = Jass_Constant_Native_ConvertWeaponType(9);
export const WEAPON_TYPE_METAL_HEAVY_STAB = Jass_Constant_Native_ConvertWeaponType(10);
export const WEAPON_TYPE_WOOD_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(11);
export const WEAPON_TYPE_WOOD_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(12);
export const WEAPON_TYPE_WOOD_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(13);
export const WEAPON_TYPE_WOOD_LIGHT_BASH = Jass_Constant_Native_ConvertWeaponType(14);
export const WEAPON_TYPE_WOOD_MEDIUM_BASH = Jass_Constant_Native_ConvertWeaponType(15);
export const WEAPON_TYPE_WOOD_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(16);
export const WEAPON_TYPE_WOOD_LIGHT_STAB = Jass_Constant_Native_ConvertWeaponType(17);
export const WEAPON_TYPE_WOOD_MEDIUM_STAB = Jass_Constant_Native_ConvertWeaponType(18);
export const WEAPON_TYPE_CLAW_LIGHT_SLICE = Jass_Constant_Native_ConvertWeaponType(19);
export const WEAPON_TYPE_CLAW_MEDIUM_SLICE = Jass_Constant_Native_ConvertWeaponType(20);
export const WEAPON_TYPE_CLAW_HEAVY_SLICE = Jass_Constant_Native_ConvertWeaponType(21);
export const WEAPON_TYPE_AXE_MEDIUM_CHOP = Jass_Constant_Native_ConvertWeaponType(22);
export const WEAPON_TYPE_ROCK_HEAVY_BASH = Jass_Constant_Native_ConvertWeaponType(23);


export const PATHING_TYPE_ANY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_WALKABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_FLYABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_BUILDABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_PEONHARVESTPATHING = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_BLIGHTPATHING = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_FLOATABILITY = Jass_Constant_Native_ConvertPathingType(0);
export const PATHING_TYPE_AMPHIBIOUSPATHING = Jass_Constant_Native_ConvertPathingType(0);


export const RACE_PREF_HUMAN = Jass_Constant_Native_ConvertRacePref(1);
export const RACE_PREF_ORC = Jass_Constant_Native_ConvertRacePref(2);
export const RACE_PREF_NIGHTELF = Jass_Constant_Native_ConvertRacePref(4);
export const RACE_PREF_UNDEAD = Jass_Constant_Native_ConvertRacePref(8);
export const RACE_PREF_DEMON = Jass_Constant_Native_ConvertRacePref(16);
export const RACE_PREF_RANDOM = Jass_Constant_Native_ConvertRacePref(32);
export const RACE_PREF_USER_SELECTABLE = Jass_Constant_Native_ConvertRacePref(64);

export const MAP_CONTROL_USER = Jass_Constant_Native_ConvertMapControl(0);
export const MAP_CONTROL_COMPUTER = Jass_Constant_Native_ConvertMapControl(1);
export const MAP_CONTROL_RESCUABLE = Jass_Constant_Native_ConvertMapControl(2);
export const MAP_CONTROL_NEUTRAL = Jass_Constant_Native_ConvertMapControl(3);
export const MAP_CONTROL_CREEP = Jass_Constant_Native_ConvertMapControl(4);
export const MAP_CONTROL_NONE = Jass_Constant_Native_ConvertMapControl(5);

export const GAME_TYPE_MELEE = Jass_Constant_Native_ConvertGameType(1);
export const GAME_TYPE_FFA = Jass_Constant_Native_ConvertGameType(2);
export const GAME_TYPE_USE_MAP_SETTINGS = Jass_Constant_Native_ConvertGameType(4);
export const GAME_TYPE_BLIZ = Jass_Constant_Native_ConvertGameType(8);
export const GAME_TYPE_ONE_TO_ONE = Jass_Constant_Native_ConvertGameType(16);
export const GAME_TYPE_TWO_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(32);
export const GAME_TYPE_THREE_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(64);
export const GAME_TYPE_FOUR_TEAM_PLAY = Jass_Constant_Native_ConvertGameType(128);

export const MAP_FOG_HIDE_TERRAIN = Jass_Constant_Native_ConvertMapFlag(1);
export const MAP_FOG_MAP_EXPLORED = Jass_Constant_Native_ConvertMapFlag(2);
export const MAP_FOG_ALWAYS_VISIBLE = Jass_Constant_Native_ConvertMapFlag(4);

export const MAP_USE_HANDICAPS = Jass_Constant_Native_ConvertMapFlag(8);
export const MAP_OBSERVERS = Jass_Constant_Native_ConvertMapFlag(16);
export const MAP_OBSERVERS_ON_DEATH = Jass_Constant_Native_ConvertMapFlag(32);
export const MAP_FIXED_COLORS = Jass_Constant_Native_ConvertMapFlag(128);
export const MAP_LOCK_RESOURCE_TRADING = Jass_Constant_Native_ConvertMapFlag(256);
export const MAP_RESOURCE_TRADING_ALLIES_ONLY = Jass_Constant_Native_ConvertMapFlag(512);
export const MAP_LOCK_ALLIANCE_CHANGES = Jass_Constant_Native_ConvertMapFlag(1024);
export const MAP_ALLIANCE_CHANGES_HIDDEN = Jass_Constant_Native_ConvertMapFlag(2048);
export const MAP_CHEATS = Jass_Constant_Native_ConvertMapFlag(4096);
export const MAP_CHEATS_HIDDEN = Jass_Constant_Native_ConvertMapFlag(8192);
export const MAP_LOCK_SPEED = Jass_Constant_Native_ConvertMapFlag(8192 * 2);
export const MAP_LOCK_RANDOM_SEED = Jass_Constant_Native_ConvertMapFlag(8192 * 4);
export const MAP_SHARED_ADVANCED_CONTROL = Jass_Constant_Native_ConvertMapFlag(8192 * 8);
export const MAP_RANDOM_HERO = Jass_Constant_Native_ConvertMapFlag(8192 * 16);
export const MAP_RANDOM_RACES = Jass_Constant_Native_ConvertMapFlag(8192 * 32);
export const MAP_RELOADED = Jass_Constant_Native_ConvertMapFlag(8192 * 64);

export const MAP_PLACEMENT_RANDOM = Jass_Constant_Native_ConvertPlacement(0);
export const MAP_PLACEMENT_FIXED = Jass_Constant_Native_ConvertPlacement(1);
export const MAP_PLACEMENT_USE_MAP_SETTINGS = Jass_Constant_Native_ConvertPlacement(2);
export const MAP_PLACEMENT_TEAMS_TOGETHER = Jass_Constant_Native_ConvertPlacement(3);


export const MAP_LOC_PRIO_LOW = Jass_Constant_Native_ConvertStartLocPrio(0);
export const MAP_LOC_PRIO_HIGH = Jass_Constant_Native_ConvertStartLocPrio(1);
export const MAP_LOC_PRIO_NOT = Jass_Constant_Native_ConvertStartLocPrio(2);

export const MAP_DENSITY_NONE = Jass_Constant_Native_ConvertMapDensity(0);
export const MAP_DENSITY_LIGHT = Jass_Constant_Native_ConvertMapDensity(1);
export const MAP_DENSITY_MEDIUM = Jass_Constant_Native_ConvertMapDensity(2);
export const MAP_DENSITY_HEAVY = Jass_Constant_Native_ConvertMapDensity(3);

export const MAP_DIFFICULTY_EASY = Jass_Constant_Native_ConvertGameDifficulty(0);
export const MAP_DIFFICULTY_NORMAL = Jass_Constant_Native_ConvertGameDifficulty(1);
export const MAP_DIFFICULTY_HARD = Jass_Constant_Native_ConvertGameDifficulty(2);
export const MAP_DIFFICULTY_INSANE = Jass_Constant_Native_ConvertGameDifficulty(3);

export const MAP_SPEED_SLOWEST = Jass_Constant_Native_ConvertGameSpeed(0);
export const MAP_SPEED_SLOW = Jass_Constant_Native_ConvertGameSpeed(1);
export const MAP_SPEED_NORMAL = Jass_Constant_Native_ConvertGameSpeed(2);
export const MAP_SPEED_FAST = Jass_Constant_Native_ConvertGameSpeed(3);
export const MAP_SPEED_FASTEST = Jass_Constant_Native_ConvertGameSpeed(4);

export const PLAYER_SLOT_STATE_EMPTY = Jass_Constant_Native_ConvertPlayerSlotState(0);
export const PLAYER_SLOT_STATE_PLAYING = Jass_Constant_Native_ConvertPlayerSlotState(1);
export const PLAYER_SLOT_STATE_LEFT = Jass_Constant_Native_ConvertPlayerSlotState(2);


export const SOUND_VOLUMEGROUP_UNITMOVEMENT = Jass_Constant_Native_ConvertVolumeGroup(0);
export const SOUND_VOLUMEGROUP_UNITSOUNDS = Jass_Constant_Native_ConvertVolumeGroup(1);
export const SOUND_VOLUMEGROUP_COMBAT = Jass_Constant_Native_ConvertVolumeGroup(2);
export const SOUND_VOLUMEGROUP_SPELLS = Jass_Constant_Native_ConvertVolumeGroup(3);
export const SOUND_VOLUMEGROUP_UI = Jass_Constant_Native_ConvertVolumeGroup(4);
export const SOUND_VOLUMEGROUP_MUSIC = Jass_Constant_Native_ConvertVolumeGroup(5);
export const SOUND_VOLUMEGROUP_AMBIENTSOUNDS = Jass_Constant_Native_ConvertVolumeGroup(6);
export const SOUND_VOLUMEGROUP_FIRE = Jass_Constant_Native_ConvertVolumeGroup(7);

export const GAME_STATE_DIVINE_INTERVENTION = Jass_Constant_Native_ConvertIGameState(0);
export const GAME_STATE_DISCONNECTED = Jass_Constant_Native_ConvertIGameState(1);
export const GAME_STATE_TIME_OF_DAY = Jass_Constant_Native_ConvertIGameState(2);

export const PLAYER_STATE_GAME_RESULT = Jass_Constant_Native_ConvertPlayerState(0);
export const PLAYER_STATE_RESOURCE_GOLD = Jass_Constant_Native_ConvertPlayerState(1);
export const PLAYER_STATE_RESOURCE_LUMBER = Jass_Constant_Native_ConvertPlayerState(2);
export const PLAYER_STATE_RESOURCE_HERO_TOKENS = Jass_Constant_Native_ConvertPlayerState(3);
export const PLAYER_STATE_RESOURCE_FOOD_CAP = Jass_Constant_Native_ConvertPlayerState(4);
export const PLAYER_STATE_RESOURCE_FOOD_USED = Jass_Constant_Native_ConvertPlayerState(5);
export const PLAYER_STATE_FOOD_CAP_CEILING = Jass_Constant_Native_ConvertPlayerState(6);
export const PLAYER_STATE_GIVES_BOUNTY = Jass_Constant_Native_ConvertPlayerState(7);
export const PLAYER_STATE_ALLIED_VICTORY = Jass_Constant_Native_ConvertPlayerState(8);
export const PLAYER_STATE_PLACED = Jass_Constant_Native_ConvertPlayerState(9);
export const PLAYER_STATE_OBSERVER_ON_DEATH = Jass_Constant_Native_ConvertPlayerState(10);
export const PLAYER_STATE_OBSERVER = Jass_Constant_Native_ConvertPlayerState(11);
export const PLAYER_STATE_UNFOLLOWABLE = Jass_Constant_Native_ConvertPlayerState(12);
export const PLAYER_STATE_GOLD_UPKEEP_RATE = Jass_Constant_Native_ConvertPlayerState(13);
export const PLAYER_STATE_LUMBER_UPKEEP_RATE = Jass_Constant_Native_ConvertPlayerState(14);
export const PLAYER_STATE_GOLD_GATHERED = Jass_Constant_Native_ConvertPlayerState(15);
export const PLAYER_STATE_LUMBER_GATHERED = Jass_Constant_Native_ConvertPlayerState(16);
export const PLAYER_STATE_NO_CREEP_SLEEP = Jass_Constant_Native_ConvertPlayerState(25);


export const UNIT_STATE_LIFE = Jass_Constant_Native_ConvertUnitState(0);
export const UNIT_STATE_MAX_LIFE = Jass_Constant_Native_ConvertUnitState(1);
export const UNIT_STATE_MANA = Jass_Constant_Native_ConvertUnitState(2);
export const UNIT_STATE_MAX_MANA = Jass_Constant_Native_ConvertUnitState(3);

export const AI_DIFFICULTY_NEWBIE = Jass_Constant_Native_ConvertAIDifficulty(0);
export const AI_DIFFICULTY_NORMAL = Jass_Constant_Native_ConvertAIDifficulty(1);
export const AI_DIFFICULTY_INSANE = Jass_Constant_Native_ConvertAIDifficulty(2);


export const PLAYER_SCORE_UNITS_TRAINED = Jass_Constant_Native_ConvertPlayerScore(0);
export const PLAYER_SCORE_UNITS_KILLED = Jass_Constant_Native_ConvertPlayerScore(1);
export const PLAYER_SCORE_STRUCT_BUILT = Jass_Constant_Native_ConvertPlayerScore(2);
export const PLAYER_SCORE_STRUCT_RAZED = Jass_Constant_Native_ConvertPlayerScore(3);
export const PLAYER_SCORE_TECH_PERCENT = Jass_Constant_Native_ConvertPlayerScore(4);
export const PLAYER_SCORE_FOOD_MAXPROD = Jass_Constant_Native_ConvertPlayerScore(5);
export const PLAYER_SCORE_FOOD_MAXUSED = Jass_Constant_Native_ConvertPlayerScore(6);
export const PLAYER_SCORE_HEROES_KILLED = Jass_Constant_Native_ConvertPlayerScore(7);
export const PLAYER_SCORE_ITEMS_GAINED = Jass_Constant_Native_ConvertPlayerScore(8);
export const PLAYER_SCORE_MERCS_HIRED = Jass_Constant_Native_ConvertPlayerScore(9);
export const PLAYER_SCORE_GOLD_MINED_TOTAL = Jass_Constant_Native_ConvertPlayerScore(10);
export const PLAYER_SCORE_GOLD_MINED_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(11);
export const PLAYER_SCORE_GOLD_LOST_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(12);
export const PLAYER_SCORE_GOLD_LOST_TAX = Jass_Constant_Native_ConvertPlayerScore(13);
export const PLAYER_SCORE_GOLD_GIVEN = Jass_Constant_Native_ConvertPlayerScore(14);
export const PLAYER_SCORE_GOLD_RECEIVED = Jass_Constant_Native_ConvertPlayerScore(15);
export const PLAYER_SCORE_LUMBER_TOTAL = Jass_Constant_Native_ConvertPlayerScore(16);
export const PLAYER_SCORE_LUMBER_LOST_UPKEEP = Jass_Constant_Native_ConvertPlayerScore(17);
export const PLAYER_SCORE_LUMBER_LOST_TAX = Jass_Constant_Native_ConvertPlayerScore(18);
export const PLAYER_SCORE_LUMBER_GIVEN = Jass_Constant_Native_ConvertPlayerScore(19);
export const PLAYER_SCORE_LUMBER_RECEIVED = Jass_Constant_Native_ConvertPlayerScore(20);
export const PLAYER_SCORE_UNIT_TOTAL = Jass_Constant_Native_ConvertPlayerScore(21);
export const PLAYER_SCORE_HERO_TOTAL = Jass_Constant_Native_ConvertPlayerScore(22);
export const PLAYER_SCORE_RESOURCE_TOTAL = Jass_Constant_Native_ConvertPlayerScore(23);
export const PLAYER_SCORE_TOTAL = Jass_Constant_Native_ConvertPlayerScore(24);


/*Events*/

export const EVENT_GAME_VICTORY = Jass_Constant_Native_ConvertGameEvent(0);
export const EVENT_GAME_END_LEVEL = Jass_Constant_Native_ConvertGameEvent(1);
export const EVENT_GAME_VARIABLE_LIMIT = Jass_Constant_Native_ConvertGameEvent(2);
export const EVENT_GAME_STATE_LIMIT = Jass_Constant_Native_ConvertGameEvent(3);
export const EVENT_GAME_TIMER_EXPIRED = Jass_Constant_Native_ConvertGameEvent(4);
export const EVENT_GAME_ENTER_REGION = Jass_Constant_Native_ConvertGameEvent(5);
export const EVENT_GAME_LEAVE_REGION = Jass_Constant_Native_ConvertGameEvent(6);
export const EVENT_GAME_TRACKABLE_HIT = Jass_Constant_Native_ConvertGameEvent(7);
export const EVENT_GAME_TRACKABLE_TRACK = Jass_Constant_Native_ConvertGameEvent(8);
export const EVENT_GAME_SHOW_SKILL = Jass_Constant_Native_ConvertGameEvent(9);
export const EVENT_GAME_BUILD_SUBMENU = Jass_Constant_Native_ConvertGameEvent(10);


export const EVENT_PLAYER_STATE_LIMIT = Jass_Constant_Native_ConvertPlayerEvent(11);
export const EVENT_PLAYER_ALLIANCE_CHANGED = Jass_Constant_Native_ConvertPlayerEvent(12);
export const EVENT_PLAYER_DEFEAT = Jass_Constant_Native_ConvertPlayerEvent(13);
export const EVENT_PLAYER_VICTORY = Jass_Constant_Native_ConvertPlayerEvent(14);
export const EVENT_PLAYER_LEAVE = Jass_Constant_Native_ConvertPlayerEvent(15);
export const EVENT_PLAYER_CHAT = Jass_Constant_Native_ConvertPlayerEvent(16);
export const EVENT_PLAYER_END_CINEMATIC = Jass_Constant_Native_ConvertPlayerEvent(17);

export const EVENT_PLAYER_UNIT_ATTACKED = Jass_Constant_Native_ConvertUnitEvent(18);
export const EVENT_PLAYER_UNIT_RESCUED = Jass_Constant_Native_ConvertUnitEvent(19);
export const EVENT_PLAYER_UNIT_DEATH = Jass_Constant_Native_ConvertUnitEvent(20);
export const EVENT_PLAYER_UNIT_DECAY = Jass_Constant_Native_ConvertUnitEvent(21);
export const EVENT_PLAYER_UNIT_DETECTED = Jass_Constant_Native_ConvertUnitEvent(22);
export const EVENT_PLAYER_UNIT_HIDDEN = Jass_Constant_Native_ConvertUnitEvent(23);
export const EVENT_PLAYER_UNIT_SELECTED = Jass_Constant_Native_ConvertUnitEvent(24);
export const EVENT_PLAYER_UNIT_DESELECTED = Jass_Constant_Native_ConvertUnitEvent(25);
export const EVENT_PLAYER_UNIT_CONSTRUCT_STATR = Jass_Constant_Native_ConvertUnitEvent(26);
export const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native_ConvertUnitEvent(27);
export const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native_ConvertUnitEvent(28);
export const EVENT_PLAYER_UNIT_UPGRADE_START = Jass_Constant_Native_ConvertUnitEvent(29);
export const EVENT_PLAYER_UNIT_UPGRADE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(30);
export const EVENT_PLAYER_UNIT_UPGRADE_FINISH = Jass_Constant_Native_ConvertUnitEvent(31);
export const EVENT_PLAYER_UNIT_TRAIN_START = Jass_Constant_Native_ConvertUnitEvent(32);
export const EVENT_PLAYER_UNIT_TRAIN_CANCEL = Jass_Constant_Native_ConvertUnitEvent(33);
export const EVENT_PLAYER_UNIT_TRAIN_FINISH = Jass_Constant_Native_ConvertUnitEvent(34);
export const EVENT_PLAYER_UNIT_RESEARCH_START = Jass_Constant_Native_ConvertUnitEvent(35);
export const EVENT_PLAYER_UNIT_RESEARCH_CANCEL = Jass_Constant_Native_ConvertUnitEvent(36);
export const EVENT_PLAYER_UNIT_RESEARCH_FINISH = Jass_Constant_Native_ConvertUnitEvent(37);
export const EVENT_PLAYER_UNIT_ISSUED_ORDER = Jass_Constant_Native_ConvertUnitEvent(38);
export const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native_ConvertUnitEvent(39);
export const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native_ConvertUnitEvent(40);
export const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = Jass_Constant_Native_ConvertUnitEvent(40);
export const EVENT_PLAYER_HERO_LEVEL = Jass_Constant_Native_ConvertUnitEvent(41);
export const EVENT_PLAYER_HERO_SKILL = Jass_Constant_Native_ConvertUnitEvent(42);
export const EVENT_PLAYER_HERO_REVIVABLE = Jass_Constant_Native_ConvertUnitEvent(43);
export const EVENT_PLAYER_HERO_REVIVE_START = Jass_Constant_Native_ConvertUnitEvent(44);
export const EVENT_PLAYER_HERO_REVIVE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(45);
export const EVENT_PLAYER_HERO_REVIVE_FINISH = Jass_Constant_Native_ConvertUnitEvent(46);
export const EVENT_PLAYER_UNIT_SUMMON = Jass_Constant_Native_ConvertUnitEvent(47);
export const EVENT_PLAYER_UNIT_DROP_ITEM = Jass_Constant_Native_ConvertUnitEvent(48);
export const EVENT_PLAYER_UNIT_PICKUP_ITEM = Jass_Constant_Native_ConvertUnitEvent(49);
export const EVENT_PLAYER_UNIT_USE_ITEM = Jass_Constant_Native_ConvertUnitEvent(50);
export const EVENT_PLAYER_UNIT_LOADED = Jass_Constant_Native_ConvertUnitEvent(51);

export const EVENT_UNIT_DAMAGED = Jass_Constant_Native_ConvertUnitEvent(52);
export const EVENT_UNIT_DEATH = Jass_Constant_Native_ConvertUnitEvent(53);
export const EVENT_UNIT_DECAY = Jass_Constant_Native_ConvertUnitEvent(54);
export const EVENT_UNIT_DETECTED = Jass_Constant_Native_ConvertUnitEvent(55);
export const EVENT_UNIT_HIDDEN = Jass_Constant_Native_ConvertUnitEvent(56);
export const EVENT_UNIT_SELECTED = Jass_Constant_Native_ConvertUnitEvent(57);
export const EVENT_UNIT_DESELECTED = Jass_Constant_Native_ConvertUnitEvent(58);
export const EVENT_UNIT_STATE_LIMIT = Jass_Constant_Native_ConvertUnitEvent(59);
export const EVENT_UNIT_ACQUIRED_TARGET = Jass_Constant_Native_ConvertUnitEvent(60);
export const EVENT_UNIT_TARGET_IN_RANGE = Jass_Constant_Native_ConvertUnitEvent(61);
export const EVENT_UNIT_ATTACKED = Jass_Constant_Native_ConvertUnitEvent(62);
export const EVENT_UNIT_RESCUED = Jass_Constant_Native_ConvertUnitEvent(63);
export const EVENT_UNIT_CONSTRUCT_CANCEL = Jass_Constant_Native_ConvertUnitEvent(64);
export const EVENT_UNIT_CONSTRUCT_FINISH = Jass_Constant_Native_ConvertUnitEvent(65);
export const EVENT_UNIT_UPGRADE_START = Jass_Constant_Native_ConvertUnitEvent(66);
export const EVENT_UNIT_UPGRADE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(67);
export const EVENT_UNIT_UPGRADE_FINISH = Jass_Constant_Native_ConvertUnitEvent(68);
export const EVENT_UNIT_TRAIN_START = Jass_Constant_Native_ConvertUnitEvent(69);
export const EVENT_UNIT_TRAIN_CANCEL = Jass_Constant_Native_ConvertUnitEvent(70);
export const EVENT_UNIT_TRAIN_FINISH = Jass_Constant_Native_ConvertUnitEvent(71);
export const EVENT_UNIT_RESEARCH_START = Jass_Constant_Native_ConvertUnitEvent(72);
export const EVENT_UNIT_RESEARCH_CANCEL = Jass_Constant_Native_ConvertUnitEvent(73);
export const EVENT_UNIT_RESEARCH_FINISH = Jass_Constant_Native_ConvertUnitEvent(74);
export const EVENT_UNIT_ISSUED_ORDER = Jass_Constant_Native_ConvertUnitEvent(75);
export const EVENT_UNIT_ISSUED_POINT_ORDER = Jass_Constant_Native_ConvertUnitEvent(76);
export const EVENT_UNIT_ISSUED_TARGET_ORDER = Jass_Constant_Native_ConvertUnitEvent(77);
export const EVENT_UNIT_HERO_LEVEL = Jass_Constant_Native_ConvertUnitEvent(78);
export const EVENT_UNIT_HERO_SKILL = Jass_Constant_Native_ConvertUnitEvent(79);
export const EVENT_UNIT_HERO_REVIVABLE = Jass_Constant_Native_ConvertUnitEvent(80);
export const EVENT_UNIT_HERO_REVIVE_START = Jass_Constant_Native_ConvertUnitEvent(81);
export const EVENT_UNIT_HERO_REVIVE_CANCEL = Jass_Constant_Native_ConvertUnitEvent(82);
export const EVENT_UNIT_HERO_REVIVE_FINISH = Jass_Constant_Native_ConvertUnitEvent(83);
export const EVENT_UNIT_SUMMON = Jass_Constant_Native_ConvertUnitEvent(84);
export const EVENT_UNIT_DROP_ITEM = Jass_Constant_Native_ConvertUnitEvent(85);
export const EVENT_UNIT_PICKUP_ITEM = Jass_Constant_Native_ConvertUnitEvent(86);
export const EVENT_UNIT_USE_ITEM = Jass_Constant_Native_ConvertUnitEvent(87);
export const EVENT_UNIT_LOADED = Jass_Constant_Native_ConvertUnitEvent(88);
export const EVENT_UNIT_WIDGET_DEATH = Jass_Constant_Native_ConvertWidgetEvent(89);

export const EVENT_DIALOG_BUTTON_CLICK = Jass_Constant_Native_ConvertDialogEvent(90);
export const EVENT_DIALOG_CLICK = Jass_Constant_Native_ConvertDialogEvent(91);

export const EVENT_GAME_LOADED = Jass_Constant_Native_ConvertGameEvent(256);
export const EVENT_GAME_TOURNAMENT_FINISH_SOON = Jass_Constant_Native_ConvertGameEvent(257);
export const EVENT_GAME_TOURNAMENT_FINISH_NOW = Jass_Constant_Native_ConvertGameEvent(258);
export const EVENT_GAME_GAME_SAVE = Jass_Constant_Native_ConvertGameEvent(259);

export const EVENT_PLAYER_ARROW_LEFT_DOWN = Jass_Constant_Native_ConvertPlayerEvent(261);
export const EVENT_PLAYER_ARROW_LEFT_UP = Jass_Constant_Native_ConvertPlayerEvent(262);
export const EVENT_PLAYER_ARROW_RIGHT_DOWN = Jass_Constant_Native_ConvertPlayerEvent(263);
export const EVENT_PLAYER_ARROW_RIGHT_UP = Jass_Constant_Native_ConvertPlayerEvent(264);
export const EVENT_PLAYER_ARROW_DOWN_DOWN = Jass_Constant_Native_ConvertPlayerEvent(265);
export const EVENT_PLAYER_ARROW_DOWN_UP = Jass_Constant_Native_ConvertPlayerEvent(266);
export const EVENT_PLAYER_ARROW_UP_DOWN = Jass_Constant_Native_ConvertPlayerEvent(267);
export const EVENT_PLAYER_ARROW_UP_UP = Jass_Constant_Native_ConvertPlayerEvent(268);

export const EVENT_PLAYER_UNIT_SELL = Jass_Constant_Native_ConvertPlayerUnitEvent(269);
export const EVENT_PLAYER_UNIT_CHANGE_OWNER = Jass_Constant_Native_ConvertPlayerUnitEvent(270);
export const EVENT_PLAYER_UNIT_SELL_ITEM = Jass_Constant_Native_ConvertPlayerUnitEvent(271);
export const EVENT_PLAYER_UNIT_SPELL_CHANNEL = Jass_Constant_Native_ConvertPlayerUnitEvent(272);
export const EVENT_PLAYER_UNIT_SPELL_CAST = Jass_Constant_Native_ConvertPlayerUnitEvent(273);
export const EVENT_PLAYER_UNIT_SPELL_EFFECT = Jass_Constant_Native_ConvertPlayerUnitEvent(274);
export const EVENT_PLAYER_UNIT_SPELL_FINISH = Jass_Constant_Native_ConvertPlayerUnitEvent(275);
export const EVENT_PLAYER_UNIT_SPELL_ENDCAST = Jass_Constant_Native_ConvertPlayerUnitEvent(276);
export const EVENT_PLAYER_UNIT_PAWN_ITEM = Jass_Constant_Native_ConvertPlayerUnitEvent(277);

export const EVENT_UNIT_SELL = Jass_Constant_Native_ConvertUnitEvent(286);
export const EVENT_UNIT_CHANGE_OWNER = Jass_Constant_Native_ConvertUnitEvent(287);
export const EVENT_UNIT_SELL_ITEM = Jass_Constant_Native_ConvertUnitEvent(288);
export const EVENT_UNIT_SPELL_CHANNEL = Jass_Constant_Native_ConvertUnitEvent(289);
export const EVENT_UNIT_SPELL_CAST = Jass_Constant_Native_ConvertUnitEvent(290);
export const EVENT_UNIT_SPELL_EFFECT = Jass_Constant_Native_ConvertUnitEvent(291);
export const EVENT_UNIT_SPELL_FINISH = Jass_Constant_Native_ConvertUnitEvent(292);
export const EVENT_UNIT_SPELL_ENDCAST = Jass_Constant_Native_ConvertUnitEvent(293);
export const EVENT_UNIT_PAWN_ITEM = Jass_Constant_Native_ConvertUnitEvent(294);

export const LESS_THAN = Jass_Constant_Native_ConvertLimitOp(0);
export const LESS_THAN_OR_EQUAL = Jass_Constant_Native_ConvertLimitOp(1);
export const EQUAL = Jass_Constant_Native_ConvertLimitOp(2);
export const GREATER_THAN_OR_EQUAL = Jass_Constant_Native_ConvertLimitOp(3);
export const GREATER_THAN = Jass_Constant_Native_ConvertLimitOp(4);
export const NOT_EQUAL = Jass_Constant_Native_ConvertLimitOp(5);

export const UNIT_TYPE_HERO = Jass_Constant_Native_ConvertUnitType(0);
export const UNIT_TYPE_DEAD = Jass_Constant_Native_ConvertUnitType(1);
export const UNIT_TYPE_STRUCTURE = Jass_Constant_Native_ConvertUnitType(2);
export const UNIT_TYPE_FLYING = Jass_Constant_Native_ConvertUnitType(3);
export const UNIT_TYPE_GROUND = Jass_Constant_Native_ConvertUnitType(4);
export const UNIT_TYPE_ATTACKS_FLYING = Jass_Constant_Native_ConvertUnitType(5);
export const UNIT_TYPE_ATTACKS_GROUND = Jass_Constant_Native_ConvertUnitType(6);
export const UNIT_TYPE_MELEE_ATTACKER = Jass_Constant_Native_ConvertUnitType(7);
export const UNIT_TYPE_RANGED_ATTACKER = Jass_Constant_Native_ConvertUnitType(8);
export const UNIT_TYPE_GIANT = Jass_Constant_Native_ConvertUnitType(9);
export const UNIT_TYPE_SUMMONED = Jass_Constant_Native_ConvertUnitType(10);
export const UNIT_TYPE_STUNNED = Jass_Constant_Native_ConvertUnitType(11);
export const UNIT_TYPE_PLAGUED = Jass_Constant_Native_ConvertUnitType(12);
export const UNIT_TYPE_SNARED = Jass_Constant_Native_ConvertUnitType(13);
export const UNIT_TYPE_UNDEAD = Jass_Constant_Native_ConvertUnitType(14);
export const UNIT_TYPE_MECHANICAL = Jass_Constant_Native_ConvertUnitType(15);
export const UNIT_TYPE_PEON = Jass_Constant_Native_ConvertUnitType(16);
export const UNIT_TYPE_SAPPER = Jass_Constant_Native_ConvertUnitType(17);
export const UNIT_TYPE_TOWNHALL = Jass_Constant_Native_ConvertUnitType(18);
export const UNIT_TYPE_ANCIENT = Jass_Constant_Native_ConvertUnitType(19);
export const UNIT_TYPE_TAUREN = Jass_Constant_Native_ConvertUnitType(20);
export const UNIT_TYPE_POISONED = Jass_Constant_Native_ConvertUnitType(21);
export const UNIT_TYPE_POLYMORPHED = Jass_Constant_Native_ConvertUnitType(22);
export const UNIT_TYPE_SLEEPING = Jass_Constant_Native_ConvertUnitType(23);
export const UNIT_TYPE_RESISTANT = Jass_Constant_Native_ConvertUnitType(24);
export const UNIT_TYPE_ETHEREAL = Jass_Constant_Native_ConvertUnitType(25);
export const UNIT_TYPE_MAGIC_IMMUNE = Jass_Constant_Native_ConvertUnitType(26);

export const ITEM_TYPE_PERMANENT = Jass_Constant_Native_ConvertItemType(0);
export const ITEM_TYPE_CHARGED = Jass_Constant_Native_ConvertItemType(1);
export const ITEM_TYPE_POWERUP = Jass_Constant_Native_ConvertItemType(2);
export const ITEM_TYPE_ARTIFACT = Jass_Constant_Native_ConvertItemType(3);
export const ITEM_TYPE_PURCHASABLE = Jass_Constant_Native_ConvertItemType(4);
export const ITEM_TYPE_CAMPAIGN = Jass_Constant_Native_ConvertItemType(5);
export const ITEM_TYPE_MISCELLANEOUS = Jass_Constant_Native_ConvertItemType(6);
export const ITEM_TYPE_UNKNOWN = Jass_Constant_Native_ConvertItemType(7);
export const ITEM_TYPE_ANY = Jass_Constant_Native_ConvertItemType(8);
export const ITEM_TYPE_TOME = Jass_Constant_Native_ConvertItemType(2);

export const CAMERA_FIELD_TARGET_DISTANCE = Jass_Constant_Native_ConvertCameraField(0);
export const CAMERA_FIELD_FARZ = Jass_Constant_Native_ConvertCameraField(1);
export const CAMERA_FIELD_ANGLE_OF_ATTACK = Jass_Constant_Native_ConvertCameraField(2);
export const CAMERA_FIELD_FIELD_OF_VIEW = Jass_Constant_Native_ConvertCameraField(3);
export const CAMERA_FIELD_ROLL = Jass_Constant_Native_ConvertCameraField(4);
export const CAMERA_FIELD_ROTATION = Jass_Constant_Native_ConvertCameraField(5);
export const CAMERA_FIELD_ZOFFSET = Jass_Constant_Native_ConvertCameraField(6);

export const BLEND_MODE_NONE = Jass_Constant_Native_ConvertBlendMode(0);
export const BLEND_MODE_DONT_CARE = Jass_Constant_Native_ConvertBlendMode(0);
export const BLEND_MODE_KEYALPHA = Jass_Constant_Native_ConvertBlendMode(1);
export const BLEND_MODE_BLEND = Jass_Constant_Native_ConvertBlendMode(2);
export const BLEND_MODE_ADDITIVE = Jass_Constant_Native_ConvertBlendMode(3);
export const BLEND_MODE_MODULATE = Jass_Constant_Native_ConvertBlendMode(4);
export const BLEND_MODE_MODULATE_2X = Jass_Constant_Native_ConvertBlendMode(5);

export const RARITY_FREQUENT = Jass_Constant_Native_ConvertRarityControl(0);
export const RARITY_RARE = Jass_Constant_Native_ConvertRarityControl(1);

export const TEXMAP_FLAG_NONE = Jass_Constant_Native_ConvertTexMapFlags(0);
export const TEXMAP_FLAG_WRAP_U = Jass_Constant_Native_ConvertTexMapFlags(1);
export const TEXMAP_FLAG_WRAP_V = Jass_Constant_Native_ConvertTexMapFlags(2);
export const TEXMAP_FLAG_WRAP_UV = Jass_Constant_Native_ConvertTexMapFlags(3);

export const FOG_OF_WAR_MASKED = Jass_Constant_Native_ConvertFogState(1);
export const FOG_OF_WAR_FOGGED = Jass_Constant_Native_ConvertFogState(2);
export const FOG_OF_WAR_VISIBLE = Jass_Constant_Native_ConvertFogState(4);

export const CAMERA_MARGIN_LEFT = 0;
export const CAMERA_MARGIN_RIGHT = 1;
export const CAMERA_MARGIN_TOP = 2;
export const CAMERA_MARGIN_BOTTOM = 3;

export const EFFECT_TYPE_EFFECT = Jass_Constant_Native_ConvertEffectType(0);
export const EFFECT_TYPE_TARGET = Jass_Constant_Native_ConvertEffectType(1);
export const EFFECT_TYPE_CASTER = Jass_Constant_Native_ConvertEffectType(2);
export const EFFECT_TYPE_SPECIAL = Jass_Constant_Native_ConvertEffectType(3);
export const EFFECT_TYPE_AREA_EFFECT = Jass_Constant_Native_ConvertEffectType(4);
export const EFFECT_TYPE_MISSILE = Jass_Constant_Native_ConvertEffectType(5);
export const EFFECT_TYPE_LIGHTNING = Jass_Constant_Native_ConvertEffectType(6);

export const SOUND_TYPE_EFFECT = Jass_Constant_Native_ConvertSoundType(0);
export const SOUND_TYPE_EFFECT_LOOPED = Jass_Constant_Native_ConvertSoundType(1);

/*Math*/
export declare function Jass_Native_Deg2Rad(degrees: real): real;

export declare function Jass_Native_Rad2Deg(radians: real): real;

export declare function Jass_Native_Sin(radians: real): real;

export declare function Jass_Native_Cos(radians: real): real;

export declare function Jass_Native_Tan(radians: real): real;

export declare function Jass_Native_Asin(y: real): real;

export declare function Jass_Native_Acos(x: real): real;

export declare function Jass_Native_Atan(x: real): real;

export declare function Jass_Native_Atan2(x: real): real;

export declare function Jass_Native_SquareRoot(x: real): real;

export declare function Jass_Native_Pow(x: real, power: real): real;


/*Utility*/
export declare function Jass_Native_I2R(i: integer): real;

export declare function Jass_Native_R2I(r: real): integer;

export declare function Jass_Native_I2S(i: integer): string;

export declare function Jass_Native_R2S(r: real): String;

export declare function Jass_Native_R2SW(r: real, width: integer, precision: integer): string;

export declare function Jass_Native_S2I(s: string): integer;

export declare function Jass_Native_S2R(s: string): real;

export declare function Jass_Native_GetHandleId(h: handle): integer;

export declare function Jass_Native_SubString(source: string, start: integer, end: integer): string;

export declare function Jass_Native_StringLength(s: string): integer;

export declare function Jass_Native_StringCase(source: string, upper: boolean): string;

export declare function Jass_Native_StringHasH(s: string): integer;

export declare function Jass_Native_GetLocalizedString(source: string): string;

export declare function Jass_Native_GetLocalizedHotKey(source: string): integer;


export declare function Jass_Native_Native_SetMapName(name: string): nothing;

export declare function Jass_Native_SetMapDescription(description: string): nothing;

export declare function Jass_Native_SetTeams(teamcount: integer): nothing;

export declare function Jass_Native_SetPlayers(playercount: integer): nothing;

export declare function Jass_Native_DefineStartLocation(whichStartLoc: integer, x: real, y: real): nothing;

export declare function Jass_Native_DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): nothing;

export declare function Jass_Native_SetStartLocPrioCount(whichStartLoc: integer, priSlotCount: integer): nothing;

export declare function Jass_Native_SetStartLocPrio(
    whichStartLoc: integer,
    priSlotIndex: integer,
    otherStartLocIndex: integer,
    priority: startlocprio
): nothing;

export declare function Jass_Native_GetStartLocPrioSlot(
    whichStartLoc: integer,
    prioSlotIndex: integer,
): integer;

export declare function Jass_Native_GetStartLocPrio(
    whichStartLoc: integer,
    prioSlotIndex: integer
): startlocprio;

export declare function Jass_Native_SetGameTypeSupported(
    whichGameType: gametype,
    value: boolean
): nothing;

export declare function Jass_Native_SetMapFlag(
    whichMapFlags: mapflag,
    value: boolean
): nothing;

export declare function Jass_Native_SetGamePlacement(
    whichPlacementType: placement,
): nothing;

export declare function Jass_Native_SetGameSpeed(
    whichspeed: gamespeed,
): nothing;

export declare function Jass_Native_SetGameDifficulty(
    whichdifficulty: gamedifficulty
): nothing;

export declare function Jass_Native_SetResourceDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native_SetCreatureDensity(
    whichdensity: mapdensity
): nothing;

export declare function Jass_Native_GetTeams(): integer;

export declare function Jass_Native_GetPlayers(): integer;

export declare function Jass_Native_IsGameTypeSuppored(
    whichGameType: gametype
): boolean;

export declare function Jass_Native_GetGameTypeSelected(): gametype;

export declare function Jass_Native_IsMapFlagSet(
    whichMapFlag: mapflag
): boolean;

export declare function Jass_Native_GetGamePlacement(): placement;

export declare function Jass_Native_GetGameSpeed(): gamespeed;

export declare function Jass_Native_GetGameDifficulty(): gamedifficulty;

export declare function Jass_Native_GetResourceDensity(): mapdensity;

export declare function Jass_Native_GetCreatureDensity(): mapdensity;

export declare function Jass_Native_GetStartLocationX(
    whichStartLocation: integer
): real;

export declare function Jass_Native_GetStartLocationY(
    whichStartLocation: integer
): real;

export declare function Jass_Native_GetStartLocationLoc(
    whichStartLocation: integer
): location;

export declare function Jass_Native_SetPlayerTeam(
    whichPlayer: player,
    whichTeam: integer
): nothing;

export declare function Jass_Native_SetPlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native_ForcePlayerStartLocation(
    whichPlayer: player,
    startLocIndex: integer
): nothing;

export declare function Jass_Native_SetPlayerColor(
    whichPlayer: player,
    color: playercolor
): nothing;

export declare function Jass_Native_SetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype,
    value: boolean
): nothing;

export declare function Jass_Native_SetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate,
    rate: integer
): nothing;

export declare function Jass_Native_SetPlayerRacePreference(
    whichPlayer: player,
    whichRacePreference: racepreference,
    rate: integer
): nothing;

export declare function Jass_Native_SetPlayerRaceSelectable(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native_SetPlayerController(
    whichPlayer: player,
    controlType: mapcontrol
): nothing;

export declare function Jass_Native_SetPlayerName(
    whichPlayer: player,
    name: string
): nothing;

export declare function Jass_Native_SetPlayerOnScoreScreen(
    whichPlayer: player,
    value: boolean
): nothing;

export declare function Jass_Native_GetPlayerTeam(
    whichPlayer: player,
): integer;

export declare function Jass_Native_GetPlayerStartLocation(
    whichPlayer: player,
): integer;

export declare function Jass_Native_GetPlayerColor(
    whichPlayer: player,
): playercolor;

export declare function Jass_Native_GetPlayerController(
    whichPlayer: player,
): mapcontrol;

export declare function Jass_Native_GetPlayerSlotState(
    whichPlayer: player,
): playerslotstate;

export declare function Jass_Native_GetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate
): integer;

export declare function Jass_Native_IsPlayerRacePrefSet(
    whichPlayer: player,
    pref: racepreference
): boolean;

export declare function Jass_Native_GetPlayerName(
    whichPlayer: player
): string;


/*Timer*/
export declare function Jass_Native_CreateTimer(): timer;

export declare function Jass_Native_DestroyTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_TimerStart(
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: code
): nothing;

export declare function Jass_Native_TimerGetElapsed(
    whichTimer: timer,
): real;

export declare function Jass_Native_TimerGetRemaining(
    whichTimer: timer
): real;

export declare function Jass_Native_TimerGetTimeout(
    whichTimer: timer
): real;

export declare function Jass_Native_PauseTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_ResumeTimer(
    whichTimer: timer
): nothing;

export declare function Jass_Native_GetExpiredTimer(): timer;

/*Group*/
export declare function Jass_Native_CreateGroup(): group;

export declare function Jass_Native_DestroyGroup(
    whichGroup: group
): nothing;

export declare function Jass_Native_GroupAddUnit(
    whichGroup: group,
    whichUnit: unit
): nothing;

export declare function Jass_Native_GroupRemoveUnit(
    whichGroup: group,
    whichUnit: unit
): nothing;

export declare function Jass_Native_GroupClear(
    whichGroup: group
): nothing;

export declare function Jass_Native_GroupEnumUnitsOfType(
    whichGroup: group,
    unitname: string,
    filter: boolexpr
): nothing;

export declare function Jass_Native_GroupEnumUnitsOfPlayer(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native_GroupEnumUnitsOfTypeCounted(
    whichGroup: group,
    unitname: string,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native_GroupEnumUnitsInRect(
    whichGroup: group,
    r: rect,
    filter: boolexpr,
): nothing;

export declare function Jass_Native_GroupEnumUnitsInRectCounted(
    whichGroup: group,
    r: rect,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native_GroupEnumUnitsInRange(
    whichGroup: group,
    x: real,
    y: real,
    radius: real,
    filter: boolexpr
): nothing;

export declare function Jass_Native_GroupEnumUnitsInRangeOfLoc(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr
): nothing;

export declare function Jass_Native_GroupEnumUnitsInRangeOfLocCounted(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native_GroupEnumUnitsSelected(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr,
): nothing;


export declare function Jass_Native_GroupImmediateOrder(
    whichGroup: group,
    order: string
): boolean;

export declare function Jass_Native_GroupImmediateOrderById(
    whichGroup: group,
    order: integer
): boolean;

export declare function Jass_Native_GroupPointOrder(
    whichGroup: group,
    order: string,
    whichLocation: location,
): boolean;

export declare function Jass_Native_GroupPointOrderLoc(
    whichGroup: group,
    order: string,
    whichLocation: location
): boolean;

export declare function Jass_Native_GroupPointOrderById(
    whichGroup: group,
    order: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_GroupPointOrderByIdLoc(
    whichGroup: group,
    order: integer,
    whichLocation: location
): boolean;

export declare function Jass_Native_GroupTargetOrder(
    whichGroup: group,
    order: string,
    targetWidget: widget
): boolean;

export declare function Jass_Native_GroupTargetOrderById(
    whichGroup: group,
    order: integer,
    targetWidget: widget
): boolean;

export declare function Jass_Native_ForceGroup(
    whichGroup: group,
    callback: code
): nothing;

export declare function Jass_Native_FirstOfGroup(
    whichGroup: group,
): unit;


/*Force Api*/
export declare function Jass_Native_CreateForce(): force;

export declare function Jass_Native_DestroyForce(
    whichForce: force
): nothing;

export declare function Jass_Native_ForceAddPlayer(
    whichForce: force,
    whichPlayer: player
): nothing;

export declare function Jass_Native_ForceRemovePlayer(
    whichForce: force,
    whichPlayer: player
): nothing;

export declare function Jass_Native_ForceClear(
    whichForce: force,
): nothing;

export declare function Jass_Native_ForceEnumPlayers(
    whichForce: force,
    filter: boolexpr
): nothing;

export declare function Jass_Native_ForceEnumPlayersCounted(
    whichForce: force,
    filter: boolexpr,
    countLimit: integer
): nothing;

export declare function Jass_Native_ForceEnumAllies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native_ForceEnumEnemies(
    whichForce: force,
    whichPlayer: player,
    filter: boolexpr
): nothing;

export declare function Jass_Native_ForForce(
    whichForce: force,
    callback: code
): nothing;


export declare function Jass_Native_Rect(
    minx: real,
    miny: real,
    maxx: real,
    maxy: real
): rect;

export declare function Jass_Native_RectFromLoc(
    min: location,
    max: location
): rect;

export declare function Jass_Native_RemoveRect(
    whichRect: rect
): nothing;

export declare function Jass_Native_SetRect(
    whichRect: rect,
    minx: real,
    miny: real,
    maxx: real,
    maxy: real
): nothing;

export declare function Jass_Native_SetRectFromLoc(
    whichRect: rect,
    min: location,
    max: location
): nothing;

export declare function Jass_Native_MoveRectTo(
    whichRect: rect,
    newCenterX: real,
    newCenterY: real
): nothing;

export declare function Jass_Native_MoveREctToLoc(
    whichRect: rect,
    newCenterLoc: location
): nothing;

export declare function Jass_Native_GetRectCenterX(
    whichRect: rect,
): real;

export declare function Jass_Native_GetRectCenterY(
    whichRect: rect,
): real;

export declare function Jass_Native_GetRectMinX(
    whichRect: rect,
): real;

export declare function Jass_Native_GetRectMinY(
    whichRect: rect,
): real;

export declare function Jass_Native_GetRectMaxX(
    whichRect: rect,
): real;

export declare function Jass_Native_GetRectMaxY(
    whichRect: rect,
): real;


export declare function Jass_Native_CreateRegion(): region;

export declare function Jass_Native_RemoveRegion(
    whichRegion: region
): nothing;

export declare function Jass_Native_RegionAddRect(
    whichRegion: region,
    r: rect
): nothing;

export declare function Jass_Native_RegionClearRect(
    whichRegion: region,
    r: rect
): nothing;

export declare function Jass_Native_RegionAddCell(
    whichRegion: region,
    x: real,
    y: real
): nothing;

export declare function Jass_Native_RegionAddCellAtLoc(
    whichRegion: region,
    whichLocation: location
): nothing;

export declare function Jass_Native_RegionClearCell(
    whichRegion: region,
    x: real,
    y: real
): nothing;

export declare function Jass_Native_RegionClearCellAtLoc(
    whichRegion: region,
    whichLocation: location
): nothing;

export declare function Jass_Native_Location(
    x: real,
    y: real
): location;

export declare function Jass_Native_RemoveLocation(
    whichLocation: location
): nothing;

export declare function Jass_Native_MoveLocation(
    whichLocation: location,
    newX: real,
    newY: real
): nothing;

export declare function Jass_Native_GetLocationX(
    whichLocation: location,
): real;

export declare function Jass_Native_GetLocationY(
    whichLocation: location,
): real;

export declare function Jass_Native_GetLocationZ(
    whichLocation: location,
): real;

export declare function Jass_Native_IsUnitInRegion(
    whichRegion: region,
    whichUnit: unit
): boolean;

export declare function Jass_Native_IsPointInRegion(
    whichRegion: region,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IsLocationInRegion(
    whichRegion: region,
    whichLocation: location
): boolean;

export declare function Jass_Native_GetWorldBounds(): rect;

/*Trigger*/
export declare function Jass_Native_CreateTrigger(): trigger;

export declare function Jass_Native_DestroyTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_ResetTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_EnableTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_DisableTrigger(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_IsTriggerEnabled(
    whichTrigger: trigger
): boolean;

export declare function Jass_Native_TriggerWaitOnSleeps(
    whichTrigger: trigger,
    flag: boolean
): nothing;

export declare function Jass_Native_IsTriggerWaitOnSleeps(
    whichTrigger: trigger,
): boolean;

export declare function Jass_Constant_Native_GetFilterUnit(): unit;

export declare function Jass_Constant_Native_GetEnumUnit(): unit;

export declare function Jass_Constant_Native_GetFilterDestructable(): destructable;

export declare function Jass_Constant_Native_GetEnumDestructable(): destructable;

export declare function Jass_Constant_Native_GetFilterItem(): item;

export declare function Jass_Constant_Native_GetEnumPlayer(): item;

export declare function Jass_Constant_Native_GetFilterPlayer(): player;

export declare function Jass_Constant_Native_GetEnumPlayer(): player;

export declare function Jass_Constant_Native_GetTriggeringTrigger(): trigger;

export declare function Jass_Constant_Native_GetTriggerEventId(): eventid;

export declare function Jass_Constant_Native_GetTriggerEvalCount(
    whichTrigger: trigger
): integer;

export declare function Jass_Constant_Native_GetTriggerExecCount(
    whichTrigger: trigger
): integer;

export declare function Jass_Native_ExecuteFunc(
    funcName: string
): nothing;

/*Boolean*/

export declare function Jass_Native_Add(
    operandA: boolexpr,
    operandB: boolexpr,
): boolexpr;

export declare function Jass_Native_Or(
    operandA: boolexpr,
    operandB: boolexpr,
): boolexpr;

export declare function Jass_Native_Not(
    operand: boolexpr,
): boolexpr;

export declare function Jass_Native_Condition(
    func: code
): conditionfuncs;

export declare function Jass_Native_DestroyCondition(
    c: conditionfuncs
): nothing;

export declare function Jass_Native_Filter(
    func: code
): filterfunc;

export declare function Jass_Native_DestroyFilter(
    f: filterfunc
): nothing;

export declare function Jass_Native_DestroyBoolExpr(
    e: boolexpr
): nothing;

/*Trigger GameEvent*/
export declare function Jass_Native_TriggerRegisterVariableEvent(
    whichTrigger: trigger,
    varName: string,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Native_TriggerRegisterTimerEvent(
    whichTrigger: trigger,
    timeout: real,
    periodic: boolean
): event;

export declare function Jass_Native_TriggerRegisterTimerExpireEvent(
    whichTrigger: trigger,
    t: timer
): event;

export declare function Jass_Native_TriggerRegisterGameStateEvent(
    whichTrigger: trigger,
    whichState: gamestate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Native_TriggerRegisterDialogEvent(
    whichTrigger: trigger,
    whichDialog: dialog
): event;

export declare function Jass_Native_TriggerRegisterDialogButtonEvent(
    whichTrigger: trigger,
    whichButton: button
): event;

export declare function Jass_Constant_Native_GetEventGameState(): gamestate;

export declare function Jass_Native_TriggerRegisterEnterRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native_GetTriggeringRegion(): region;

export declare function Jass_Constant_Native_GetEnteringUnit(): unit;

export declare function Jass_Native_TriggerRegisterLeaveRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native_GetLeavingUnit(): unit;

export declare function Jass_Native_TriggerRegisterTrackableHitEvent(
    whichTrigger: trigger,
    t: trackable
): event;

export declare function Jass_Native_TriggerRegisterTrackableTrackEvent(
    whichTrigger: trigger,
    t: trackable
): event;

export declare function Jass_Constant_Native_GetTriggeringTrackable(): trackable;

export declare function Jass_Constant_Native_GetClickedButton(): button;

export declare function Jass_Constant_Native_GetClickedDialog(): dialog;

export declare function Jass_Constant_Native_GetTournamentFinishSoonTimeRemaining(): real;

export declare function Jass_Constant_Native_GetTournamentFinishNowRule(): integer;

export declare function Jass_Constant_Native_GetTournamentFinishNowPlayer(): player;

export declare function Jass_Constant_Native_GetTournamentScore(
    whichPlayer: player
): integer;

export declare function Jass_Constant_Native_GetSaveBasicFilename(): string;

/*Player Event*/
export declare function Jass_Native_TriggerRegisterPlayerEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerEvent: playerevent
): event;

export declare function Jass_Constant_Native_GetTriggerPlayer(): player;

export declare function Jass_Native_TriggerRegisterPlayerUnitEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerUnitEvent: playerunitevent,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native_GetLevelingUnit(): unit;

export declare function Jass_Constant_Native_GetLearningUnit(): unit;

export declare function Jass_Constant_Native_GetLearnedSkill(): integer;

export declare function Jass_Constant_Native_GetLearnedSkillLevel(): integer;

export declare function Jass_Constant_Native_GetRevivableUnit(): unit;

export declare function Jass_Constant_Native_GetRevivingUnit(): unit;

export declare function Jass_Constant_Native_GetAttacker(): unit;

export declare function Jass_Constant_Native_GetRescuer(): unit;

export declare function Jass_Constant_Native_GetDyingUnit(): unit;

export declare function Jass_Constant_Native_GetKillingUnit(): unit;

export declare function Jass_Constant_Native_GetDecayingUnit(): unit;

export declare function Jass_Constant_Native_GetConstructingStructure(): unit;

export declare function Jass_Constant_Native_GetCancelledStructure(): unit;

export declare function Jass_Constant_Native_GetConstructedStructure(): unit;

export declare function Jass_Constant_Native_GetResearchingUnit(): unit;

export declare function Jass_Constant_Native_GetResearched(): integer;

export declare function Jass_Constant_Native_GetTrainedUnitType(): integer;

export declare function Jass_Constant_Native_GetTrainedUnit(): unit;

export declare function Jass_Constant_Native_GetDetectedUnit(): unit;

export declare function Jass_Constant_Native_GetSummoningUnit(): unit;

export declare function Jass_Constant_Native_GetSummonedUnit(): unit;

export declare function Jass_Constant_Native_GetTransportUnit(): unit;

export declare function Jass_Constant_Native_GetLoadedUnit(): unit;

export declare function Jass_Constant_Native_GetSellingUnit(): unit;

export declare function Jass_Constant_Native_GetSoldUnit(): unit;

export declare function Jass_Constant_Native_GetBuyingUnit(): unit;

export declare function Jass_Constant_Native_GetSoldItem(): item;

export declare function Jass_Constant_Native_GetChangingUnit(): unit;

export declare function Jass_Constant_Native_GetChangingUnitPrevOwner(): player;

export declare function Jass_Constant_Native_GetManipulatingUnit(): unit;

export declare function Jass_Constant_Native_GetManipulatedItem(): item;

export declare function Jass_Constant_Native_GetOrderedUnit(): unit;

export declare function Jass_Constant_Native_GetIssuedOrderId(): integer;

export declare function Jass_Constant_Native_GetOrderPointX(): real;

export declare function Jass_Constant_Native_GetOrderPointY(): real;

export declare function Jass_Constant_Native_GetOrderPointLoc(): location;

export declare function Jass_Constant_Native_GetOrderTarget(): widget;

export declare function Jass_Constant_Native_GetOrderTargetDestructable(): destructable;

export declare function Jass_Constant_Native_GetOrderTargetItem(): item;

export declare function Jass_Constant_Native_GetOrderTargetUnit(): unit;

export declare function Jass_Constant_Native_GetSpellAbilityUnit(): unit;

export declare function Jass_Constant_Native_GetSpellAbilityId(): integer;

export declare function Jass_Constant_Native_GetSpellAbility(): ability;

export declare function Jass_Constant_Native_GetSpellTargetLoc(): location;

export declare function Jass_Constant_Native_GetSpellTargetX(): real;

export declare function Jass_Constant_Native_GetSpellTargetY(): real;

export declare function Jass_Constant_Native_GetSpellTargetDestructable(): destructable;

export declare function Jass_Constant_Native_GetSpellTargetItem(): item;

export declare function Jass_Native_TriggerRegisterPlayerAllianceChange(
    whichTrigger: trigger,
    whichPlayer: player,
    whichAlliance: alliancetype
): event;

export declare function Jass_Native_TriggerRegisterPlayerStateEvent(
    whichTrigger: trigger,
    whichplayer: player,
    whichState: playerstate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Constant_Native_GetEventPlayerState(): playerstate;

export declare function Jass_Native_TriggerRegisterPlayerChatState(
    whichTrigger: trigger,
    whichPlayer: player,
    chatMessageToDetect: string,
    exactMatchOnly: boolean,
): event;

export declare function Jass_Constant_Native_GetEventPlayerChatString(): String;

export declare function Jass_Constant_Native_GetEventPlayerChatStringMatched(): string;

export declare function Jass_Native_TriggerRegisterDeathEvent(
    whichTrigger: trigger,
    whichWidget: widget
): event;

export declare function Jass_Constant_Native_GetTriggerUnit(): unit;

export declare function Jass_Native_TriggerRegisterUnitStateEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: real
): event;

export declare function Jass_Constant_Native_GetEventUnitState(): unitstate;

export declare function Jass_Native_TriggerRegisterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: event
): event;

export declare function Jass_Constant_Native_GetEventDamage(): real;

export declare function Jass_Constant_Native_GetEventDamageSource(): unit;

export declare function Jass_Constant_Native_GetEventDetectingPlayer(): player;

export declare function Jass_Native_TriggerRegisterFilterUnitEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr
): event;

export declare function Jass_Constant_Native_GetEventTargetUnit(): unit;

export declare function Jass_Native_TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: real,
    filter: boolexpr
): event;

export declare function Jass_Native_TriggerAddCondition(
    whichTrigger: trigger,
    condition: boolexpr
): triggercondition;

export declare function Jass_Native_TriggerRemoveCondition(
    whichTrigger: trigger,
    whichCondition: triggercondition
): nothing;

export declare function Jass_Native_TriggerClearConditions(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_TriggerAddAction(
    whichTrigger: trigger,
    actionFunc: code
): triggeraction;

export declare function Jass_Native_TriggerRemoveAction(
    whichTrigger: trigger,
    whichAction: triggeraction
): nothing;

export declare function Jass_Native_TriggerClearActions(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_TriggerSleepAction(
    timeout: real
): nothing;

export declare function Jass_Native_TriggerWaitForSound(
    s: sound,
    offset: real
): nothing;

export declare function Jass_Native_TriggerEvaluate(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_TriggerExecute(
    whichTrigger: trigger
): boolean;

export declare function Jass_Native_TriggerExecuteWait(
    whichTrigger: trigger
): nothing;

export declare function Jass_Native_TriggerSyncStart(): nothing;

export declare function Jass_Native_TriggerSyncReady(): nothing;

export declare function Jass_Native_GetWidgetLife(
    whichWidget: widget
): real;

export declare function Jass_Native_SetWidgetLife(
    whichWidget: widget,
    newLife: real
): nothing;

export declare function Jass_Native_GetWidgetX(
    whichWidget: widget,
): real;

export declare function Jass_Native_GetWidgetY(
    whichWidget: widget,
): real;

export declare function Jass_Constant_Native_GetTriggerWidget(): widget;

export declare function Jass_Native_CreateDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native_CreateDestructableZ(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native_CreateDeadDestructable(
    objectid: integer,
    x: real,
    y: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native_(
    objectid: integer,
    x: real,
    y: real,
    z: real,
    face: real,
    scale: real,
    variation: integer
): destructable;

export declare function Jass_Native_RemoveDestructable(
    d: destructable
): nothing;

export declare function Jass_Native_KillDestructable(
    d: destructable
): nothing;

export declare function Jass_Native_SetDestructableInunlnerable(
    d: destructable,
    flag: boolean
): nothing;

export declare function Jass_Native_IsDestructableInvulnerable(
    d: destructable
): boolean;

export declare function Jass_Native_EnumDestructablesInRect(
    r: rect,
    filter: boolexpr,
    actionFunc: code
): nothing;

export declare function Jass_Native_GetDestructableTypeId(
    d: destructable
): integer;

export declare function Jass_Native_GetDestructableX(
    d: destructable
): real;

export declare function Jass_Native_GetDestructableY(
    d: destructable
): real;

export declare function Jass_Native_SetDestructableLift(
    d: destructable,
    life: real
): nothing;

export declare function Jass_Native_GetDestructableLife(
    d: destructable
): real;

export declare function Jass_Native_SetDestructableMaxLife(
    d: destructable,
    max: real
): nothing;

export declare function Jass_Native_GetDestructableMaxLife(): real;

export declare function Jass_Native_DestructableRestoreLife(
    d: destructable,
    life: real,
    birth: boolean
): nothing;

export declare function Jass_Native_QueueDestructableAnimation(
    d: destructable,
    whichAnimation: string,
): nothing;

export declare function Jass_Native_SetDestructableAnimation(
    d: destructable,
    whichAnimation: string
): nothing;

export declare function Jass_Native_SetDestructableAnimatioNSpeed(
    d: destructable,
    speedFactor: real
): nothing;

export declare function Jass_Native_ShowDestructable(
    d: destructable,
    flag: boolean
): nothing;

export declare function Jass_Native_GetDestructableOccluderHeight(
    d: destructable
): real;

export declare function Jass_Native_SetDestructableOccluderHeight(
    d: destructable,
    height: real
): nothing;

export declare function Jass_Native_GetDestructableName(
    d: destructable
): string;

export declare function Jass_Constant_Native_GetTriggerDestructable(): destructable;

/*Item*/
export declare function Jass_Native_CreateItem(
    itemid: integer,
    x: real,
    y: real
): item;

export declare function Jass_Native_RemoveItem(
    whichItem: item
): nothing;

export declare function Jass_Native_GetItemPlayer(
    whichItem: item
): player;

export declare function Jass_Native_GetItemTypeId(
    i: item
): integer;

export declare function Jass_Native_GetItemX(
    i: item
): real;

export declare function Jass_Native_GetItemY(
    i: item
): real;

export declare function Jass_Native_SetItemPosition(
    i: item,
    x: real,
    y: real
): nothing;

export declare function Jass_Native_SetItemDropOnDeath(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native_SetItemDropable(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native_SetItemPawnable(
    i: item,
    flag: boolean
): nothing;

export declare function Jass_Native_SetItemPlayer(
    whichItem: item,
    whichPlayer: player,
    changeColor: boolean
): nothing;

export declare function Jass_Native_SetItemInvulnerable(
    whichItem: item,
    flag: boolean
): nothing;

export declare function Jass_Native_IsItemInvulnerable(
    whichItem: item
): boolean;

export declare function Jass_Native_SetItemVisible(
    whichItem: item,
    flag: boolean
): nothing;

export declare function Jass_Native_IsItemVisible(
    whichItem: item,
): boolean;

export declare function Jass_Native_IsItemOwned(
    whichItem: item,
): boolean;

export declare function Jass_Native_IsItemPowerup(
    whichItem: item
): boolean;

export declare function Jass_Native_IsItemSellable(
    whichItem: item
): boolean;

export declare function Jass_Native_IsItemPawnable(
    whichItem: item
): boolean;

export declare function Jass_Native_IsItemIdPowerup(
    itemid: integer
): boolean;

export declare function Jass_Native_IsItemIdSellable(
    itemid: integer
): boolean;

export declare function Jass_Native_IsItemIdPawnable(
    itemid: integer
): boolean;

export declare function Jass_Native_EnumItemsInRect(
    r: rect,
    filter: boolexpr,
    actionFunc: code
): nothing;

export declare function Jass_Native_GetItemLevel(
    whichItem: item
): integer;

export declare function Jass_Native_GetItemType(
    whichItem: item
): itemtype;

export declare function Jass_Native_SetItemDropID(
    whichItem: item,
    unitId: integer
): nothing;

export declare function Jass_Constant_Native_GetItemName(
    whichItem: item
): string;

export declare function Jass_Native_GetItemCharges(
    whichItem: item
): integer;

export declare function Jass_Native_SetItemCharges(
    whichItem: item,
    charges: integer
): nothing;

export declare function Jass_Native_GetItemUserData(
    whichItem: item
): integer;

export declare function Jass_Native_SetItemUserData(
    whichItem: item,
    data: integer
): nothing;

/*Unit*/
export declare function Jass_Native_CreateUnit(
    id: player,
    unitid: integer,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native_CreateUnitByName(
    whichPlayer: player,
    unitname: string,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native_CreateUnitAtLoc(
    id: player,
    unitid: integer,
    whichLocation: location,
    face: real
): unit;

export declare function Jass_Native_CreateUnitAtLocByName(
    id: player,
    unitname: string,
    whichLocation: location,
    face: real
): unit;

export declare function Jass_Native_CreateCorpse(
    whichPlayer: player,
    unitid: integer,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native_KillUnit(
    whichUnit: unit
): nothing;

export declare function Jass_Native_RemoveUNit(
    whichUnit: unit
): nothing;


export declare function Jass_Native_ShowUnit(
    whichUnit: unit,
    show: boolean
): nothing;

export declare function Jass_Native_SetUnitState(
    whichUnit: unit,
    whichUnitState: unitstate,
    newVal: real
): nothing;

export declare function Jass_Native_SetUnitX(
    whichUnit: unit,
    newX: real
): nothing;

export declare function Jass_Native_SetUnitY(
    whichUnit: unit,
    newY: real
): nothing;

export declare function Jass_Native_SetUnitPosition(
    whichUnit: unit,
    newX: real,
    newY: real
): nothing;

export declare function Jass_Native_SetUnitPositionLoc(
    whichUnit: unit,
    whichLocation: location
): nothing;

export declare function Jass_Native_SetUnitFacing(
    whichUnit: unit,
    facingAngle: real
): nothing;

export declare function Jass_Native_SetUnitFacingTimed(
    whichUnit: unit,
    facingAngle: real,
    duration: real
): nothing;

export declare function Jass_Native_SetUnitMoveSpeed(
    whichUnit: unit,
    newSpeed: real
): nothing;

export declare function Jass_Native_SetUnitFlyHeight(
    whichUnit: unit,
    newSpeed: real
): nothing;

export declare function Jass_Native_SetUnitTurnSpeed(
    whichUnit: unit,
    newTurnSpeed: real
): nothing;

export declare function Jass_Native_SetUnitPropWindow(
    whichUnit: unit,
    newPropWindowAngle: real
): nothing;

export declare function Jass_Native_SetUnitAcquireRange(
    whichUnit: unit,
    newAcquireRange: real
): nothing;

export declare function Jass_Native_SetUnitCreepGuard(
    whichUnit: unit,
    creepGuard: boolean
): nothing;

export declare function Jass_Native_GetUnitAcquireRange(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitTurnSpeed(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitPropWindow(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitFlyHeight(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitDefaultAcquireRange(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitDefaultTurnSpeed(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitDefaultPropWindow(
    whichUnit: unit
): real;

export declare function Jass_Native_GetUnitDefaultFlyHeight(
    whichUnit: unit
): real;

export declare function Jass_Native_SetUnitOwner(
    whichUnit: unit,
    whichPlayer: player,
    changeColor: boolean
): nothing;

export declare function Jass_Native_SetUnitColor(
    whichUnit: unit,
    whichColor: playercolor
): nothing;

export declare function Jass_Native_SetUnitScale(
    whichUnit: unit,
    scaleX: real,
    scaleY: real,
    scaleZ: real
): nothing;

export declare function Jass_Native_SetUnitTimeScale(
    whichUnit: unit,
    timeScale: real
): nothing;

export declare function Jass_Native_SetUnitBlendTime(
    whichUnit: unit,
    blendTime: real
): nothing;

export declare function Jass_Native_SetUnitVertexColor(
    whichUnit: unit,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_QueueUnitAnimation(
    whichUnit: unit,
    whichAnimation: string
): nothing;

export declare function Jass_Native_SetUnitAnimation(
    whichUnit: unit,
    whichAnimation: string
): nothing;

export declare function Jass_Native_SetUnitAnimationByIndex(
    whichUnit: unit,
    whichAnimation: integer
): nothing;

export declare function Jass_Native_SetUnitAnimationWithRarity(
    whichUnit: unit,
    whichAnimation: string,
    rarity: raritycontrol
): nothing;

export declare function Jass_Native_AddUnitAnimationProperties(
    whichUnit: unit,
    animProperties: string,
    add: boolean
): nothing;

export declare function Jass_Native_SetUnitLookAt(
    whichUnit: unit,
    whichBone: string,
    lookAtTarget: unit,
    offsetX: real,
    offsetY: real,
    offsetZ: real
): nothing;

export declare function Jass_Native_ResetUnitLookAt(
    whichUnit: unit,
    range: real
): nothing;

export declare function Jass_Native_SetUnitRescuable(
    whichUnit: unit,
    byWhichPlayer: player,
    flag: boolean
): nothing;

export declare function Jass_Native_SetUnitRescueRange(
    whichUnit: unit,
    range: real
): nothing;

export declare function Jass_Native_SetHeroStr(
    whichHero: unit,
    newStr: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native_SetHeroAgi(
    whichHero: unit,
    newAgi: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native_SetHeroInt(
    whichHero: unit,
    newInt: integer,
    permanent: boolean
): nothing;

export declare function Jass_Native_GetHeroStr(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native_GetHeroAgi(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native_GetHeroInt(
    whichHero: unit,
    includeNonuses: boolean
): integer;

export declare function Jass_Native_UnitStringHeroLevel(
    whichHero: unit,
    howManyLevels: integer
): boolean;

export declare function Jass_Native_GetHeroXP(
    whichHero: unit
): integer;

export declare function Jass_Native_SetHeroXP(
    whichHero: unit,
    newXpVal: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Native_GetHeroSkillPoints(
    whichHero: unit,
): integer;

export declare function Jass_Native_UnitModifySKillPoints(
    whichHero: unit,
    skillPointDelta: integer
): boolean;

export declare function Jass_Native_AddHeroXP(
    whichHero: unit,
    xpToAdd: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Native_SetHeroLevel(
    whichHero: unit,
    level: integer,
    showEyeCandy: boolean
): nothing;

export declare function Jass_Constant_Native_GetHeroLevel(
    whichHero: unit
): integer;

export declare function Jass_Constant_Native_GetUnitLevel(
    whichUnit: unit,
): integer;

export declare function Jass_Native_GetHeroProperName(
    whichHero: unit
): string;

export declare function Jass_Native_SuspendHeroXP(
    whichHero: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_IsSuspendedXP(
    whichHero: unit
): boolean;

export declare function Jass_Native_SelectHeroSkill(
    whichHero: unit,
    abilcode: integer
): nothing;

export declare function Jass_Native_GetUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native_DecUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native_IncUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer
): integer;

export declare function Jass_Native_SetUnitAbilityLevel(
    whichHero: unit,
    abilcode: integer,
    level: integer
): integer;

export declare function Jass_Native_ReviveHero(
    whichHero: unit,
    x: real,
    y: real,
    doEyecandy: boolean
): boolean;

export declare function Jass_Native_ReviveHeroLoc(
    whichHero: unit,
    loc: location,
    doEyecandy: boolean
): boolean;

export declare function Jass_Native_SetUnitExploded(
    whichUnit: unit,
    exploded: boolean
): nothing;

export declare function Jass_Native_SetUnitInvulnerable(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_PauseUnit(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_IsUnitPaused(
    whichHero: unit
): boolean;

export declare function Jass_Native_SetUnitPathing(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_ClearSelection(): nothing;

export declare function Jass_Native_SelectUnit(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_GetUnitPointValue(
    whichUnit: unit
): integer;

export declare function Jass_Native_GetUnitPointValueByType(
    unitType: integer
): integer;

export declare function Jass_Native_UnitAddItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native_UnitAddItemById(
    whichUnit: unit,
    itemid: integer
): item;

export declare function Jass_Native_UnitAddItemToSlotById(
    whichUnit: unit,
    itemid: integer,
    itemSolt: integer
): boolean;

export declare function Jass_Native_UnitRemoveItem(
    whichUnit: unit,
    whichItem: item
): nothing;

export declare function Jass_Native_UnitRemoveItemFromSlot(
    whichUnit: unit,
    itemSlot: integer
): item;

export declare function Jass_Native_UnitHasItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native_UnitItemInSlot(
    whichUnit: unit,
    itemSlot: integer
): item;

export declare function Jass_Native_UnitInventorySize(
    whichUnit: unit
): integer;

export declare function Jass_Native_UnitDropItemPoint(
    whichUnit: unit,
    whichItem: item,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_UnitDropItemSlot(
    whichUnit: unit,
    whichItem: item,
    slot: integer
): boolean;

export declare function Jass_Native_UnitDropItemTarget(
    whichUnit: unit,
    whichItem: item,
    target: widget
): boolean;

export declare function Jass_Native_UnitUseItem(
    whichUnit: unit,
    whichItem: item
): boolean;

export declare function Jass_Native_UnitUseItemPoint(
    whichUnit: unit,
    whichItem: item,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_UnitUseItemTarget(
    whichUnit: unit,
    whichItem: item,
    target: widget
): boolean;

export declare function Jass_Constant_Native_GetUnitX(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native_GetUnitY(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native_GetUnitLoc(
    whichUnit: unit
): location;

export declare function Jass_Constant_Native_GetUnitFacing(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native_GetUnitMoveSpeed(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native_GetUnitDefaultMoveSpeed(
    whichUnit: unit
): real;

export declare function Jass_Constant_Native_GetUnitState(
    whichUnit: unit,
    whichUnitState: unitstate
): real;

export declare function Jass_Constant_Native_GetOwningPlayer(
    whichUnit: unit
): player;

export declare function Jass_Constant_Native_GetUnitTypeId(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native_GetUnitRace(
    whichUnit: unit
): race;

export declare function Jass_Constant_Native_GetUnitName(
    whichUnit: unit
): string;

export declare function Jass_Constant_Native_GetUnitFoodUsed(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native_GetUnitFoodMade(
    whichUnit: unit
): integer;

export declare function Jass_Constant_Native_GetFoodMade(
    unitId: integer
): integer;

export declare function Jass_Constant_Native_GetFoodUsed(
    unitId: integer
): integer;

export declare function Jass_Native_SetUnitUseFood(
    whichUnit: unit,
    useFood: boolean
): nothing;

export declare function Jass_Constant_Native_GetUnitRallyPoint(
    whichUnit: unit
): location;

export declare function Jass_Constant_Native_GetUnitRallyUnit(
    whichUnit: unit
): unit;

export declare function Jass_Constant_Native_GetUnitRallyDestructable(
    whichUnit: unit
): destructable;

export declare function Jass_Constant_Native_IsUnitInGroup(
    whichUnit: unit,
    whichGroup: group
): boolean;

export declare function Jass_Constant_Native_IsUNitInForce(
    whichUnit: unit,
    whichForce: force
): boolean;

export declare function Jass_Constant_Native_IsUnitOwnedByPlayer(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitAlly(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitEnemy(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitVisible(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitDetected(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitInvisible(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitFogged(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitMasked(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitSelected(
    whichUnit: unit,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsUnitRace(
    whichUnit: unit,
    whichRace: race
): boolean;

export declare function Jass_Constant_Native_IsUnitType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Constant_Native_IsUnit(
    whichUnit: unit,
    whichSpecifiedUnit: unit
): boolean;

export declare function Jass_Constant_Native_IsUnitInRange(
    whichUnit: unit,
    otherUnit: unit,
    distance: real
): boolean;

export declare function Jass_Constant_Native_IsUnitInRangeXY(
    whichUnit: unit,
    x: real,
    y: real,
    distance: real
): boolean;

export declare function Jass_Constant_Native_IsUnitInRangeLoc(
    whichUnit: unit,
    whichLocation: location,
    distance: real
): boolean;

export declare function Jass_Constant_Native_IsUnitHidden(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native_IsUnitIllusion(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native_IsUnitInTransport(
    whichUnit: unit,
    whichTransport: unit
): boolean;

export declare function Jass_Constant_Native_IsUnitLoaded(
    whichUnit: unit
): boolean;

export declare function Jass_Constant_Native_IsHeroUniteId(
    unitId: integer
): boolean;

export declare function Jass_Constant_Native_IsUnitIdType(
    unitId: integer,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native_UnitShareVision(
    whichUnit: unit,
    whichPlayer: player,
    share: boolean
): nothing;

export declare function Jass_Native_UnitSuspendDecay(
    whichUnit: unit,
    suspend: boolean
): nothing;

export declare function Jass_Native_UnitAddType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native_UnitRemoveType(
    whichUnit: unit,
    whichUnitType: unittype
): boolean;

export declare function Jass_Native_UnitAddAbility(
    whichUnit: unit,
    abilityId: integer
): boolean;

export declare function Jass_Native_UnitRemoveAbility(
    whichUnit: unit,
    abilityId: integer
): boolean;

export declare function Jass_Native_UnitMakeAbilityPermanent(
    whichUnit: unit,
    permanent: boolean,
    abilityId: integer
): boolean;

export declare function Jass_Native_UnitRemoveBuffs(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean
): nothing;

export declare function Jass_Native_UnitRemoveBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): nothing;

export declare function Jass_Native_UnitHasBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): boolean;

export declare function Jass_Native_UnitCountBuffsEx(
    whichUnit: unit,
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean,
): integer;

export declare function Jass_Native_UnitAddSleep(
    whichUnit: unit,
    add: boolean
): nothing;

export declare function Jass_Native_UnitCanSleep(
    whichUnit: unit
): boolean;

export declare function Jass_Native_UnitAddSleepPerm(
    whichUnit: unit,
    add: boolean
): nothing;


export declare function Jass_Native_UnitCanSleepPerm(
    whichUnit: unit
): boolean;

export declare function Jass_Native_UnitIsSleeping(
    whichUnit: unit
): boolean;

export declare function Jass_Native_UnitWakeUp(
    whichUnit: unit
): nothing;

export declare function Jass_Native_UnitApplyTimedLife(
    whichUnit: unit,
    buffId: integer,
    duration: real
): nothing;

export declare function Jass_Native_UnitIgnoreAlarm(
    whichUnit: unit,
    flag: boolean
): boolean;

export declare function Jass_Native_UnitIgnoreAlarmToggled(
    whichUnit: unit
): boolean;

export declare function Jass_Native_UnitResetCooldown(
    whichUnit: unit
): nothing;

export declare function Jass_Native_UnitSetConstructionProgress(
    whichUnit: unit,
    percentage: integer
): nothing;

export declare function Jass_Native_UnitSetUpgradeProgress(
    whichUnit: unit,
    percentage: integer
): nothing;

export declare function Jass_Native_UnitPauseTimedLife(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_UnitSetUsesAltIcon(
    whichUnit: unit,
    flag: boolean
): nothing;

export declare function Jass_Native_UnitDamagePoint(
    whichUnit: unit,
    delay: real,
    radius: real,
    x: real,
    y: real,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean;

export declare function Jass_Native_UnitDamageTarget(
    whichUnit: unit,
    target: widget,
    amount: real,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
): boolean;

export declare function Jass_Native_IssueImmediateOrder(
    whichUnit: unit,
    order: string
): boolean;

export declare function Jass_Native_IssueImmediateOrderById(
    whichUnit: unit,
    order: integer
): boolean;

export declare function Jass_Native_IssuePointOrder(
    whichUnit: unit,
    order: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssuePointOrderLoc(
    whichUnit: unit,
    order: string,
    whichLocation: location
): boolean;

export declare function Jass_Native_IssuePointOrderById(
    whichUnit: unit,
    order: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssuePointOrderByIdLoc(
    whichUnit: unit,
    order: integer,
    whichLocation: location
): boolean;

export declare function Jass_Native_IssueTargetOrder(
    whichUnit: unit,
    order: string,
    target: widget
): boolean;

export declare function Jass_Native_IssueTargetOrderById(
    whichUnit: unit,
    order: integer,
    target: widget
): boolean;

export declare function Jass_Native_IssueInstantPointOrder(
    whichUnit: unit,
    order: string,
    x: real,
    y: real,
    target: widget
): boolean;

export declare function Jass_Native_IssueInstantPointOrderById(
    whichUnit: unit,
    order: integer,
    x: real,
    y: real,
    target: widget
): boolean;

export declare function Jass_Native_IssueInstantTargetOrder(
    whichUnit: unit,
    order: string,
    target: widget,
    instantTarget: widget
): boolean;

export declare function Jass_Native_IssueInstantTargetOrderById(
    whichUnit: unit,
    order: integer,
    target: widget,
    instantTarget: widget
): boolean;

export declare function Jass_Native_IssueBuildOrder(
    whichPeon: unit,
    unitToBuild: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssueBuildOrderById(
    whichPeon: unit,
    unitId: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssueNeutralImmediateOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string
): boolean;

export declare function Jass_Native_IssueNeutralImmediateOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer
): boolean;

export declare function Jass_Native_IssueNeutralPointOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssueNeutralPointOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    x: real,
    y: real
): boolean;

export declare function Jass_Native_IssueNeutralTargetOrder(
    whichPlayer: player,
    neutralStructure: unit,
    unitToBuild: string,
    target: widget,
): boolean;

export declare function Jass_Native_IssueNeutralTargetOrderById(
    whichPlayer: player,
    neutralStructure: unit,
    unitId: integer,
    target: widget,
): boolean;

export declare function Jass_Native_GetUnitCurrentOrder(
    whichUnit: unit
): integer;

export declare function Jass_Native_SetResourceAmount(
    whichUnit: unit,
    amount: integer
): nothing;

export declare function Jass_Native_AddResourceAmount(
    whichUnit: unit,
    amount: integer
): nothing;

export declare function Jass_Native_GetResourceAmount(
    whichUnit: unit,
): integer;

export declare function Jass_Native_WaygateGetDestinationX(
    waygate: unit
): real;

export declare function Jass_Native_WaygateGetDestinationY(
    waygate: unit
): real;

export declare function Jass_Native_WaygateSetDestionation(
    waygate: unit,
    x: real,
    y: real
): nothing;

export declare function Jass_Native_WaygateActivate(
    waygate: unit,
    activate: boolean
): nothing;

export declare function Jass_Native_WaygateIsActive(
    waygate: unit,
): boolean;

export declare function Jass_Native_AddItemToAllStock(
    itemId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native_AddItemToStock(
    whichUnit: unit,
    itemId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native_AddUnitToAllStock(
    unitId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native_AddUnitToStock(
    whichUnit: unit,
    unitId: integer,
    currentStock: integer,
    stockMax: integer
): nothing;

export declare function Jass_Native_RemoveItemFromAllStock(
    itemId: integer
): nothing;

export declare function Jass_Native_RemoveItemFromStock(
    whichUnit: unit,
    itemId: integer
): nothing;

export declare function Jass_Native_RemoveUnitFromAllStock(
    unitId: integer
): nothing;

export declare function Jass_Native_RemoveUnitFromStock(
    whichUnit: unit,
    unitId: integer
): nothing;

export declare function Jass_Native_SetAllItemTypeSlots(
    solts: integer
): nothing;

export declare function Jass_Native_SetAllUnitTypeSlots(
    solts: integer
): nothing;

export declare function Jass_Native_SetItemTypeSlots(
    whichUnit: unit,
    slots: integer
): nothing;

export declare function Jass_Native_SetUnitTypeSlots(
    whichUnit: unit,
    slots: integer
): nothing;

export declare function Jass_Native_GetUnitUserData(
    whichUnit: unit,
): integer;

export declare function Jass_Native_SetUnitUserData(
    whichUnit: unit,
    data: integer
): nothing;


/*Player*/
export declare function Jass_Constant_Native_Player(
    number: integer
): player;

export declare function Jass_Constant_Native_GetLocalPlayer(): player;

export declare function Jass_Constant_Native_IsPlayerAlly(
    whichPlayer: player,
    otherPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsPlayerEnemy(
    whichPlayer: player,
    otherPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsPlayerInForce(
    whichPlayer: player,
    whichForce: force
): boolean ;

export declare function Jass_Constant_Native_IsVisibleToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsLocationVisibleToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsFoggedToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsLocationFoggedToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsMaskedToPlayer(
    x: real,
    y: real,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_IsLocationMaskedToPlayer(
    whichLocation: location,
    whichPlayer: player
): boolean;

export declare function Jass_Constant_Native_GetPlayerRace(
    whichPlayer: player
): race;

export declare function Jass_Constant_Native_GetPlayerId(
    whichPlayer: player
): integer;

export declare function Jass_Constant_Native_GetPlayerUnitCount(
    whichPlayer: player,
    includeIncomplete: boolean
): integer;

export declare function Jass_Constant_Native_GetPlayerTypedUnitCount(
    whichPlayer: player,
    unitName: string,
    includeIncomplete: boolean,
    includeUpgrade: boolean
): integer;

export declare function Jass_Constant_Native_GetPlayerStructureCount(
    whichPlayer: player,
    includeIncomplete: boolean
): integer;

export declare function Jass_Constant_Native_GetPlayerState(
    whichPlayer: player,
    whichPlayerState: playerstate
): integer;

export declare function Jass_Constant_Native_GetPlayerScore(
    whichPlayer: player,
    whichPlayerScore: playerscore
): integer;

export declare function Jass_Constant_Native_GetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype
): boolean;

export declare function Jass_Constant_Native_GetPlayerHandicap(
    whichPlayer: player
): real;

export declare function Jass_Constant_Native_GetPlayerHandicapXp(
    whichPlayer: player
): real;

export declare function Jass_Constant_Native_SetPlayerHandicap(
    whichPlayer: player,
    handicap: real
): nothing;

export declare function Jass_Constant_Native_SetPlayerHandicapXp(
    whichPlayer: player,
    handicap: real
): nothing;


export declare function Jass_Constant_Native_SetPlayerTechMaxAllowed(
    whichPlayer: player,
    techid: integer,
    max: integer
): nothing;

export declare function Jass_Constant_Native_GetPlayerTechMaxAllowed(
    whichPlayer: player,
    techid: integer,
): integer;

export declare function Jass_Constant_Native_AddPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    levels: integer
): nothing;

export declare function Jass_Constant_Native_SetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    setToLevel: integer
): nothing;

export declare function Jass_Constant_Native_GetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): boolean;

export declare function Jass_Constant_Native_GetPlayerTechCount(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): integer;

export declare function Jass_Native_SetPlayerUnitsOwner(
    whichPlayer: player,
    newOwner: integer
): nothing;

export declare function Jass_Native_CripplePlayer(
    whichPlayer: player,
    toWhichPlayer: force,
    flag: boolean
): nothing;

export declare function Jass_Native_SetPlayerAbilityAvailable(
    whichPlayer: player,
    abilid: integer,
    avail: boolean
): nothing;

export declare function Jass_Native_SetPlayerState(
    whichPlayer: player,
    whichPlayerState: playerstate,
    value: integer
): nothing;

export declare function Jass_Native_RemovePlayer(
    whichPlayer: player,
    gameResult: playergameresult
): nothing;

export declare function Jass_Native_CachePlayerHeroData(
    whichPlayer: player
): nothing;

/*Fog*/

export declare function Jass_Native_SetFogStateRect(
    whichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native_SetFogStateRadius(
    whichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native_SetFogStateRadiusLoc(
    whichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean
): nothing;

export declare function Jass_Native_FogMaskEnable(
    enable: boolean
): nothing;

export declare function Jass_Native_IsFogMaskEnabled(): boolean;

export declare function Jass_Native_FogEnable(
    enable: boolean
): nothing;

export declare function Jass_Native_IsFogEnabled(): boolean;

export declare function Jass_Native_CreateFogModifierRect(
    whichPlayer: player,
    whichState: fogstate,
    where: rect,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native_CreateFogModifierRadius(
    whichPlayer: player,
    whichState: fogstate,
    centerX: real,
    centerY: real,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native_CreateFogModifierRadiusLoc(
    whichPlayer: player,
    whichState: fogstate,
    center: location,
    radius: real,
    useSharedVision: boolean,
    afterUnits: boolean
): fogmodifier;

export declare function Jass_Native_DestroyFogModifier(
    whichFoModifier: fogmodifier
): nothing;

export declare function Jass_Native_FogModifierStart(
    whichFoModifier: fogmodifier
): nothing;

export declare function Jass_Native_FogModifierStop(
    whichFoModifier: fogmodifier
): nothing;

/*Game*/
export declare function Jass_Native_VersionGet(): version;

export declare function Jass_Native_VersionCompatible(
    whichVersion: version
): boolean;

export declare function Jass_Native_VersionSupported(
    whichVersion: version
): boolean;

export declare function Jass_Native_EndGame(
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native_ChangeLevel(
    newLevel: string,
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native_RestartGame(
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native_ReloadGame(): nothing;

export declare function Jass_Native_SetCampaignMenuRace(
    r: race
): nothing;

export declare function Jass_Native_SetCampaignMenuRaceEx(
    campaignIndex: integer
): nothing;

export declare function Jass_Native_ForceCampaignSelectScreen(): nothing;

export declare function Jass_Native_LoadGame(
    saveFileName: string,
    doScoreScreen: boolean
): nothing;

export declare function Jass_Native_SaveGame(
    saveFileName: string
): nothing;

export declare function Jass_Native_RenameSaveDirectory(
    sourceDirName: string,
    destDirName: string
): boolean;

export declare function Jass_Native_RemoveSaveDirectory(
    sourceDirName: string
): boolean;

export declare function Jass_Native_CopySaveGame(
    sourceSaveName: string,
    destSaveName: string
): boolean;

export declare function Jass_Native_SaveGameExists(
    saveName: string
): boolean;

export declare function Jass_Native_SyncSelections(): nothing;

export declare function Jass_Native_SetFloatGameState(
    whichFloatGameState: fgamestate,
    value: real
): nothing;

export declare function Jass_Constant_Native_GetFloatGameState(
    whichFloatGameState: fgamestate,
): real;

export declare function Jass_Native_SetIntegerGameState(
    whichFloatGameState: fgamestate,
    value: integer
): nothing;

export declare function Jass_Constant_Native_GetIntegerGameState(
    whichFloatGameState: fgamestate,
): integer;

/*Campain*/
export declare function Jass_Native_SetTutorialCleared(
    cleared: boolean
): nothing;

export declare function Jass_Native_SetMissionAvailable(
    campaignNumber: integer,
    missionNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native_SetCampaignAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native_SetOpCinematicAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native_SetEdCinematicAvailable(
    campaignNumber: integer,
    available: boolean
): nothing;

export declare function Jass_Native_GetDefaultDifficulty(): gamedifficulty;

export declare function Jass_Native_SetDefaultDifficulty(
    g: gamedifficulty
): nothing;

export declare function Jass_Native_SetCustomCampaignButtonVisible(
    whichButton: integer,
    visible: boolean
): nothing;

export declare function Jass_Native_GetCustomCampaignButtonVisible(
    whichButton: integer
): boolean;

export declare function Jass_Native_DoNotSaveReply(): nothing;

/*Dialog*/
export declare function Jass_Native_DialogCreate(): dialog;

export declare function Jass_Native_DialogDestroy(
    whichDialog: dialog
): nothing;

export declare function Jass_Native_DialogClear(
    whichDialog: dialog
): nothing;

export declare function Jass_Native_DialogSetMessage(
    whichDialog: dialog,
    messageText: string
): nothing;

export declare function Jass_Native_DialogAddButton(
    whichDialog: dialog,
    buttonText: string,
    hotKey: integer
): button;

export declare function Jass_Native_DialogAddQuitButton(
    whichDialog: dialog,
    doScoreScreen: boolean,
    buttonText: string,
    hotKey: integer
): button;

export declare function Jass_Native_DialogDisplay(
    whichPlayer: player,
    whichDialog: dialog,
    flag: boolean
): nothing;

/*Cache*/
export declare function Jass_Native_ReloadGameCachesFromDisk(): boolean;

export declare function Jass_Native_InitGameCache(
    campaignFile: string
): gamecache;

export declare function Jass_Native_SaveGameCache(
    whichCache: gamecache
): boolean;

export declare function Jass_Native_StoreInteger(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: integer
): nothing;

export declare function Jass_Native_StoreReal(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: real
): nothing;

export declare function Jass_Native_StoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: boolean
): nothing;

export declare function Jass_Native_StoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: unit
): nothing;

export declare function Jass_Native_StoreString(
    cache: gamecache,
    missionKey: string,
    key: string,
    value: string
): nothing;

export declare function Jass_Native_SyncStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_SyncStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_SyncStoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_SyncStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_SyncStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_HaveStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_HaveStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_HaveStoreBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_HaveStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_HaveStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_FlushGameCache(
    cache: gamecache
): nothing;

export declare function Jass_Native_FlushStoredMission(
    cache: gamecache,
    missionKey: string,
): nothing;

export declare function Jass_Native_FlushStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_FlushStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_FlushStoredBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_FlushStoredUnit(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;

export declare function Jass_Native_FlushStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): nothing;


export declare function Jass_Native_GetStoredInteger(
    cache: gamecache,
    missionKey: string,
    key: string
): integer;

export declare function Jass_Native_GetStoredReal(
    cache: gamecache,
    missionKey: string,
    key: string
): real;

export declare function Jass_Native_GetStoredBoolean(
    cache: gamecache,
    missionKey: string,
    key: string
): boolean;

export declare function Jass_Native_GetStoredString(
    cache: gamecache,
    missionKey: string,
    key: string
): string;

export declare function Jass_Native_RestoreUnit(
    cache: gamecache,
    missionKey: string,
    key: string,
    whichPlayer: player,
    x: real,
    y: real,
    facing: real
): unit;

/*HashTable*/
export declare function Jass_Native_initHshTable(): hashtable;

export declare function Jass_Native_SaveInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: integer
): nothing;

export declare function Jass_Native_SaveReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: real
): nothing;

export declare function Jass_Native_SaveBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: boolean
): nothing;

export declare function Jass_Native_SaveStr(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: string
): nothing;

export declare function Jass_Native_SavePlayerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: player
): nothing;

export declare function Jass_Native_SaveWidgetHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: widget
): nothing;

export declare function Jass_Native_SaveDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: destructable
): nothing;

export declare function Jass_Native_SaveItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: item
): nothing;

export declare function Jass_Native_SaveUnitHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: unit
): nothing;

export declare function Jass_Native_SaveAbilityHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: ability
): nothing;

export declare function Jass_Native_SaveTimerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: timer
): nothing;

export declare function Jass_Native_SaveTriggerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: trigger
): nothing;

export declare function Jass_Native_SaveTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: triggercondition
): nothing;

export declare function Jass_Native_SaveTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: triggeraction
): nothing;

export declare function Jass_Native_SaveTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: event
): nothing;

export declare function Jass_Native_SaveForceHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: force
): nothing;

export declare function Jass_Native_SaveGroupHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: group
): nothing;

export declare function Jass_Native_SaveLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: location
): nothing;

export declare function Jass_Native_SaveRectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: rect
): nothing;

export declare function Jass_Native_SaveBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: boolexpr
): nothing;

export declare function Jass_Native_SaveSoundHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: sound
): nothing;

export declare function Jass_Native_SaveEffectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: effect
): nothing;

export declare function Jass_Native_SaveUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: unitpool
): nothing;

export declare function Jass_Native_SaveItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: itempool
): nothing;

export declare function Jass_Native_SaveQuestHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: quest
): nothing;

export declare function Jass_Native_SaveQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: questitem
): nothing;

export declare function Jass_Native_SaveDefeatConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: defeatcondition
): nothing;

export declare function Jass_Native_SaveTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: timerdialog
): nothing;

export declare function Jass_Native_SaveLeaderBoardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: leaderboard
): nothing;

export declare function Jass_Native_SaveMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: multiboard
): nothing;

export declare function Jass_Native_SaveMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: multiboarditem
): nothing;

export declare function Jass_Native_SaveTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: trackable
): nothing;

export declare function Jass_Native_SaveDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: dialog
): nothing;

export declare function Jass_Native_SaveButtonHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: button
): nothing;

export declare function Jass_Native_SaveTextTagHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: texttag
): nothing;

export declare function Jass_Native_SaveLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: lightning
): nothing;

export declare function Jass_Native_SaveImageHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: image
): nothing;

export declare function Jass_Native_SaveRegionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: region
): nothing;

export declare function Jass_Native_SaveFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: fogstate
): nothing;

export declare function Jass_Native_SaveFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: fogmodifier
): nothing;

export declare function Jass_Native_SaveAgentHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: agent
): nothing;

export declare function Jass_Native_SaveHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer,
    value: hashtable
): nothing;


export declare function Jass_Native_LoadInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): integer;

export declare function Jass_Native_LoadReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): real;

export declare function Jass_Native_LoadBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_LoadStr(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): string;

export declare function Jass_Native_LoadPlayerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): player;

export declare function Jass_Native_LoadWidgetHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): widget;

export declare function Jass_Native_LoadDestructableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): destructable;

export declare function Jass_Native_LoadItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): item;

export declare function Jass_Native_LoadUnitHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): unit;

export declare function Jass_Native_LoadAbilityHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): ability;

export declare function Jass_Native_LoadTimerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): timer;

export declare function Jass_Native_LoadTriggerHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): trigger;

export declare function Jass_Native_LoadTriggerConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggercondition;

export declare function Jass_Native_LoadTriggerActionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): triggeraction;

export declare function Jass_Native_LoadTriggerEventHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): event;

export declare function Jass_Native_LoadForceHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): force;

export declare function Jass_Native_LoadGroupHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): group;

export declare function Jass_Native_LoadLocationHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): location;

export declare function Jass_Native_LoadIRectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): rect;

export declare function Jass_Native_LoadBooleanExprHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolexpr;

export declare function Jass_Native_LoadSoundHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): sound;

export declare function Jass_Native_LoadEffectHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): effect;

export declare function Jass_Native_LoadUnitPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): unitpool;

export declare function Jass_Native_LoadItemPoolHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): itempool;

export declare function Jass_Native_LoadQuestHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): quest;

export declare function Jass_Native_LoadQuestItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): questitem;

export declare function Jass_Native_LoadDefaultConditionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): defeatcondition;

export declare function Jass_Native_LoadTimerDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): timerdialog;

export declare function Jass_Native_LoadLeaderBoardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): leaderboard;

export declare function Jass_Native_LoadMultiboardHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboard;

export declare function Jass_Native_LoadMultiboardItemHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): multiboarditem;

export declare function Jass_Native_LoadTrackableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): trackable;

export declare function Jass_Native_LoadDialogHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): dialog;

export declare function Jass_Native_LoadButtonHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): button;

export declare function Jass_Native_LoadTextTagHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): texttag;

export declare function Jass_Native_LoadLightningHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): lightning;

export declare function Jass_Native_LoadImageHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): image;

export declare function Jass_Native_LoadUbersplatHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): ubersplat;

export declare function Jass_Native_LoadRegionHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): region;

export declare function Jass_Native_LoadFogStateHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogstate;

export declare function Jass_Native_LoadFogModifierHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): fogmodifier;

export declare function Jass_Native_LoadHashtableHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): hashtable;

export declare function Jass_Native_HaveSavedInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_HaveSavedReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_HaveSavedBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_HaveSavedString(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_HaveSavedHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): boolean;

export declare function Jass_Native_RemoveSavedInteger(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native_RemoveSavedReal(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native_RemoveSavedBoolean(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native_RemoveSavedString(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native_RemoveSavedHandle(
    table: hashtable,
    parentKey: integer,
    childKey: integer
): nothing;

export declare function Jass_Native_FlushParentHashTable(
    table: hashtable
): nothing;

export declare function Jass_Native_FlushChildHashTable(
    table: hashtable,
    parentKey: integer
): nothing;

/*Random*/
export declare function Jass_Native_GetRandomInt(
    low: integer,
    high: integer
): integer;

export declare function Jass_Native_GetRandomReal(
    low: real,
    high: real
): real;

/*Pool*/
export declare function Jass_Native_CreateUnitPool(): unitpool;

export declare function Jass_Native_DestroyUnitPool(
    whichPool: unitpool
): nothing;

export declare function Jass_Native_UnitPoolAddUnitType(
    whichPool: unitpool,
    unitId: integer,
    weight: real
): nothing;

export declare function Jass_Native_UnitPoolRemoveUnitType(
    whichPool: unitpool,
    unitId: integer,
): nothing;

export declare function Jass_Native_PlaceRandomUnit(
    whichPool: unitpool,
    whichPlayer: player,
    x: real,
    y: real,
    facing: real
): unit;

export declare function Jass_Native_CreateItemPool(): itempool;

export declare function Jass_Native_DestroyItemPool(
    whichItemPool: itempool
): nothing;

export declare function Jass_Native_ItemPoolAddItemType(
    whichPool: itempool,
    itemid: integer,
    weight: real
): nothing;

export declare function Jass_Native_ItemPoolRemoveItemType(
    whichPool: itempool,
    itemid: integer,
): nothing;

export declare function Jass_Native_PlaceRandomItem(
    whichPool: itempool,
    x: real,
    y: real,
): itempool;

export declare function Jass_Native_ChooseRandomCreep(
    level: integer
): integer;

export declare function Jass_Native_ChooseRandomNPBuilding(): integer;

export declare function Jass_Native_ChooseRandomItem(
    level: integer
): integer;

export declare function Jass_Native_ChooseRandomItemEx(
    whichType: itemtype,
    level: integer
): integer;

export declare function Jass_Native_SetRandomSeed(
    seed: integer
): nothing;

/*Visual*/
export declare function Jass_Native_SetTerrainFog(
    a: real,
    b: real,
    c: real,
    d: real,
    e: real
): nothing;

export declare function Jass_Native_ResetTerrainFog(): nothing;

export declare function Jass_Native_SetUnitFog(
    a: real,
    b: real,
    c: real,
    d: real,
    e: real
): nothing;

export declare function Jass_Native_SetTerrainFogEx(
    style: integer,
    zstart: real,
    zend: real,
    density: real,
    red: real,
    green: real,
    blue: real
): nothing;

export declare function Jass_Native_DisplayTextToPlayer(
    toPlayer: player,
    x: real,
    y: real,
    message: string
): nothing;

export declare function Jass_Native_DisplayTimedTextToPlayer(
    toPlayer: player,
    x: real,
    y: real,
    duration: real,
    message: string
): nothing;

export declare function Jass_Native_DisplayTimedTextFromPlayer(
    toPlayer: player,
    x: real,
    y: real,
    duration: real,
    message: string
): nothing;

export declare function Jass_Native_ClearTextMessages(): nothing;

export declare function Jass_Native_SetDayNightModels(
    terrainDNCFile: string,
    unitDNCFile: string,
): nothing;

export declare function Jass_Native_SetSkyModel(
    skyModelFile: string
): nothing;

export declare function Jass_Native_EnableUserControl(
    b: boolean
): nothing;

export declare function Jass_Native_EnableUserUI(
    b: boolean
): nothing;

export declare function Jass_Native_SuspendTimeOfDay(
    b: boolean
): nothing;

export declare function Jass_Native_SetTimeOfDayScale(
    r: real
): nothing;

export declare function Jass_Native_GetTimeOfDayScale(): real;

export declare function Jass_Native_ShowInterface(
    flag: boolean,
    fadeDuration: real
): nothing;

export declare function Jass_Native_PauseGame(
    flag: boolean
): nothing;

export declare function Jass_Native_UnitAddIndicator(
    whichUnit: unit,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_AddIndicator(
    whichWidget: widget,
    read: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_PingMinimap(
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native_PingMinimapEx(
    x: real,
    y: real,
    duration: real,
    read: integer,
    green: integer,
    blue: integer,
    extraEffects: boolean
): nothing;

export declare function Jass_Native_EnableOcclusion(
    flag: boolean
): nothing;

export declare function Jass_Native_SetIntroShotText(
    introText: string
): nothing;

export declare function Jass_Native_SetIntroShotModel(
    introModelPath: string
): nothing;

export declare function Jass_Native_EnableWorldFogBoundary(
    flag: boolean
): nothing;

export declare function Jass_Native_PlayModelCinematic(
    modelName: string
): nothing;

export declare function Jass_Native_PlayCinematic(
    movieName: string
): nothing;

export declare function Jass_Native_ForceUIKey(
    key: string
): nothing;

export declare function Jass_Native_ForceUICancel(): nothing;

export declare function Jass_Native_DisplayLoadDialog(): nothing;

export declare function Jass_Native_SetAltMinimapIcon(
    iconPath: string
): nothing;

export declare function Jass_Native_DisableRestartMission(
    flag: boolean
): nothing;

export declare function Jass_Native_CreateTextTag(): texttag;

export declare function Jass_Native_DestroyTextTag(
    t: texttag
): nothing;

export declare function Jass_Native_SetTextTagText(
    t: texttag,
    s: string,
    height: real
): nothing;

export declare function Jass_Native_SetTextTagPos(
    t: texttag,
    x: real,
    y: real,
    heightOffset: real
): nothing;

export declare function Jass_Native_SetTextTagPosUnit(
    t: texttag,
    whichUnit: unit,
    heightOffset: real
): nothing;

export declare function Jass_Native_SetTextTagColor(
    t: texttag,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_SetTextTagVelocity(
    t: texttag,
    xvuel: real,
    yvel: real
): nothing;

export declare function Jass_Native_SetTextTagVisibility(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native_SetTextTagSuspended(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native_SetTextTagPermanent(
    t: texttag,
    flag: boolean
): nothing;

export declare function Jass_Native_SetTextTagAge(
    t: texttag,
    age: real
): nothing;

export declare function Jass_Native_SetTextTagLifeSpan(
    t: texttag,
    lifespan: real
): nothing;

export declare function Jass_Native_SetTextTagFadepoint(
    t: texttag,
    fadepoint: real
): nothing;

export declare function Jass_Native_SetReservedLocalHeroButtons(
    reserved: integer
): nothing;

export declare function Jass_Native_GetAllyColorFilterState(): integer;

export declare function Jass_Native_SetAllyColorFilterState(
    state: integer
): nothing;

export declare function Jass_Native_GetCreepCampFilterState(): boolean;

export declare function Jass_Native_SetCreepCampFilterState(
    state: boolean
): nothing;

export declare function Jass_Native_EnableMinimapFilterButtons(
    enableAlly: boolean,
    enableCreep: boolean
): nothing;

export declare function Jass_Native_EnableDragSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native_EnablePreSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native_EnableSelect(
    state: boolean,
    ui: boolean
): nothing;

export declare function Jass_Native_CreateTrackable(
    trackableModelPath: string,
    x: real,
    y: real,
    facing: real
): trackable;

export declare function Jass_Native_CreateQuest(): quest;

export declare function Jass_Native_DestroyQuest(
    whichQuest: quest
): nothing;

export declare function Jass_Native_QuestSetTitle(
    whichQuest: quest,
    title: string
): nothing;

export declare function Jass_Native_QuestSetDescription(
    whichQuest: quest,
    description: string
): nothing;

export declare function Jass_Native_QuestSetIconPath(
    whichQuest: quest,
    iconPath: string
): nothing;

export declare function Jass_Native_QuestSetRequired(
    whichQuest: quest,
    required: boolean
): nothing;

export declare function Jass_Native_QuestSetCompleted(
    whichQuest: quest,
    completed: boolean
): nothing;

export declare function Jass_Native_QuestSetDiscovered(
    whichQuest: quest,
    discovered: boolean
): nothing;

export declare function Jass_Native_QuestSetFailed(
    whichQuest: quest,
    failed: boolean
): nothing;

export declare function Jass_Native_QuestSetEnabled(
    whichQuest: quest,
    enabled: boolean
): nothing;

export declare function Jass_Native_IsQuestRequired(
    whichQuest: quest
): boolean;

export declare function Jass_Native_IsQuestCompleted(
    whichQuest: quest
): boolean;

export declare function Jass_Native_IsQuestDiscovered(
    whichQuest: quest
): boolean;

export declare function Jass_Native_IsQuestFailed(
    whichQuest: quest
): boolean;

export declare function Jass_Native_IsQuestEnabled(
    whichQuest: quest
): boolean;

export declare function Jass_Native_QuestCreateItem(
    whichQuest: quest,
): questitem;

export declare function Jass_Native_QuestItemSetDescription(
    whichQuestItem: questitem,
    description: string
): nothing;

export declare function Jass_Native_QuestItemSetCompleted(
    whichQuestItem: questitem,
    completed: boolean
): nothing;

export declare function Jass_Native_IsQuestItemCompleted(
    whichQuestItem: questitem
): boolean;

export declare function Jass_Native_CreateDefaultCondition(): defeatcondition;

export declare function Jass_Native_DestroyDefeatCondition(
    whichCondition: defeatcondition
): nothing;

export declare function Jass_Native_DefaultConditionSetDescription(
    whichCondition: defeatcondition,
    description: string
): nothing;

export declare function Jass_Native_CreateTimerDialog(
    t: timer
): timerdialog;

export declare function Jass_Native_DestroyTimerDialog(
    whichDialog: timerdialog
): nothing;

export declare function Jass_Native_TimerDialogSetTitle(
    whichDialog: timerdialog,
    title: string
): nothing;

export declare function Jass_Native_TimerDialogSetTitleColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_TimerDialogTimeColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_TimerDialogSetSpeed(
    whichDialog: timerdialog,
    speedMultFactor: real
): nothing;

export declare function Jass_Native_TimerDialogDisplay(
    whichDialog: timerdialog,
    display: boolean
): nothing;

export declare function Jass_Native_IsTimerDialogDisplayed(
    whichDialog: timerdialog
): boolean;

export declare function Jass_Native_TimerDialogSetRealTimeRemanining(
    whichDialog: timerdialog,
    timeRemanining: real
): nothing;

export declare function Jass_Native_CreateLeaderboard(): leaderboard;

export declare function Jass_Native_DestroyLeaderboard(
    lb: leaderboard
): nothing;

export declare function Jass_Native_LeaderboardGetItemCount(
    lb: leaderboard
): integer;

export declare function Jass_Native_LeaderboardSetSizeByItemCount(
    lb: leaderboard,
    count: integer
): nothing;

export declare function Jass_Native_LeaderboardAddItem(
    lb: leaderboard,
    label: string,
    value: integer,
    p: player
): nothing;

export declare function Jass_Native_LeaderboardRemoveItem(
    lb: leaderboard,
    index: integer
): nothing;

export declare function Jass_Native_LeaderboardRemovePlayerItem(
    lb: leaderboard,
    p: player
): nothing;

export declare function Jass_Native_LeaderboardClear(
    lb: leaderboard
): nothing;

export declare function Jass_Native_LeaderboardSortItemsByValue(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native_LeaderboardSortItemsByPlayer(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native_LeaderboardSortItemsByLabel(
    lb: leaderboard,
    ascending: boolean
): nothing;

export declare function Jass_Native_LeaderboardHasPlayerItem(
    lb: leaderboard,
    p: player
): boolean;

export declare function Jass_Native_LeaderboardGetPlayerIndex(
    lb: leaderboard,
    p: player
): integer;

export declare function Jass_Native_LeaderboardSetLabel(
    lb: leaderboard,
    label: string
): nothing;

export declare function Jass_Native_LeaderboardGetLabelText(
    lb: leaderboard
): string;

export declare function Jass_Native_PlayerSetLeaderboard(
    toPlayer: player,
    lb: leaderboard
): nothing;

export declare function Jass_Native_PlayerGetLeaderboard(
    toPlayer: player
): leaderboard;

export declare function Jass_Native_LeaderboardSetLabelColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_LeaderboardSetValueColor(
    lb: leaderboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_LeaderboardSetStyle(
    lb: leaderboard,
    showLabel: boolean,
    showNames: boolean,
    showValues: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native_LeaderboardSetItemValue(
    lb: leaderboard,
    whichItem: integer,
    val: integer
): nothing;

export declare function Jass_Native_LeaderboardSetItemLable(
    lb: integer,
    whichItem: integer,
    val: string
): nothing;

export declare function Jass_Native_LeaderSetItemStyle(
    lb: integer,
    whichItem: integer,
    showLable: boolean,
    showValue: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native_LeaderboardSetItemLableColor(
    lb: integer,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_LeaderboardSetItemValueColor(
    lb: integer,
    whichItem: integer,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_CreateMultiboard(): multiboard;

export declare function Jass_Native_DestroyMultiboard(
    lb: multiboard
): nothing;

export declare function Jass_Native_MultiboardDisplay(
    lb: multiboard,
    show: boolean
): nothing;

export declare function Jass_Native_IsMultiboardDisplayed(
    lb: multiboard
): boolean;

export declare function Jass_Native_MultiboardMinimize(
    lb: multiboard,
    minisize: boolean
): nothing;

export declare function Jass_Native_IsMultiboardDisplayed(
    lb: multiboard
): boolean;

export declare function Jass_Native_MultiboardClear(
    lb: multiboard
): nothing;

export declare function Jass_Native_MultiboardSetTitleText(
    lb: multiboard,
    label: string
): nothing;

export declare function Jass_Native_MultiboardGetTitleText(
    lb: multiboard
): string;

export declare function Jass_Native_MultiboardSetTitleTextColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_MultiboardGetRowCount(
    lb: multiboard
): integer;

export declare function Jass_Native_MultiboardGetColumnCount(
    lb: multiboard
): integer;

export declare function Jass_Native_MultiboardSetItemStyle(
    lb: multiboard,
    showValues: boolean,
    showIcons: boolean
): nothing;

export declare function Jass_Native_MultiboardSetItemValue(
    lb: multiboard,
    value: string
): nothing;

export declare function Jass_Native_MultiboardSetValueColor(
    lb: multiboard,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_MultiboardSetItemsWidth(
    lb: multiboard,
    width: real
): nothing;

export declare function Jass_Native_MultiboardSetItemIcon(
    lb: multiboard,
    iconPath: string
): nothing;

export declare function Jass_Native_MultiboardGetItem(
    lb: multiboard,
    row: integer,
    column: integer
): multiboarditem;

export declare function Jass_Native_MultiboardReleaseItem(
    mbi: multiboarditem
): nothing;

export declare function Jass_Native_MultiboardSetItemStyle(
    mbi: multiboarditem,
    showValue: boolean,
    showIcon: boolean
): nothing;

export declare function Jass_Native_MultiboardSetItemValue(
    mbi: multiboarditem,
    val: string
): nothing;

export declare function Jass_Native_MultiboardSetItemValueColor(
    mbi: multiboarditem,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_MultiboardSetItemWidth(
    mbi: multiboarditem,
    width: real
): nothing;

export declare function Jass_Native_MultiboardSetItemIcon(
    mbi: multiboarditem,
    iconFileName: string
): nothing;

export declare function Jass_Native_MultiboardSuppressDisplay(
    flag: boolean
): nothing;

/*Camera*/
export declare function Jass_Native_SetCameraPosition(
    x: real,
    y: real
): nothing;

export declare function Jass_Native_SetCameraQuickPosition(
    x: real,
    y: real
): nothing;

export declare function Jass_Native_SetCameraBounds(
    x1: real,
    y1: real,
    x2: real,
    y2: real,
    x3: real,
    y3: real,
    x4: real,
    y5: real
): nothing;

export declare function Jass_Native_StopCamera(): nothing;

export declare function Jass_Native_ResetToGameCamera(
    duration: real
): nothing;

export declare function Jass_Native_PanCameraTo(
    x: real,
    y: real
): nothing;

export declare function Jass_Native_PanCameraToTimed(
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native_PanCameraToTimedWithZ(
    x: real,
    y: real,
    zOffsetDest: real
): nothing;

export declare function Jass_Native_SetCinematicCamera(
    cameraModelFile: string
): nothing;

export declare function Jass_Native_SetCameraRotateMode(
    x: real,
    y: real,
    radiansToSweep: real,
    duration: real
): nothing;

export declare function Jass_Native_SetCameraField(
    whichField: camerafield,
    value: real,
    duration: real
): nothing;

export declare function Jass_Native_AdjustCameraField(
    whichField: camerafield,
    offset: real,
    duration: real
): nothing;

export declare function Jass_Native_SetCameraTargetController(
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
    orientation: boolean
): nothing;

export declare function Jass_Native_SetCameraOrientController(
    whichUnit: unit,
    xoffset: real,
    yoffset: real,
): nothing;

export declare function Jass_Native_CreateCameraSetup(): camerasetup;

export declare function Jass_Native_CameraSetupSetField(
    whichSetup: camerasetup,
    whichField: camerafield,
    value: real,
    duration: real
): nothing;

export declare function Jass_Native_CameraSetupGetField(
    whichSetup: camerasetup,
    whichField: camerafield
): real;

export declare function Jass_Native_CameraSetupSetDestPosition(
    whichSetup: camerasetup,
    x: real,
    y: real,
    duration: real
): nothing;

export declare function Jass_Native_CameraGetupGetDestPositionLoc(
    whichSetup: camerasetup,
): location;

export declare function Jass_Native_CameraGetDestPositionX(
    whichSetup: camerasetup,
): real;

export declare function Jass_Native_CameraSetupGetDestPositionY(
    whichSetup: camerasetup,
): real;

export declare function Jass_Native_CameraSetupApply(
    whichSetup: camerasetup,
    doPan: boolean,
    panTimed: boolean
): nothing;

export declare function Jass_Native_CameraSetupApplyWithZ(
    whichSetup: camerasetup,
    zDestOffset: real
): nothing;

export declare function Jass_Native_CameraSetupApplyForceDuration(
    whichSetup: camerasetup,
    doPan: boolean,
    forceDuration: real
): nothing;

export declare function Jass_Native_CameraSetupApplyForceDurationWithZ(
    whichSetup: camerasetup,
    zDestOffset: real,
    forceDuration: real
): nothing;

export declare function Jass_Native_CameraSetTargetNoise(
    mag: real,
    velocity: real
): nothing;

export declare function Jass_Native_CameraSetSourceNoise(
    mag: real,
    velocity: real
): nothing;

export declare function Jass_Native_CameraSetTargetNoiseEx(
    mag: real,
    velocity: real,
    vertOnly: boolean
): nothing;

export declare function Jass_Native_CameraSetSourceNoiseEx(
    real: mag,
    velocity: real,
    vertOnly: boolean
): nothing;

export declare function Jass_Native_CameraSetSmoothingFactor(
    factor: real
): nothing;

export declare function Jass_Native_SetCineFilterTexture(
    filename: string
): nothing;

export declare function Jass_Native_SetCineFilterBlendMode(
    whichMode: blendmode
): nothing;

export declare function Jass_Native_SetCineFilterTexMapFlags(
    whichFlags: texmapflags
): nothing;

export declare function Jass_Native_SetCineFilterStartUV(
    minu: real,
    minv: real,
    maxu: real,
    maxv: real
): nothing;

export declare function Jass_Native_SetCineFilterEndUV(
    minu: real,
    minv: real,
    maxu: real,
    maxv: real
): nothing;

export declare function Jass_Native_SetCineFilterStartColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_SetCineFilterEndColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_SetCineFilterDuration(
    duration: real,
): nothing;


export declare function Jass_Native_DisplayCineFilter(
    flag: boolean
): nothing;

export declare function Jass_Native_IsCineFilterDisplayed(): boolean;

export declare function Jass_Native_SetCinematicScene(
    portraitUnitId: integer,
    color: playercolor,
    speakerTitle: string,
    text: string,
    sceneDuration: real,
    voiceoverDuration: real
): nothing;

export declare function Jass_Native_EndCinematicScene(): nothing;

export declare function Jass_Native_ForceCinematicSubtitles(
    flag: boolean
): nothing;

export declare function Jass_Native_GetCameraMargin(
    whichMargin: integer
): real;

export declare function Jass_Constant_Native_GetCameraBoundMinX(): real;

export declare function Jass_Constant_Native_GetCameraBoundMinY(): real;

export declare function Jass_Constant_Native_GetCameraBoundMaxX(): real;

export declare function Jass_Constant_Native_GetCameraBoundMaxY(): real;

export declare function Jass_Constant_Native_GetCameraField(
    whichField: camerafield
): real;

export declare function Jass_Constant_Native_GetCameraTargetPositionX(): real;

export declare function Jass_Constant_Native_GetCameraTargetPositionY(): real;
export declare function Jass_Constant_Native_GetCameraTargetPositionY(): real;

export declare function Jass_Constant_Native_GetCameraTargetPositionLoc(): location;

export declare function Jass_Constant_Native_GetCameraEyePositionX(): real;

export declare function Jass_Constant_Native_GetCameraEyePositionY(): real;

export declare function Jass_Constant_Native_GetCameraEyePositionZ(): real;

export declare function Jass_Constant_Native_GetCameraEyePositionLoc(): location;

/*Sound*/
export declare function Jass_Native_NewSoundEnvironment(
    environmentName: string
): nothing;

export declare function Jass_Native_CreateSound(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    eaxSetting: string
): sound;

export declare function Jass_Native_CreateSoundFilenameWithLabel(
    fileName: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
    SLKEntryName: string
): sound;

export declare function Jass_Native_CreateSoundFromLabel(
    soundLabel: string,
    looping: boolean,
    is3D: boolean,
    stopWhenOutToFrange: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
): sound;

export declare function Jass_Native_CreateMIDISound(
    soundLabel: string,
    looping: boolean,
    fadeInRate: integer,
    fadeOutRate: integer,
): sound;

export declare function Jass_Native_SetSoundParamsFromLabel(
    soundHandle: sound,
    soundLabel: string
): nothing;

export declare function Jass_Native_SetSoundDistanceCutoff(
    soundHandle: sound,
    cutoff: real
): nothing;

export declare function Jass_Native_SetSoundChannel(
    soundHandle: sound,
    channel: integer
): nothing;

export declare function Jass_Native_SetSoundVolume(
    soundHandle: sound,
    volume: integer
): nothing;

export declare function Jass_Native_SetSoundPitch(
    soundHandle: sound,
    pitch: real
): nothing;

export declare function Jass_Native_SetSoundPlayPosition(
    soundHandle: sound,
    millisecs: integer
): nothing;

export declare function Jass_Native_SetSoundDistances(
    soundHandle: sound,
    minDist: real,
    maxDist: real
): nothing;

export declare function Jass_Native_SetSoundConeAngles(
    soundHandle: sound,
    inside: real,
    outside: real,
    outsideVolume: integer
): nothing;

export declare function Jass_Native_SetSoundConeOrientation(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native_SetSoundPosition(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native_SetSoundVelocity(
    soundHandle: sound,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native_AttachSoundToUnit(
    soundHandle: sound,
    whichUnit: unit
): nothing;

export declare function Jass_Native_StartSound(
    soundHandle: sound
): nothing;

export declare function Jass_Native_StopSound(
    soundHandle: sound,
    killWhenDone: boolean,
    fadeOut: boolean
): nothing;

export declare function Jass_Native_KillSoundWhenDone(): nothing;

export declare function Jass_Native_SetMapMusic(
    musicName: string,
    random: boolean,
    index: integer
): nothing;

export declare function Jass_Native_ClearMapMusic(): nothing;

export declare function Jass_Native_PlayMusic(
    musicName: string
): nothing;

export declare function Jass_Native_PlayMusicEx(
    musicName: string,
    frommsecs: integer,
    fadeinmsecs: integer
): nothing;

export declare function Jass_Native_StopMusic(
    fadeOut: boolean
): nothing;

export declare function Jass_Native_ResumeMusic(): nothing;

export declare function Jass_Native_PlayThematicMusic(
    musicFileName: string
): nothing;

export declare function Jass_Native_PlayThematicMusicEx(
    musicFileName: string,
    frommsecs: integer
): nothing;

export declare function Jass_Native_EndThematicMusic(): nothing;

export declare function Jass_Native_SetMusicVolume(
    volume: integer
): nothing;

export declare function Jass_Native_SetMusicPlayPosition(
    millisecs: integer
): nothing;

export declare function Jass_Native_SetThematicMusicPlayerPosition(
    millisecs: integer
): nothing;

export declare function Jass_Native_SetSoundDuration(
    soundHandle: sound,
    duration: integer
): nothing;

export declare function Jass_Native_GetSoundDuration(
    soundHandle: sound
): integer;

export declare function Jass_Native_GetSoundFileDuration(
    musicFileName: string
): integer;

export declare function Jass_Native_VolumeGroupSetVolume(
    vgroup: volumegroup,
    scale: real
): nothing;

export declare function Jass_Native_VolumeGroupReset(): nothing;

export declare function Jass_Native_GetSoundIsPlaying(
    soundHandle: sound
): boolean;

export declare function Jass_Native_GetSoundIsLoading(
    soundHandle: sound
): boolean;

export declare function Jass_Native_RegisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectWidth: real,
    rectHeight: real
): nothing;

export declare function Jass_Native_UnregisterStackedSound(
    soundHandle: sound,
    byPosition: boolean,
    rectWidth: real,
    rectHeight: real
): nothing;

export declare function Jass_Native_AddWeatherEffect(
    where: rect,
    effectId: integer
): weathereffect;

export declare function Jass_Native_RemoveWeatherEffect(
    whichEffect: weathereffect
): nothing;

export declare function Jass_Native_EnableWeatherEffect(
    whichEffect: weathereffect,
    enable: boolean
): nothing;

export declare function Jass_Native_TerrainDeformCrater(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    permanent: boolean
): terraindeformation;

export declare function Jass_Native_TerrainDeformRipple(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    count: integer,
    spaceWaves: real,
    timeWaves: real,
    radiusStartPct: real,
    limitNeg: boolean
): terraindeformation;

export declare function Jass_Native_TerrainDeformWave(
    x: real,
    y: real,
    dirX: real,
    dirY: real,
    distance: real,
    speed: real,
    radius: real,
    depth: real,
    trailTime: integer,
    count: integer
): terraindeformation;

export declare function Jass_Native_TerrainDeformRandom(
    x: real,
    y: real,
    radius: real,
    minDelta: real,
);

export declare function Jass_Native_TerrainDeformStop(
    deformation: terraindeformation,
    duration: integer
): nothing;

export declare function Jass_Native_TerrainDeformStopAll(): nothing;

export declare function Jass_Native_AddSpecialEffect(
    modelName: string,
    x: real,
    y: real
): effect;

export declare function Jass_Native_AddSpecialEffectLoc(
    modelName: string,
    where: locaiton
): effect;

export declare function Jass_Native_AddSpecialEffectTarget(
    modelName: string,
    target: widget,
    attchPointName: string
): effect;

export declare function Jass_Native_DestroyEffect(
    whichEffect: effect
): nothing;

export declare function Jass_Native_AddSpellEffect(
    abilityString: string,
    t: effectype,
    x: real,
    y: real
): effect;

export declare function Jass_Native_AddSpellEffectLoc(
    abilityString: string,
    t: effectype,
    where: location
): effect;

export declare function Jass_Native_AddSpellEffectById(
    abilityId: integer,
    t: effectype,
    x: real,
    y: real
): effect;

export declare function Jass_Native_AddSpellEffectByIdLoc(
    abilityId: integer,
    t: effectype,
    where: location
): effect;

export declare function Jass_Native_AddSpellEffectTarget(
    modleName: string,
    t: effectype,
    target: widget,
    attachPoint: string
): effect;

export declare function Jass_Native_AddSpellEffectTargetById(
    abilityId: integer,
    t: effectype,
    target: widget,
    attachPoint: string
): effect;

export declare function Jass_Native_AddLightning(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real,
): lightning;

export declare function Jass_Native_AddLightningEx(
    codeName: string,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real,
): lightning;

export declare function Jass_Native_DestroyLightning(
    whichBolt: lightning
): boolean;

export declare function Jass_Native_MoveLightning(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    x2: real,
    y2: real,
): boolean;

export declare function Jass_Native_MoveLightningEx(
    whichBolt: lightning,
    checkVisibility: boolean,
    x1: real,
    y1: real,
    z1: real,
    x2: real,
    y2: real,
    z2: real,
): boolean;

export declare function Jass_Native_GetLightningColorA(
    whichBolt: lightning,
): real;

export declare function Jass_Native_GetLightningColorR(
    whichBolt: lightning,
): real;

export declare function Jass_Native_GetLightningColorG(
    whichBolt: lightning,
): real;

export declare function Jass_Native_GetLightningColorB(
    whichBolt: lightning,
): real;

export declare function Jass_Native_SetLightningColor(
    whichBolt: lightning,
    r: real,
    g: real,
    b: real,
    a: real,
): boolean;

export declare function Jass_Native_GetAbilityEffect(
    abilityString: string,
    t: effectype,
    index: integer
): string;

export declare function Jass_Native_GetAbilityEffectById(
    abilityId: integer,
    t: effectype,
    index: integer
): string;

export declare function Jass_Native_GetAbilitySound(
    abilityString: string,
    t: soundtype
): string;

export declare function Jass_Native_GetAbilitySoundById(
    abilityId: integer,
    t: soundtype
): string;

/*Terrain*/
export declare function Jass_Native_GetTerrainCliffLevel(
    x: real,
    y: real
): integer;

export declare function Jass_Native_SetWaterBaseColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): nothing;

export declare function Jass_Native_SetWaterDeforms(
    val: boolean
): nothing;

export declare function Jass_Native_GetTerrainType(
    x: real,
    y: real
): integer;

export declare function Jass_Native_GetTerrainVariance(
    x: real,
    y: real
): integer;

export declare function Jass_Native_SetTerrainType(
    x: real,
    y: real,
    terrainType: integer,
    variation: integer,
    area: integer,
    shape: integer
): nothing;


export declare function Jass_Native_IsTerrainPathable(
    x: real,
    y: real,
    t: pathingtype
): boolean;

export declare function Jass_Native_SetTerrainPathable(
    x: real,
    y: real,
    t: pathingtype,
    flag: boolean
): nothing;

/*Image*/
export declare function Jass_Native_CreateImage(
    file: string,
    sizeX: real,
    sizeY: real,
    sizeZ: real,
    posX: real,
    posY: real,
    posZ: real,
    originX: real,
    originY: real,
    originZ: real,
    imageType: integer
): image;

export declare function Jass_Native_DestroyImage(
    whichImage: image
): nothing;

export declare function Jass_Native_ShowImage(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native_SetImageConstantHeight(
    whichImage: image,
    flag: boolean,
    height: real
): nothing;

export declare function Jass_Native_SetImagePosition(
    whichImage: image,
    x: real,
    y: real,
    z: real
): nothing;

export declare function Jass_Native_SetImageColor(
    whichImage: image,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer,
): nothing;

export declare function Jass_Native_SetImageRender(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native_SetImageRenderAlways(
    whichImage: image,
    flag: boolean
): nothing;

export declare function Jass_Native_SetImageAboveWater(
    whichImage: image,
    flag: boolean,
    userWaterAlpha: boolean
): nothing;

export declare function Jass_Native_SetImageType(
    whichImage: image,
    imageType: integer
): nothing;

/*Ubersplat*/
export declare function Jass_Native_CreateUbersplat(
    x: real,
    y: real,
    name: string,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer,
    forcePaused: boolean,
    onBirthTime: boolean
): ubersplat;

export declare function Jass_Native_DestroyUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native_ResetUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native_FinishUbersplat(
    whichSplat: ubersplat
): nothing;

export declare function Jass_Native_ShowUbersplat(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

export declare function Jass_Native_SetUbersplatRender(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

export declare function Jass_Native_SetUbersplatRenderAlways(
    whichSplat: ubersplat,
    flag: boolean
): nothing;

/*Blight*/
export declare function Jass_Native_SetBlight(
    whichPlayer: player,
    x: real,
    y: real,
    radius: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native_SetBlightRect(
    whichPlayer: player,
    r: rect,
    radius: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native_SetBlightPoint(
    whichPlayer: player,
    x: real,
    y: real,
    addBlight: boolean
): nothing;

export declare function Jass_Native_SetBlightLoc(
    whichPlayer: player,
    whichLocation: location,
    radius: real,
    addBlight: boolean
): unit;

export declare function Jass_Native_CreateBlightedGoldmine(
    id: player,
    x: real,
    y: real,
    face: real
): unit;

export declare function Jass_Native_IsPointBlighted(
    x: real,
    y: real
): boolean;

/*Doodad*/
export declare function Jass_Native_SetDoodadAnimation(
    x: real,
    y: real,
    radius: real,
    doodadID: integer,
    nearestOnly: boolean,
    animName: string,
    animRandom: boolean
): nothing;

export declare function Jass_Native_SetDoodadAnimationRect(
    r: rect,
    doodadID: integer,
    animName: string,
    animRandom: boolean
): nothing;

/*Computer*/
export declare function Jass_Native_StartMelleAI(
    num: player,
    script: string
): nothing;

export declare function Jass_Native_StartCampaignAI(
    num: player,
    script: string
): nothing;

export declare function Jass_Native_CommandAI(
    num: player,
    command: integer,
    data: integer
): nothing;

export declare function Jass_Native_PauseCompAI(
    p: player,
    pause: boolean
): nothing;

export declare function Jass_Native_GetAIDifficulty(
    num: player
): aidifficulty;

export declare function Jass_Native_RemoveGuardPosition(
    hUnit: unit
): nothing;

export declare function Jass_Native_RecycleGuardPosition(
    hUnit: unit
): nothing;

export declare function Jass_Native_RemoveAllGuardPositions(
    num: player
): nothing;

export declare function Jass_Native_Cheat(
    cheatStr: string
): nothing;

export declare function Jass_Native_IsNoVictoryCheat(): boolean;

export declare function Jass_Native_IsNoDefeatCheat(): boolean;

export declare function Jass_Native_Preload(
    filename: string
): nothing;

export declare function Jass_Native_PreloadEnd(
    timeout: real
): nothing;

export declare function Jass_Native_PreloadStart(): nothing;

export declare function Jass_Native_PreloadRefresh(): nothing;

export declare function Jass_Native_PreloadEndEx(): nothing;

export declare function Jass_Native_PreloadGenClear(): nothing;

export declare function Jass_Native_PreloadGenStart(): nothing;

export declare function Jass_Native_PreloadGenEnd(
    filename: string
): nothing;

export declare function Jass_Native_Preloader(
    filename: string
): nothing;











