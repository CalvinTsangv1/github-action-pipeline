/* cppsrc/main.cpp */
#include <napi.h>
#include "Samples/functionexample.h"
#include "Network/DataProcessingAsyncWorker.h"

using namespace Napi;

void ProcessData(const CallbackInfo& info) {
    Buffer<uint8_t> data = info[0].As<Buffer<uint8_t>>();
    Function cb = info[1].As<Function>();

    DataProcessingAsyncWorker *worker = new DataProcessingAsyncWorker(data, cb);
    worker->Queue();
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    exports.Set(String::New(env, "processData"), Function::New(env, ProcessData));
    return functionexample::Init(env, exports);
}

NODE_API_MODULE(testaddon, InitAll)