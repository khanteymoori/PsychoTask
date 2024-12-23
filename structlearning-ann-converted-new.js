/*************************** 
 * Structlearning-Ann *
 ***************************/

import { core, data, util, visual, hardware, sound  } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;





// store info about the experiment session:
let expName = 'structlearning-ann';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);

flowScheduler.add(welcomeRoutineBegin());

flowScheduler.add(welcomeRoutineEachFrame());

flowScheduler.add(welcomeRoutineEnd());

const stimuliLoopScheduler = new Scheduler(psychoJS);

flowScheduler.add(stimuliLoopBegin(stimuliLoopScheduler));

flowScheduler.add(stimuliLoopScheduler);

flowScheduler.add(stimuliLoopEnd);


flowScheduler.add(endRoutineBegin());

flowScheduler.add(endRoutineEachFrame());

flowScheduler.add(endRoutineEnd());

flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli.csv', 'path': 'stim/stimuli.csv'},
    {'name': 'adj_matrix.csv', 'path': 'stim/adj_matrix.csv'},
    {'name': 'img01.jpg', 'path': 'stim/img01.jpg'},
    {'name': 'img02.jpg', 'path': 'stim/img02.jpg'},
    {'name': 'img03.jpg', 'path': 'stim/img03.jpg'},
    {'name': 'img04.jpg', 'path': 'stim/img04.jpg'},
    {'name': 'img05.jpg', 'path': 'stim/img05.jpg'},
    {'name': 'img06.jpg', 'path': 'stim/img06.jpg'},
    {'name': 'img07.jpg', 'path': 'stim/img07.jpg'},
    {'name': 'img08.jpg', 'path': 'stim/img08.jpg'},
    {'name': 'img09.jpg', 'path': 'stim/img09.jpg'},
    {'name': 'img10.jpg', 'path': 'stim/img10.jpg'},
    {'name': 'correct.wav', 'path': 'stim/correct.wav'},
    {'name': 'incorrect.wav', 'path': 'stim/incorrect.wav'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_seperator = ';';
 


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcometext;
var welcomekey;
var stimulishowClock;
var key_resp;
var left_image_stim;
var center_image_stim;
var right_image_stim;
var feedback_text;
var endroutineClock;
var text;
var endkey;
var globalClock;
var routineTimer;
let connected_nodes;
let non_connected_nodes ;
let left_image_idx,right_image_idx,current_image_idx,correct_answers,response_times,last_key,correct,correct_sound,incorrect_sound;
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];

}

// Load adjacency matrix (mocked here; PsychoPy should handle file input elsewhere)
let adjMatrix = [
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0]
];


// Load image names (mocked here; PsychoPy should handle file input elsewhere)
let image_names = [
    "img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg",
    "img06.jpg", "img07.jpg", "img08.jpg", "img09.jpg", "img10.jpg"
];



