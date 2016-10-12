import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import jsdom from 'jsdom';
import createMockRaf from 'mock-raf';
import { WebSocket } from 'mock-socket';


const doc = jsdom.jsdom('<!DOCTYPE html><html><head><title> Project Title </title></head><body><div id="root"></div></body></html>')
const win = doc.defaultView
const mockRaf = createMockRaf()
global.document = doc
global.window = win
global.navigator = {
   userAgent: 'node.js'
};

// create Mock Animation Frames
global.window.requestAnimationFrame = mockRaf.raf;


// TODO: Move this into the test suite, not a global var as it needs DOM to get coverage
// Mock WebSocket Server

// create Mock Socket
global.window.WebSocket = WebSocket;

// create IP address
global.window.userip = "127.0.0.1"

// create Mock Variable
global.window.ns_chat_client_globalModalController = {};

propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

chai.use(chaiImmutable);
