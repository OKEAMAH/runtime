const ENVIRONMENT_IS_WEB = typeof window == "object";
const ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
const MONO = {}, BINDING = {}, INTERNAL = {}, IMPORTS = {};
var fetch = fetch || undefined; var require = require || undefined; var __dirname = __dirname || '';
__dotnet_runtime.__setEmscriptenEntrypoint(createDotnetRuntime);
const __initializeImportsAndExports = __dotnet_runtime.__initializeImportsAndExports;
const __requirePromise = ENVIRONMENT_IS_NODE ? import(/* webpackIgnore: true */'module').then(mod => mod.createRequire(import.meta.url)) : undefined;
const dotnet = __dotnet_runtime.moduleExports.dotnet;
const exit = __dotnet_runtime.moduleExports.exit;
export { dotnet, exit, INTERNAL };
