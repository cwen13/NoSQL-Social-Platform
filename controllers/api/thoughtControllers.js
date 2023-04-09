const {Thought} = require("./../../models");

// Routes need to include create, update, and delete api calls

module.exports = {
  // DONE route to return all thoughts
  getAllThoughts(req,res) {
    Thought.find()
    .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err)) 
  },
  
  // DONE route to get single thought
  getThought(req,res) {
    Thought.findOne({_id: req.params.thoughtId})
      .select("-__v")
      .then((thought) =>
	!thought
	  ? res.status(404).json({message: "There is no thought with that ID"})
	  : res.json(thought)
      )
      .catch((err) => res.json(err));
  },

  // DONE create user
  createThought(req,res) => {
    Thought.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // DONE update a thought
  updatethought(req,res) => {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId}
      {req.body}
    )
      .then((thought) =>
	!thought
	  ? res.status(404).json({message: "There is no thought with that ID"})
	  : res.json(thought));
	
  },

  // DONE route to post reaction to a thought
  createReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.id},
      {$push:
       {
	 reactions: req.body
       }
      },
      {
	runValidators: true,
	new: true
      }
    )
      .then((thought) =>
	!thought
	  ? res.status(404).json({message: "There is no thought with that ID"})
	  : res.json(thought)
      )
      .catch((err) => res.json(err));
  },

  // DONE route to delete reaciton to a  thought
  deleteReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.id},
      {$pull: {reactions: {_id: req.params.reactinoId}}}
    )
      .then((reactions) =>
	!reactions
	  ? res.status(404).json({message:"There are no reactions to this thought"})
	  : res.json(reactions)
      ); 
  }   
  
};
