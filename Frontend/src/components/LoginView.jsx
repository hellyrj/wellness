/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Heart, Mail, Lock, UserPlus, LogIn, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginView({ onLogin, allUsers, onRegister }) {
  const [activeTab, setActiveTab] = useState('quick');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🌸');
  const [error, setError] = useState('');

  const avatars = ['🌸', '🍃', '🐳', '☀️', '🍊', '🌱', '🥑', '🧸'];

  const handleQuickLogin = (user) => {
    onLogin(user);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const foundUser = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      onLogin(foundUser);
    } else {
      setError('Email not found. You can easily register under the "New Account" tab or click a quick profile above!');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in your name and email.');
      return;
    }
    const emailExist = allUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExist) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser = onRegister(name, email, selectedAvatar);
    onLogin(newUser);
  };

  return (
    <div id="login-container" className="w-full max-w-md mx-auto bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-50/50 overflow-hidden">
      {/* Brand Header */}
      <div className="bg-gradient-to-b from-orange-50 to-white p-8 pb-4 text-center relative font-sans">
        <div className="absolute top-4 right-4 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>
        <div className="mx-auto w-16 h-16 bg-rose-100/80 rounded-2xl flex items-center justify-center mb-4 border border-rose-200">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-300" />
        </div>
        <h1 id="app-title" className="text-2xl font-bold tracking-tight text-slate-800">Young Mental Wellness</h1>
        <p className="text-slate-400 text-sm mt-1">A gentle space for self-reflection & mindful presence</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 px-6 bg-slate-50/50 font-sans">
        <button
          id="tab-quick"
          onClick={() => { setActiveTab('quick'); setError(''); }}
          className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'quick' ? 'border-rose-400 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Quick Profiles
        </button>
        <button
          id="tab-signin"
          onClick={() => { setActiveTab('signin'); setError(''); }}
          className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'signin' ? 'border-rose-400 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Sign In
        </button>
        <button
          id="tab-signup"
          onClick={() => { setActiveTab('signup'); setError(''); }}
          className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'signup' ? 'border-rose-400 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          New Account
        </button>
      </div>

      <div className="p-8 font-sans">
        {error && (
          <div id="error-alert" className="mb-4 p-3 text-xs bg-rose-50 text-rose-700 border border-rose-100 rounded-xl leading-relaxed">
            {error}
          </div>
        )}

        {/* Quick Profiles Content */}
        {activeTab === 'quick' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-slate-500 text-xs text-center mb-4">
              Select one of our simulated demo profiles to immediately experience the loaded wellness metrics, mood history, and journal archives.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {allUsers.map((user) => (
                <button
                  key={user.id}
                  id={`quick-user-${user.id}`}
                  onClick={() => handleQuickLogin(user)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100/60 hover:bg-orange-100/50 transition-all text-left group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center justify-center text-2xl select-none">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm">{user.name}</h4>
                    <p className="text-slate-400 text-xs">{user.email}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-orange-100 flex items-center justify-center text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-50 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-400">
                Want to make your own custom profile? Tap <strong className="text-rose-500 cursor-pointer" onClick={() => setActiveTab('signup')}>New Account</strong>.
              </span>
            </div>
          </motion.div>
        )}

        {/* Sign In form */}
        {activeTab === 'signin' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="signin-email">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="signin-email"
                    type="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="signin-password">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                  />
                </div>
                <div className="text-right mt-1.5">
                  <span className="text-[11px] text-slate-400 italic">No password required, enter anything to authenticate</span>
                </div>
              </div>

              <button
                id="btn-signin-submit"
                type="submit"
                className="w-full mt-4 py-3 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-xl text-sm shadow-md shadow-rose-100 transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                <LogIn className="w-4 h-4" />
                Step Inside
              </button>
            </form>
          </motion.div>
        )}

        {/* Sign Up form */}
        {activeTab === 'signup' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="signup-name">Your Nickname</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <UserPlus className="w-4 h-4" />
                  </span>
                  <input
                    id="signup-name"
                    type="text"
                    placeholder="e.g. Dreamer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={20}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="signup-email">Your Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="dreamer@mentalwellness.app"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Choose an Aura Avatar</label>
                <div className="grid grid-cols-8 gap-1.5">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar}
                      id={`avatar-option-${avatar}`}
                      type="button"
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`h-9 w-9 rounded-xl flex items-center justify-center text-lg border transition-all cursor-pointer ${
                        selectedAvatar === avatar 
                          ? 'border-rose-400 bg-rose-50 shadow-sm scale-110' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              <button
                id="btn-signup-submit"
                type="submit"
                className="w-full mt-4 py-3 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm shadow-md shadow-emerald-50 transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                <Sparkles className="w-4 h-4" />
                Initialize Profile
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
