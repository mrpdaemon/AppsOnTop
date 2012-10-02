//GNOME Shell extension. Moves the Applications button at the top of the Dash.
//Copyright (C) 2012 Arnaud Bonatti <arnaud.bonatti@gmail.com>

//This program is free software; you can redistribute it and/or
//modify it under the terms of the GNU General Public License
//as published by the Free Software Foundation; either version 2
//of the License, or (at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program; if not, write to the Free Software
//Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

const Config = imports.misc.config
const Main   = imports.ui.main

function init(metadata) {
    let current_version = Config.PACKAGE_VERSION.split('.')
    if (current_version.length != 3 || current_version[0] != 3)
        throw new Error("Strange version number (extension.js:24).")
    
    switch (current_version[1]) {
        case"5": global.log("Warning of extension [" + metadata.uuid + "]:\n" +
                            "              Development release detected (" +
                            Config.PACKAGE_VERSION +
                            "). Loading as a 3.6 release.\n") //eak
        case"6": break
        default: throw new Error("Strange version number (extension.js:32).")
    }
}

function toggle() {
    let dash = Main.overview._dash.actor.get_children()[0]
    let thingmoved = dash.get_children()[0]
    dash.remove_actor(thingmoved)
    dash.add_actor(thingmoved)
}
function enable()  { toggle() }
function disable() { toggle() }
