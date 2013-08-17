'use strict';
var ica = ica || {};

ica.Base6Value = function(value) {
	    
	var self = this;
    
    self._value = parseInt(value);
    //self._tobase6(parseInt(value));
    
    self._table = [];
    
	_.each(_.range(6), function(i) {
    	_.each(_.range(6), function(j) {
        	self._table.push((i+1)*10 + (j+1));
        });
    });
    
    self.getValue = function() {
    	return self._value;
    }
    
    self.setValue = function(v) {
    	if (v < 11) {
        	v = 11;
        }
        else if (v > 66) {
        	v = 66;
        }
    	self._value = v;
    }
    
    self.add = function(v) {
    
    	var newv = op(self._value, v, true);
    	self.setValue(newv);
        
        return self._value;
    }
    
    self.subtract = function(v) {
    
    	var newv = op(self._value, v, false);
    	self.setValue(newv);
        
        return self._value;
    }
    
    function op(lhs, rhs, add) {
    	
		var index = findIndex(self._table, function(t) {
        	return t === lhs;
        });
		if (index >= 0) {
			if (add) {
				index += rhs;
            }
			else {
				index -= rhs;
            }
			if (index < 0) {
            	index = 0;
            }
			else if (index >= self._table.length) {
            	index = self._table.length - 1;
			}                
			
			return self._table[index];
		}
		else {
			return lhs;
		}
    }
    
	function findIndex(collection, filter) {
	    for (var i = 0; i < collection.length; i++) {
	        if (filter(collection[i], i, collection)) {return i;}
	    }
	    return -1;
	}        
    
}
