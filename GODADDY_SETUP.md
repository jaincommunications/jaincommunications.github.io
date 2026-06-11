# 🎯 GoDaddy Specific Setup Guide - Jain Communications

## **Your Custom Domain**: www.jaincommunications.com on GoDaddy

This guide walks you through **exact steps** to connect your GoDaddy domain to your GitHub Pages website.

---

## **⏱️ Total Time Required**: 15 minutes setup + 24-48 hours DNS propagation

---

# **PART 1: GitHub Setup (5 minutes)**

## **Step 1.1: Go to GitHub Repository Settings**

1. Open browser and go to:
   ```
   https://github.com/jaincommunications/jaincommunications.github.io
   ```

2. Click the **"Settings"** tab (top right of repository)
   ```
   [Code] [Issues] [Pull requests] [Settings] ← Click here
   ```

3. On the left sidebar, scroll down and click **"Pages"**
   ```
   Options
   ├── General
   ├── Branches
   ├── Collaborators
   ├── Pages ← Click this
   └── ...
   ```

---

## **Step 1.2: Add Custom Domain in GitHub**

1. Under **"Pages"** section, find **"Custom domain"**

2. In the text box, enter your domain:
   ```
   www.jaincommunications.com
   ```

3. Click the **"Save"** button

   **You should see:**
   ```
   ✅ Your site is published at https://www.jaincommunications.com
   ```

4. Wait a moment, then you'll see GitHub created a **CNAME** file automatically

✅ **GitHub Part Done!** Now to GoDaddy...

---

# **PART 2: GoDaddy DNS Setup (10 minutes)**

## **Step 2.1: Login to GoDaddy**

1. Open browser and go to:
   ```
   https://www.godaddy.com
   ```

2. Click **"Sign In"** (top right)
   ```
   [Sign In] ← Click here
   ```

3. Enter your GoDaddy email and password
   - Email: (your GoDaddy email)
   - Password: (your GoDaddy password)

4. Click **"Sign In"**

✅ **Now you're logged into GoDaddy**

---

## **Step 2.2: Access Your Domain**

1. After signing in, you should see your account dashboard

2. Look for **"My Products"** or **"My Domains"**
   - If you see: **"My Products"** → Click it
   - You'll see list of your domains

3. Find and click on your domain:
   ```
   jaincommunications.com ← Click this
   ```

✅ **You've selected your domain**

---

## **Step 2.3: Access DNS Management**

1. Click the **"DNS"** button or link
   ```
   Usually shows: [Manage DNS] or [DNS]
   ```

2. You'll see your current DNS records

   **What you'll see:**
   ```
   DNS Records
   ├── Type: A
   ├── Type: MX
   ├── Type: CNAME (existing ones)
   └── ... other records
   ```

✅ **You're in DNS Management**

---

## **Step 2.4: Add CNAME Record for WWW**

1. Look for the section: **"CNAME Records"** or **"Records"**

2. Click **"Add Record"** or **"+"** button

3. Fill in the fields:

   **Field 1 - Name/Host:**
   ```
   www
   ```
   *(Just type "www", not "www.jaincommunications.com")*

   **Field 2 - Type:**
   ```
   CNAME
   ```
   *(Should auto-select)*

   **Field 3 - Points to / Value:**
   ```
   jaincommunications.github.io.
   ```
   *(Note the dot at the end - important!)*

   **Field 4 - TTL (Time To Live):**
   ```
   1 hour
   ```
   *(Or accept default)*

4. Click **"Save"** or **"Add"** button

   **Your record should look like:**
   ```
   ┌─────────────────────────────────────────┐
   │ Name: www                               │
   │ Type: CNAME                             │
   │ Points to: jaincommunications.github.io │
   │ TTL: 1 hour                             │
   │                                    [✓]  │
   └─────────────────────────────────────────┘
   ```

✅ **CNAME Record Added!**

---

## **Step 2.5: Optional - Add A Records for Root Domain**

*(This allows jaincommunications.com to work, not just www.jaincommunications.com)*

1. Still in DNS Management, click **"Add Record"** again

