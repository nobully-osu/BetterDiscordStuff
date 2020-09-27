/**
 * @name LinkForwarder
 * @authorId 153995267455057920
 * @website 
 * @source 
 */

module.exports = class LinkForwarder {
    getName() {return "LinkForwarder";} // Name of your plugin to show on the plugins page 
    getDescription() {return "Easily forward links in other channels to a specific DM/text channel. Works for images and videos too.";} // Description to show on the plugins page 
    getVersion() {return "0.0.1";} // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
    getAuthor() {return "randomman254";} // Your name

    load() {} // Called when the plugin is loaded in to memory

    start() {} // Called when the plugin is activated (including after reloads)
    stop() {} // Called when the plugin is deactivated

    observer(changes) {} // Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
