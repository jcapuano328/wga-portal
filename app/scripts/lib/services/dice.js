ica.module('wgaPortalApp.services', [])
	.service('dice', function($log, random, sound) {
		var dice = {
			Die: function(low, high) {
				var self = this;
			    
			    self._low = low;
			    self._high = high;
			    self._value = low;
			    
			    self.increment = function(rollover) {
	            	if (++self._value > self._high) {
	                	self._value = rollover ? self._low : self._high;
	                }
	            }
			    self.decrement = function(rollover) {
	            	if (--self._value < self._low) {
	                	self._value = rollover ? self._high : self._low;
	                }
	            }
	            
			    self.getValue = function() {
			        return self._value;
			    }
			    self.setValue = function(d) {
			    	self._value = d;
			    }
			    
	            self.name = function() {
	            	if (self._value == 1) {
	                	return "one";
					}                    
	            	else if (self._value == 2) {
	                	return "two";
					}                    
	            	else if (self._value == 3) {
	                	return "three";
					}                    
	            	else if (self._value == 4) {
	                	return "four";
					}                    
	            	else if (self._value ==  5) {
	                	return "five";
					}                    
	            	else if (self._value == 6) {
	                	return "six";
					}                    
	                return self._value.toString();
	            }
	            
			    self.roll = function() {
			    	self._value = random.randomBetween(self._low, self._high);
                    
			        return self._value;
			    }
			},

			Dice: function(numdice, low, high) {
				var self = this;
			    
			    self._dice = [];
			    
	            for (var i=0; i<numdice; i++) {
	            	self._dice.push(new dice.Die(low, high));
				}
	            
	            self.each = function(callback) {
	            	_.each(self._dice, function(die, index) {
	                	callback(die, index);
	                });
	            }
			    
				self.getCount = function() {
			    	return self._dice.length;
			    }    
			    
			    self.getDieEx = function(i) {
			    	if (--i >= 0 && i < self._dice.length) {
			        	return self._dice[i];
			        }
			        else {
			        	return null;
			        }
			    }
			    self.getDie = function(i) {
	            	var die = self.getDieEx(i);
	                return die ? die.getValue() : 0;
			    }
			    self.setDie = function(i, d) {
			    	if (--i >= 0 && i < self._dice.length) {
			        	self._dice[i].setValue(d);
			        }
			    }

			    self.rollDie = function(i) {
			    	if (--i >= 0 && i < self._dice.length) {
			        	self._dice[i].roll();
			        	return self._dice[i].getValue();
			        }
			        else {
			        	return 0;
			        }
			    }
			    
			    self.rollSound = function() {
			        sound.play();
				}                
	            
			    self.roll = function() {
	            	self.rollSound();
			    	for (var i=0; i<self._dice.length; i++) {
			        	self._dice[i].roll();
			        }
			    }
			}
	    };
	    
	    return dice;
    });