2. For **FIRST A Record:**

   **Field 1 - Name/Host:**
   ```
   @ 
   ```
   *(Just @ symbol)*

   **Field 2 - Type:**
   ```
   A
   ```

   **Field 3 - Points to / Value:**
   ```
   185.199.108.153
   ```

   **Field 4 - TTL:**
   ```
   1 hour
   ```

3. Click **"Save"**

4. Repeat for **THREE more A Records** with these values:
   ```
   First:  185.199.108.153
   Second: 185.199.109.153
   Third:  185.199.110.153
   Fourth: 185.199.111.153
   ```

   Each time:
   - Name: `@`
   - Type: `A`
   - Value: (use one of the four IPs above)
   - TTL: `1 hour`
   - Click Save

✅ **Optional Step Complete** - Now both jaincommunications.com and www.jaincommunications.com will work

---

## **Step 2.6: Verify Your DNS Changes**

1. After adding records, GoDaddy shows your DNS records

   **You should see:**
   ```
   ┌──────────────────────────────────────────────────┐
   │ DNS RECORDS                                      │
   ├──────────────────────────────────────────────────┤
   │ Name    | Type | Value                           │
   ├──────────────────────────────────────────────────┤
   │ www     | CNAME| jaincommunications.github.io   │
   │ @       | A    | 185.199.108.153                 │
   │ @       | A    | 185.199.109.153                 │
   │ @       | A    | 185.199.110.153                 │
   │ @       | A    | 185.199.111.153                 │
   └──────────────────────────────────────────────────┘
   ```

✅ **DNS Configuration Complete!**

---

# **PART 3: Wait for DNS Propagation (24-48 hours)**

## **What's Happening Now?**

```
Timeline:
─────────────────────────────────────────
Immediately (0 min)
  ✓ GoDaddy updates DNS records
  ✓ GitHub receives new configuration

1-6 Hours
  ⏳ Most ISPs/DNS servers update
  ⏳ 70-80% of internet sees new settings

12-24 Hours
  ✅ Almost everyone sees it
  ✅ HTTPS certificate generated

24-48 Hours
  ✅ 100% global propagation
  ✅ Everything fully working
```

---

## **Check DNS Status (Optional)**

### **Method 1: Using Online Tool**

1. Go to: https://mxtoolbox.com/cname.aspx

2. Enter: `www.jaincommunications.com`

3. Click **"DNS Lookup"**

4. You should see:
   ```
   ✓ CNAME Found: jaincommunications.github.io
   ```

### **Method 2: Using Command Line (Mac/Linux/Windows)**

1. Open Terminal/Command Prompt

2. Type:
   ```
   nslookup www.jaincommunications.com
   ```

3. Press Enter

4. You should see:
   ```
   Non-authoritative answer:
   www.jaincommunications.com  canonical name = jaincommunications.github.io.
   ```

---

# **PART 4: Verify Everything Works (After 6+ hours)**

## **Step 4.1: Test Your Website**

1. Open a new browser window (or Incognito/Private mode)

2. Type in address bar:
   ```
   www.jaincommunications.com
   ```

3. Press Enter

4. You should see your **Jain Communications solar website**

✅ **Website loads!**

---

## **Step 4.2: Check HTTPS Security**

1. Look at the URL bar - you should see:
   ```
   🔒 https://www.jaincommunications.com
   ```
   (Green lock means secure!)

2. Click the lock icon to verify certificate

   ```
   ┌─────────────────────────────┐
   │ 🔒 Connection is secure     │
   │                             │
   │ Certificate issued to:      │
   │ www.jaincommunications.com  │
   │ Issuer: Let's Encrypt       │
   │ Valid until: [Date]         │
   └─────────────────────────────┘
   ```

✅ **HTTPS is working!**

---

## **Step 4.3: Test All Website Features**

- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Images display properly
- [ ] Solar calculator works (adjust sliders)
- [ ] Testimonials visible
- [ ] Project gallery opens (click images)
- [ ] Contact form visible
- [ ] Google Map loads
- [ ] WhatsApp button works
- [ ] Mobile view works (shrink window)

✅ **All features working!**

---

# **TROUBLESHOOTING - If Something Goes Wrong**

## **Problem 1: Website Still Shows GitHub 404 Error**

