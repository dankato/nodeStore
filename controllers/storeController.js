const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};

exports.addStore = (req, res) => {

    res.render('editStore', {title: '💩  Add Store'});
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
    // console.log('saved to db');
}

exports.getStores = async (req, res) => {
    // 1. query the db for a list of all stores
    const stores = await Store.find();
    console.log(stores)
    res.render('stores', {title: 'Stores', stores: stores});
}