let correct_side;
async function experimentInit() {
    // Initialize components for Routine "welcome"
    welcomeClock = new util.Clock();
    welcometext = new visual.TextStim({
      win: psychoJS.window,
      name: 'welcometext',
      text: 'Welcome to our Test!\n\nPress SPACE to start.',
      font: 'Arial',
      units: undefined, 
      pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
      languageStyle: 'LTR',
      color: new util.Color('white'),  opacity: undefined,
      depth: 0.0 
    });
    
    welcomekey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
    // Initialize components for Routine "stimulishow"
    stimulishowClock = new util.Clock();
    key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
    // Run 'Begin Experiment' code from randomwalkcode
    // Initialize variables
    connected_nodes = {};
    non_connected_nodes = {};
    current_image_idx = Math.floor(Math.random() * image_names.length);
    connected_nodes = adjMatrix[current_image_idx].map((val, idx) => val === 1 ? idx : null).filter(val => val !== null);
    non_connected_nodes = adjMatrix[current_image_idx].map((val, idx) => (val === 0 && current_image_idx != idx) ? idx : null).filter(val => val !== null);
    console.log("connected_nodes", connected_nodes);
    console.log("non_connected_nodes", non_connected_nodes);

    correct_side = randomChoice(["l", "r"]);
    console.log("correct_side", correct_side);
    
    if (correct_side === "l") {
        left_image_idx = randomChoice(connected_nodes);
        right_image_idx = randomChoice(non_connected_nodes);
    }
    else {
        left_image_idx = randomChoice(non_connected_nodes);
        right_image_idx = randomChoice(connected_nodes);
    }
    console.log("left_image_idx", left_image_idx);
    console.log("right_image_idx", right_image_idx);
    correct_answers = 0;
    response_times = [];
    last_key = null;
    correct = null;
    correct_sound = new sound.Sound({
        win: psychoJS.window,
        value: 'correct.wav',
        secs: -1,
        });
    correct_sound.setVolume(1);
    incorrect_sound = new sound.Sound({
        win: psychoJS.window,
        value: 'incorrect.wav',
        secs: -1,
        });
    incorrect_sound.setVolume(1);

    left_image_stim = new visual.ImageStim({
      win : psychoJS.window,
      name : 'left_image_stim', units : undefined, 
      image : image_names[left_image_idx] , mask : undefined,
      anchor : 'center',
      ori : 0.0, 
      pos : [(- 0.5), 0], 
      draggable: false,
      size : [0.5, 0.5],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -2.0 
    });
    center_image_stim = new visual.ImageStim({
      win : psychoJS.window,
      name : 'center_image_stim', units : undefined, 
      image : image_names[current_image_idx], mask : undefined,
      anchor : 'center',
      ori : 0.0, 
      pos : [0, 0], 
      draggable: false,
      size : [0.5, 0.5],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -3.0 
    });
    right_image_stim = new visual.ImageStim({
      win : psychoJS.window,
      name : 'right_image_stim', units : undefined, 
      image : image_names[right_image_idx], mask : undefined,
      anchor : 'center',
      ori : 0.0, 
      pos : [0.5, 0], 
      draggable: false,
      size : [0.5, 0.5],
      color : new util.Color([1,1,1]), opacity : undefined,
      flipHoriz : false, flipVert : false,
      texRes : 128.0, interpolate : true, depth : -4.0 
    });
    feedback_text = new visual.TextStim({
      win: psychoJS.window,
      name: 'feedback_text',
      text: 'Any text\n\nincluding line breaks',
      font: 'Arial',
      units: undefined, 
      pos: [0, (- 0.6)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
      languageStyle: 'LTR',
      color: new util.Color('white'),  opacity: undefined,
      depth: -5.0 
    });
    
    // Initialize components for Routine "endroutine"
    endroutineClock = new util.Clock();
    text = new visual.TextStim({
      win: psychoJS.window,
      name: 'text',
      text: 'Thanks for Participating!\n\nPress Space to End!',
      font: 'Arial',
      units: undefined, 
      pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
      languageStyle: 'LTR',
      color: new util.Color('white'),  opacity: undefined,
      depth: 0.0 
    });
    
    endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
    // Create some handy timers
    globalClock = new util.Clock();  // to track the time since experiment started
    routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
    
    return Scheduler.Event.NEXT;
  }
  
  
  var t;
  var frameN;
  var continueRoutine;
  var welcomeMaxDurationReached;
  var _welcomekey_allKeys;
  var welcomeMaxDuration;
  var welcomeComponents;
  function welcomeRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      welcomeClock.reset();
      routineTimer.reset();
      welcomeMaxDurationReached = false;
      // update component parameters for each repeat
      welcomekey.keys = undefined;
      welcomekey.rt = undefined;
      _welcomekey_allKeys = [];
      psychoJS.experiment.addData('welcome.started', globalClock.getTime());
      welcomeMaxDuration = null
      // keep track of which components have finished
      welcomeComponents = [];
      welcomeComponents.push(welcometext);
      welcomeComponents.push(welcomekey);
      
      for (const thisComponent of welcomeComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
  function welcomeRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome' ---
      // get current time
      t = welcomeClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *welcometext* updates
      if (t >= 1.0 && welcometext.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcometext.tStart = t;  // (not accounting for frame time here)
        welcometext.frameNStart = frameN;  // exact frame index
        
        welcometext.setAutoDraw(true);
      }
      
      
      // *welcomekey* updates
      if (t >= 1 && welcomekey.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcomekey.tStart = t;  // (not accounting for frame time here)
        welcomekey.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { welcomekey.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { welcomekey.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { welcomekey.clearEvents(); });
      }
      
      if (welcomekey.status === PsychoJS.Status.STARTED) {
        let theseKeys = welcomekey.getKeys({keyList: ['space'], waitRelease: false});
        _welcomekey_allKeys = _welcomekey_allKeys.concat(theseKeys);
        if (_welcomekey_allKeys.length > 0) {
          welcomekey.keys = _welcomekey_allKeys[_welcomekey_allKeys.length - 1].name;  // just the last key pressed
          welcomekey.rt = _welcomekey_allKeys[_welcomekey_allKeys.length - 1].rt;
          welcomekey.duration = _welcomekey_allKeys[_welcomekey_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcomeComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
  function welcomeRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome' ---
      for (const thisComponent of welcomeComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(welcomekey.corr, level);
      }
      psychoJS.experiment.addData('welcomekey.keys', welcomekey.keys);
      if (typeof welcomekey.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('welcomekey.rt', welcomekey.rt);
          psychoJS.experiment.addData('welcomekey.duration', welcomekey.duration);
          routineTimer.reset();
          }
      
      welcomekey.stop();
      // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
  var stimuliloop;
  function stimuliLoopBegin(stimuliLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      stimuliloop = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 10, method: TrialHandler.Method.RANDOM,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'stimuliloop'
      });
      psychoJS.experiment.addLoop(stimuliloop); // add the loop to the experiment
      currentLoop = stimuliloop;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisStimulusloop of stimuliloop) {
        snapshot = stimuliloop.getSnapshot();
        stimuliLoopScheduler.add(importConditions(snapshot));
        stimuliLoopScheduler.add(stimulishowRoutineBegin(snapshot));
        stimuliLoopScheduler.add(stimulishowRoutineEachFrame());
        stimuliLoopScheduler.add(stimulishowRoutineEnd(snapshot));
        stimuliLoopScheduler.add(stimuliLoopEndIteration(stimuliLoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
  async function stimuliLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(stimuliloop);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
  function stimuliLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
  var stimulishowMaxDurationReached;
  var _key_resp_allKeys;
  var stimulishowMaxDuration;
  var stimulishowComponents;
  function stimulishowRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'stimulishow' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      stimulishowClock.reset();
      routineTimer.reset();
      stimulishowMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp.keys = undefined;
      key_resp.rt = undefined;
      _key_resp_allKeys = [];
      psychoJS.experiment.addData('stimulishow.started', globalClock.getTime());
      stimulishowMaxDuration = null
      // keep track of which components have finished
      
      stimulishowComponents = [];
      stimulishowComponents.push(key_resp);
      stimulishowComponents.push(left_image_stim);
      stimulishowComponents.push(center_image_stim);
      stimulishowComponents.push(right_image_stim);
      stimulishowComponents.push(feedback_text);
      
      for (const thisComponent of stimulishowComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
  var connected_images;
  var non_connected_images;
  var connected_image_idx;
  var non_connected_image_idx;
  //var correct_side;
  var frameRemains;
  function stimulishowRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'stimulishow' ---
      // get current time
      t = stimulishowClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *key_resp* updates
      if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp.tStart = t;  // (not accounting for frame time here)
        key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
      }
      
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({keyList: ['l', 'r'], waitRelease: false});
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        }
      }
      
      // Run 'Each Frame' code from randomwalkcode
     
          if (key_resp.keys) {
              last_key = key_resp.keys.slice((- 1))[0];
              correct = (last_key === correct_side);
              if (correct) {
                  correct_answers += 1;
                  correct_sound.play();
              } else {
                  incorrect_sound.play();
              }
              console.log("correct_side1", correct_side);
              current_image_idx = ((correct_side === "l") ? left_image_idx : right_image_idx);
              console.log("current_image_idx1", current_image_idx);
              connected_images = adjMatrix[current_image_idx].map((val, idx) => val === 1 ? idx : null).filter(val => val !== null);
              non_connected_images = adjMatrix[current_image_idx].map((val, idx) => (val === 0 && current_image_idx != idx) ? idx : null).filter(val => val !== null);
              console.log("connected_images", connected_images);
              console.log("non_connected_images", non_connected_images);
              connected_image_idx = randomChoice(connected_images);
              non_connected_image_idx = randomChoice(non_connected_images);
              
              if (randomChoice([true, false])) {
                  [left_image_idx, right_image_idx] = [connected_image_idx, non_connected_image_idx];
                  correct_side = "l";
              } else {
                  [left_image_idx, right_image_idx] = [non_connected_image_idx, connected_image_idx];
                  correct_side = "r";
              }

              console.log("image_names", image_names);
              console.log("left_image_idx", left_image_idx);
              console.log("right_image_idx", right_image_idx);
                console.log("correct_side2", correct_side);
                console.log("current_image_idx2", current_image_idx);
              
              left_image_stim.setImage(image_names[left_image_idx]);
              center_image_stim.setImage(image_names[current_image_idx]);
              right_image_stim.setImage(image_names[right_image_idx]);
              psychoJS.experiment.addData("current_image_idx", current_image_idx);
              psychoJS.experiment.addData("left_image_idx", left_image_idx);
              psychoJS.experiment.addData("right_image_idx", right_image_idx);
              psychoJS.experiment.addData("response", last_key);
              psychoJS.experiment.addData("correct", correct);
              psychoJS.experiment.addData("response_time", key_resp.rt);
              response_times.push(key_resp.rt);
              continueRoutine = false;
          }
      
      
      
      // *left_image_stim* updates
      if (t >= 0.0 && left_image_stim.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        left_image_stim.tStart = t;  // (not accounting for frame time here)
        left_image_stim.frameNStart = frameN;  // exact frame index
        
        left_image_stim.setAutoDraw(true);
      }
      
      
      // *center_image_stim* updates
      if (t >= 0.0 && center_image_stim.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        center_image_stim.tStart = t;  // (not accounting for frame time here)
        center_image_stim.frameNStart = frameN;  // exact frame index
        
        center_image_stim.setAutoDraw(true);
      }
      
      
      // *right_image_stim* updates
      if (t >= 0.0 && right_image_stim.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_image_stim.tStart = t;  // (not accounting for frame time here)
        right_image_stim.frameNStart = frameN;  // exact frame index
        
        right_image_stim.setAutoDraw(true);
      }
      
      
      // *feedback_text* updates
      if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        feedback_text.tStart = t;  // (not accounting for frame time here)
        feedback_text.frameNStart = frameN;  // exact frame index
        
        feedback_text.setAutoDraw(true);
      }
      
      frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        feedback_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of stimulishowComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
  function stimulishowRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'stimulishow' ---
      for (const thisComponent of stimulishowComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('stimulishow.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          }
      
      key_resp.stop();
      // the Routine "stimulishow" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
  var endroutineMaxDurationReached;
  var _endkey_allKeys;
  var endroutineMaxDuration;
  var endroutineComponents;
  function endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'endroutine' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      endroutineClock.reset();
      routineTimer.reset();
      endroutineMaxDurationReached = false;
      // update component parameters for each repeat
      endkey.keys = undefined;
      endkey.rt = undefined;
      _endkey_allKeys = [];

      psychoJS._saveResults = 0; 
    
      // Generate filename for results
      let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
      
      // Extract data object from experiment
      let dataObj = psychoJS._experiment._trialsData;
      
      // Convert data object to CSV
      let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
          return Object.values(it).toString()
      }).join('\n')
      
// Send data to Google Drive via Google Apps Script
console.log('Saving data...');


// Dropbox API URL
const dropboxUrl = 'https://content.dropboxapi.com/2/files/upload';

// Your Dropbox Access Token
const accessToken = 'sl.u.AFZo8028ViZsUb6va5EFYjAI39TuZATkaXZ9kbNr4YdxSUwfKSCoBRJRxtsIWQnMq-MmqQsA_vI94Jdi0nKEBvuIDa2wDbi67XGp8yYO12RznCDJeF5YFFhNcvAMZlWyaMxidZbdhD0hjtJgnK4tfIJWAh729HEq2hqfYwcTmVxMNNsFPlxJZ8oi3W9PKff1n6beAaktTSuw34q2TNdVWryhk-7dSKk_gjQQInMQt3I_cmI1BbVdXRuB-ue3UVPryiIvnZ13RmheIMMxm4IAUvB9ywZC-ZTBac0M8aoj7B_os9veeAu5Bq5oOehSMY4-7DzPoyjhH9rRDZim27ge7Wx-yvxOKh4ova83nWgKV7UQ8adojAGAjfhBVm1ZVGzmbCbEa4xRv2r4mQQv0GXsnVZNQcfuEFaMKmZmgwJ6JLXhErPoQEyDwa6viHpoEb0VGWGTEN8FVBygBccxO91hJr6tHpA5dDkbKWbUBP4PAVP9XNKnLtgUIKmiUBh-mxQ7Qf2h72yWum2SAzNOiglvKos3hMsbgZjYhhnDv5_U8YomdUEEI2VoHQ1yZMabrZQNho6EJcg10p2UPMUVlVlbzw5aupJLA3lrWP0bz-OMplzHArJSmPeg19iLcDlIEE4b53fRmWj_69Ad5HIfiCZlkAtjMmxszdoWOGTK-VKxfCfKOKO6UdWNA3mYIinML50hOdgy2mjhG_kKDqWHj1M-2W0mHJ4N18IBEgmuaTwC5ptiZiEs14D2cjHoBu58_JIBSCbA-SD0cNd7lxptAqH5gN0Ngclorcp2y8A4jrz8ywlPTS06URBJU4Ht-_ci3G-9S69NNZ918zegkGhAUpGCvNVCHmlGd1jkrOe4yq5DfcYgJozNFS2LAyS2smO2YaeF9rhgl-ZuwZfZL329E8auovcSmS-vWAha4ABlEIFaO3XTIDb_zLGH0XQAiUCNfMrH3iWzX21FvAoVnGdXlk0tjIQOJqdvhr_b0yCw2pUh7837uDaSVGzZUJstGuadGtgUangCxmbnL20dvWbCPHHafk5QQW5pkmHD30XsCaSAXQDTtBtZwUlDEIeMguIQZDXukfMnPcp1OeRcZUfAI_u2fdevt8pnRvqc56PjtWdeVNy9EYtBVwCQM88rMM7JGrpnW4w1M0CzxzWI65cTQxy69g2PDeevLyMcpyaqvmmD1htqHyaxxUCHPfhlsAW_YQPN5sSFXnlfv4b15wO82555MIQpwWImoWKrh0L6ie1dDjjurvFH1wR-8ee_DjOgUfGDudn1VQ9tGWRzZpnHSgPbm_mj5QD-k33ye3OF9iQAnRqXTQ'; // Replace with your actual Dropbox access token

// Prepare headers for the Dropbox API request
const headers = {
    "Authorization": "Bearer " + accessToken,
    "Content-Type": "application/octet-stream",
    "Dropbox-API-Arg": JSON.stringify({
        path: '/ExperimentData/' + filename, // Path to the folder where you want to store the file
        mode: "add", // "add" will create the file if it doesn't exist, or overwrite if it does
        autorename: true, // Automatically rename the file if there's a conflict
        mute: false // Don't mute notifications
    })
};

// Send the data to Dropbox
fetch(dropboxUrl, {
    method: 'POST',
    headers: headers,
    body: data // The actual data (CSV content in the request body)
})
    .then(response => response.json())
    .then(responseData => {
        console.log('Data saved successfully to Dropbox:', responseData);
    })
    .catch(error => {
        console.error('Error uploading data to Dropbox:', error);
    });

        

      psychoJS.experiment.addData('endroutine.started', globalClock.getTime());
      endroutineMaxDuration = null
      // keep track of which components have finished
      endroutineComponents = [];
      endroutineComponents.push(text);
      endroutineComponents.push(endkey);
      
      for (const thisComponent of endroutineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
  function endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'endroutine' ---
      // get current time
      t = endroutineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text* updates
      if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text.tStart = t;  // (not accounting for frame time here)
        text.frameNStart = frameN;  // exact frame index
        
        text.setAutoDraw(true);
      }
      
      frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        text.setAutoDraw(false);
      }
      
      
      // *endkey* updates
      if (t >= 0.0 && endkey.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        endkey.tStart = t;  // (not accounting for frame time here)
        endkey.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { endkey.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { endkey.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { endkey.clearEvents(); });
      }
      
      if (endkey.status === PsychoJS.Status.STARTED) {
        let theseKeys = endkey.getKeys({keyList: ['space'], waitRelease: false});
        _endkey_allKeys = _endkey_allKeys.concat(theseKeys);
        if (_endkey_allKeys.length > 0) {
          endkey.keys = _endkey_allKeys[_endkey_allKeys.length - 1].name;  // just the last key pressed
          endkey.rt = _endkey_allKeys[_endkey_allKeys.length - 1].rt;
          endkey.duration = _endkey_allKeys[_endkey_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of endroutineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
  function endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'endroutine' ---
      for (const thisComponent of endroutineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('endroutine.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(endkey.corr, level);
      }
      psychoJS.experiment.addData('endkey.keys', endkey.keys);
      if (typeof endkey.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('endkey.rt', endkey.rt);
          psychoJS.experiment.addData('endkey.duration', endkey.duration);
          routineTimer.reset();
          }
      
      endkey.stop();
      // the Routine "endroutine" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
  function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
  async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
  
