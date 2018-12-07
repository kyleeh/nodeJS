var Participant = require('../models/participant');

// Display list of all participants.
exports.participantList = function(req, res) {
    res.send('NOT IMPLEMENTED: participant list');
};

// Display detail page for a specific participant.
exports.participantDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: participant detail: ' + req.params.id);
};


// Display participant create form on GET.
exports.participantCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant create GET');
};


// Handle participant create on POST.
exports.participantCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant create POST');
};

// Display participant delete form on GET.
exports.participantDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete GET');
};

// Handle participant delete on POST.
exports.participantDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete POST');
};

// Display participant update form on GET.
exports.participantUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update GET');
};

// Handle participant update on POST.
exports.participantUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update POST');
};