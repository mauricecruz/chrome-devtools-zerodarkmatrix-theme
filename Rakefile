# -*- mode: ruby -*-
# vi: set ft=ruby ts=2 sw=2 sts=2 et :

require 'date'
require 'find'

module OS
  def OS.win?
    (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  end

  def OS.mac?
   (/darwin/ =~ RUBY_PLATFORM) != nil
  end

  def OS.unix?
    !OS.win?
  end

  def OS.linux?
    OS.unix? and !OS.mac?
  end
end

desc "Installs the Chrome Developer Tools custom theme file"
task :install, :backup do |t, args|
  args.with_defaults(:backup => nil)
  home_dir = File.expand_path('~')
  chrome_dirs = []
  if OS.mac?
    chrome_dirs.push File.join(home_dir, "Library", "Application Support", "Google", "Chrome")
    chrome_dirs.push File.join(home_dir, "Library", "Application Support", "Google", "Chrome Canary")
  elsif OS.win?
    chrome_dirs.push File.join(home_dir, "AppData", "Local", "Google", "Chrome", "User Data")
    chrome_dirs.push File.join(home_dir, "AppData", "Local", "Google", "Chrome Canary", "User Data")
  else
    puts "Unsuported OS..."
  end
  chrome_dirs.each { |chrome_dir|
    if File.exist?(chrome_dir)
      Dir.glob(File.join(chrome_dir, "*", "")).each { |profile_dir|
        profile_name = File.basename(profile_dir)
        if profile_name =~ /(Default|Profile [0-9]+)/
          css_new = File.join(File.dirname(__FILE__), "Custom.css")
          css_old = File.join(profile_dir, "User StyleSheets", "Custom.css")
          if args[:backup] and File.exist?(css_old)
            time_now = Time.now.strftime('%Y%m%d-%H%M%S')
            css_backup = File.join(profile_dir, "User StyleSheets", "Custom.css.#{time_now}")
            puts "Creating backup: #{css_backup}"
            FileUtils.cp css_old, css_backup
          end
          puts "Copying: #{css_new} -> #{css_old}"
          FileUtils.cp css_new, css_old
        end
      }
    end
  }
end

task :default => [:install]
