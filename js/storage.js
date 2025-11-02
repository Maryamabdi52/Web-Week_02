// storage.js - Handles localStorage operations for cart persistence

/**
 * Storage Module - Manages saving and loading cart data from localStorage
 */

class Storage {
    /**
     * Save cart data to localStorage
     * @param {string} key - The key to store data under
     * @param {any} data - The data to store
     */
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    /**
     * Load cart data from localStorage
     * @param {string} key - The key to retrieve data from
     * @returns {any} The retrieved data or null if not found
     */
    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }

    /**
     * Clear data from localStorage
     * @param {string} key - The key to clear
     */
    static clear(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    }

    /**
     * Clear all localStorage data
     */
    static clearAll() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing all localStorage:', error);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}

