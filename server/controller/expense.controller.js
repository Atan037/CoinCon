const Expense = require("../models/expense.model");
const ObjectId = require('mongoose').Types.ObjectId;

exports.getExpenses = (req, res, next) => {
  Expense.find().then(documents => {
    res.status(200).json({
      // message: "Expenses fetched successfully!",
      posts: documents
    });
  });
};

exports.getExpense = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }

  Expense.findById(req.params.id, ((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in retriving Expenses: ' + JSON.stringify(err, undefined, 2));
    }
  }));
};

exports.createExpense = (req, res, next) => {
  const expense = new Expense({
    amount: req.body.amount,
    category: req.body.category,
    subCategory: req.body.subCategory,
    expenseDescription: req.body.expenseDescription,
    paymentMethod: req.paymentMethod
  });

  expense.save().then(result => {
    //result holds the createdPost
    res.status(201).json({
      // message: "Expense added successfully",
      expenseId: result._id
    });
  });
};

exports.updateExpense = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }
  const expense = {
    amount: req.body.amount,
    category: req.body.category,
    subCategory: req.body.subCategory,
    expenseDescription: req.body.expenseDescription,
    paymentMethod: req.paymentMethod
  };

  Expense.findByIdAndUpdate( req.params.id, { $set: expense }, { new: true }, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("Error in Expense update: " + JSON.stringify(err, undefined, 2));
      }
    }
  );
};

exports.deleteExpense = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  }

  Expense.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Expense deleted!" });
  });
};

