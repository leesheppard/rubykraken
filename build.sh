#!/usr/bin/env bash
yum install ruby23-devel.x86_64

gem install jekyll bundler

bundle exec install

jekyll build