**Solution:**
1. Check if you're accessing: `www.jaincommunications.com` (not github.com)
2. Open Incognito/Private window
3. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
4. Wait a few more hours (DNS takes time)

---

## **Problem 2: "jaincommunications.com" (without www) Doesn't Work**

**This is normal if you only added www CNAME**

**Solution:** Add A records (Step 2.5) to fix this

---

## **Problem 3: Shows "Not Secure" (Red Warning)**

**This means HTTPS certificate not generated yet**

**Solution:**
1. Wait 15-30 minutes longer
2. Clear browser cache: `Ctrl + Shift + Delete`
3. Hard refresh page
4. Try again

Certificate auto-generates after DNS updates, usually takes 10-15 minutes.

---

## **Problem 4: Can Access from Some Networks But Not Others**

**This means DNS is still propagating**

**Solution:**
1. This is normal during propagation
2. Wait 24-48 hours
3. DNS servers worldwide are updating at different rates

---

## **Problem 5: Old Website Still Showing**

**Solution:**
1. Check in Incognito mode (private browsing)
2. Try different device/phone
3. Restart browser
4. Check DNS is updated: https://mxtoolbox.com/cname.aspx

---

# **STEP-BY-STEP VISUAL CHECKLIST**

```
✅ Step 1: GitHub Setup
   └─ Login to GitHub
   └─ Go to Settings → Pages
   └─ Add Custom Domain: www.jaincommunications.com
   └─ Click Save

✅ Step 2: GoDaddy DNS Setup
   └─ Login to GoDaddy
   └─ Open Your Domain
   └─ Go to DNS Management
   └─ Add CNAME Record (www → jaincommunications.github.io)
   └─ Add A Records (optional, for root domain)
   └─ Save all changes

⏳ Step 3: Wait for Propagation
   └─ 1-6 hours: Most people see it
   └─ 6-24 hours: HTTPS certificate generates
   └─ 24-48 hours: 100% global propagation

✅ Step 4: Verify & Test
   └─ Visit: www.jaincommunications.com
   └─ Check for 🔒 HTTPS lock
   └─ Test all website features
   └─ Done! 🎉
```

---

# **FINAL CHECKLIST**

Before you start, gather:
- [ ] GoDaddy login email
- [ ] GoDaddy login password
- [ ] GitHub login (already have it)
- [ ] Your domain: jaincommunications.com

After GitHub setup:
- [ ] Domain added to GitHub Pages
- [ ] GitHub shows: "Your site is published at https://www.jaincommunications.com"

After GoDaddy setup:
- [ ] CNAME record added (www → jaincommunications.github.io)
- [ ] A records added (optional)
- [ ] All records showing in GoDaddy DNS

After waiting (6+ hours):
- [ ] Website accessible at www.jaincommunications.com
- [ ] HTTPS shows 🔒 secure lock
- [ ] All pages load correctly
- [ ] All features work (calculator, forms, etc.)

---

# **🎉 SUCCESS!**

Your website is now live at:

## **https://www.jaincommunications.com**

With:
- ✅ Professional solar energy website
- ✅ Custom domain (not GitHub URL)
- ✅ HTTPS security (green lock 🔒)
- ✅ All features working
- ✅ Mobile responsive
- ✅ SEO optimized

---

# **📞 Need Help?**

If you get stuck:

**GoDaddy Support:**
- Go to: https://www.godaddy.com/help
- Chat with GoDaddy support
- They can help with DNS issues

**GitHub Support:**
- Go to: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Very detailed GitHub guide

**Jain Communications Team:**
- Email: navnkd@gmail.com
- Phone: +91 9041260001
- WhatsApp: +91 9041260001

---

# **⚡ QUICK REFERENCE**

```
GitHub Settings Path:
Repository → Settings → Pages → Custom Domain

GoDaddy DNS Path:
Login → My Products → Select Domain → DNS

CNAME Record to Add:
Host: www
Type: CNAME
Points to: jaincommunications.github.io

A Records to Add (optional):
Host: @
Type: A
Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
```

---

**Guide Created**: June 11, 2024  
**Status**: ✅ Complete GoDaddy Setup  
**Next**: Follow steps above and your domain will be live! 🚀

