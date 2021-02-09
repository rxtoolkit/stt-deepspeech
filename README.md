# @buccaneerai/toDeepSpeech
> 👂 An RxJS operator for real-time speech-to-text (STT/S2T) streaming using the opensource DeepSpeech library.

## Installation
This is a private package. It requires setting up access in your npm config.

```bash
yarn add @buccaneerai/stt-deepspeech
```

⚠️ To run the DeepSpeech pipeline, you must [download the corresponding DeepSpeech model](https://github.com/mozilla/DeepSpeech/releases), unzip it and pass the model directory to the `toDeepSpeech` operator like this: `toDeepSpeech({modelDir: 'path/to/deepseech-models-0.7.0'})`.

> ⚠️ node.js only. This has not been tested on Browsers but it might be possible to make it work.  If you get it working, please make a PR!

## API

### `toDeepSpeech`
Stream audio speech data to DeepSpeech and get transcripts back:
```js
import {map} from 'rxjs/operators';
import {toDeepSpeech} from '@buccaneerai/stt-deepspeech';

// The pipeline takes a stream of audio chunks encoded as LINEAR16 (PCM encoded as 16-bit integers) (Buffer, String, Blob or Typed Array)
const buffer$ = pcmChunkEncodedAs16BitIntegers$.pipe(
  map(chunk => Buffer.from(chunk, 'base64')),
  toDeepSpeech({modelDir: '/path/to/deepspeech-models-0.7.0'})
);
buffer$.subscribe(console.log); // log transcript output
```

> ⚠️ Pay attention to the endcoding of the audio data.  The operator only accepts PCM data encoded as 16-bit integers. For example, LINEAR16 encoding usually works.

## Guides
- [Introduction to audio data](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_concepts)