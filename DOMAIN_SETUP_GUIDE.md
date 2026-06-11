# 🌐 Complete Guide: Transfer Jain Communications Website to Your Own Domain

## **Your Custom Domain**: www.jaincommunications.com

This guide will walk you through every step to connect your website to your custom domain.

---

## **📋 Prerequisites**
- ✅ Website already live at: https://jaincommunications.github.io
- ✅ Domain registered (jaincommunications.com)
- ✅ Domain registrar access (where you registered the domain)
- ✅ GitHub account access

---

## **⏱️ Estimated Time**: 15 minutes setup + 24-48 hours DNS propagation

---

# **STEP-BY-STEP SETUP GUIDE**

## **STEP 1: Add Custom Domain to GitHub Pages (5 minutes)**

### 1.1 Go to Your Repository Settings
```
Navigate to: https://github.com/jaincommunications/jaincommunications.github.io
↓
Click "Settings" (top right)
↓
Scroll down to "Pages" section (left sidebar)
```

### 1.2 Configure Custom Domain
```
Settings → Pages
↓
Under "Custom domain" section:
↓
Enter: www.jaincommunications.com
↓
Click "Save"
```

**Screenshot Reference:**
```
┌─────────────────────────────────────┐
│ Pages                               │
├─────────────────────────────────────┤
│ Source: Deploy from a branch        │
│ Branch: main  /root  [Save]         │
│                                     │
│ Custom domain:                      │
│ [www.jaincommunications.com]        │
│                                 [✓] │
│                                     │
│ ☑ Enforce HTTPS                    │
│ (Auto-generated certificate)        │
└─────────────────────────────────────┘
```

✅ **Result**: GitHub creates a `CNAME` file automatically

---

## **STEP 2: Update Domain Registrar DNS Settings (10 minutes)**

### **Where is Your Domain Registered?**

Choose your registrar below:

---

### **OPTION A: GoDaddy** (Most Popular)

1. **Login to GoDaddy**
   - Go to: https://www.godaddy.com
   - Sign in to your account
   - Click "My Products"

2. **Find Your Domain**
   - Look for "Domains"
   - Click the domain: `jaincommunications.com`

3. **Edit DNS Records**
   - Click "DNS" or "Manage DNS"
   - Find "CNAME Records" section
   - Look for existing records

4. **Add/Edit CNAME Record**
   ```
   Type: CNAME
   Host/Name: www
   Points to: jaincommunications.github.io
   TTL: 1 hour (or automatic)
   ```
   - Click "Save"

5. **Optional: Add A Records (root domain)**
   ```
   Type: A
   Host/Name: @ (or leave blank)
   Value: 185.199.108.153
   TTL: 1 hour
   
   Type: A
   Value: 185.199.109.153
   
   Type: A
   Value: 185.199.110.153
   
   Type: A
   Value: 185.199.111.153
   ```

**⏳ Wait**: 24-48 hours for DNS propagation

---

### **OPTION B: Namecheap**

1. **Login to Namecheap**
   - Go to: https://www.namecheap.com
   - Sign in to your account

2. **Find Your Domain**
   - Click "Domain List"
   - Select: `jaincommunications.com`

3. **Manage DNS**
   - Click "Manage" button
   - Go to "Advanced DNS" tab

4. **Add CNAME Record**
   - Click "Add Record" button
   - Select Type: CNAME
   - Host: www
   - Value: jaincommunications.github.io
   - TTL: 30 min (or automatic)
   - Click "Save"

5. **Optional: Add A Records**
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Repeat for:
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   ```

**⏳ Wait**: 24-48 hours for DNS propagation

---

### **OPTION C: Bluehost**

1. **Login to Bluehost**
   - Go to: https://www.bluehost.com
   - Sign in to control panel

2. **Find Your Domain**
   - Click "Domains"
   - Select: `jaincommunications.com`

3. **Edit DNS Zone**
   - Click "Manage DNS" or "Zone Editor"

4. **Add CNAME Record**
   ```
   Name: www
   Type: CNAME
   Points to: jaincommunications.github.io
   TTL: 1 hour
   ```
   - Click "Add Record" or "Save"

**⏳ Wait**: 24-48 hours for DNS propagation

---

### **OPTION D: 1&1 / IONOS**

1. **Login to 1&1/IONOS**
   - Go to: https://www.1and1.com
   - Sign in

2. **Find Your Domain**
   - Go to "Domains" section
   - Select: `jaincommunications.com`

3. **Edit DNS Settings**
   - Click "Edit DNS Settings" or "DNS Management"

4. **Add CNAME Record**
   ```
   Subdomain: www
   Type: CNAME
   Target: jaincommunications.github.io
   Priority: Default
   ```
   - Click "Save"

**⏳ Wait**: 24-48 hours for DNS propagation

---

### **OPTION E: Other Registrars** (Hostgator, DreamHost, etc.)

**General Steps:**
1. Login to your registrar control panel
2. Find "Domain Management" or "DNS Management"
3. Look for your domain: `jaincommunications.com`
4. Add CNAME Record:
   ```
   Name/Host: www
   Type: CNAME
   Points to: jaincommunications.github.io
   TTL: 3600 (or automatic)
   ```
5. Save changes
6. Wait 24-48 hours

---

## **STEP 3: Enable HTTPS (Automatic)**

✅ **GitHub automatically generates HTTPS certificate**

After DNS is updated:
1. Go to GitHub repository Settings
2. Navigate to Pages section
3. You'll see: "Your site is published at https://www.jaincommunications.com"
4. Checkmark "Enforce HTTPS" (when available)

---

## **STEP 4: Verify Everything is Working**

### **Check DNS Status:**

**Method 1: Using Online Tools**
- Go to: https://mxtoolbox.com/cname.aspx
- Enter: www.jaincommunications.com
- Should show: `jaincommunications.github.io`

**Method 2: Using Command Line** (Mac/Linux/Windows)
```bash
nslookup www.jaincommunications.com

# Should return something like:
# www.jaincommunications.com canonical name = jaincommunications.github.io.
```

**Method 3: Direct Browser Test**
- Open browser
- Visit: https://www.jaincommunications.com
- Should show your website
- Check for green HTTPS lock 🔒

### **Test All Website Functions:**
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Images display
- [ ] Solar calculator works
- [ ] Contact form works
- [ ] WhatsApp button functional
- [ ] All pages accessible

---

## **STEP 5: Optional - Set Up Root Domain (@)**

**What is this?**
- `jaincommunications.com` (root/naked domain)
- vs `www.jaincommunications.com` (www subdomain)

**Best Practice:** Redirect root to www

### **Add A Records in Your Registrar:**

```
Record 1:
Type: A
Host: @ (or leave blank)
Value: 185.199.108.153
TTL: 1 hour

Record 2:
Type: A
Host: @
Value: 185.199.109.153

Record 3:
Type: A
Host: @
Value: 185.199.110.153

Record 4:
Type: A
Host: @
Value: 185.199.111.153
```

---

## **⏱️ Timeline - What Happens When:**

### **Immediately (1-5 minutes)**
✅ GitHub receives your CNAME update  
✅ Repository updated with CNAME file

### **Within 1 Hour**
⏳ DNS servers begin updating  
⏳ Most ISPs recognize new DNS

### **24 Hours**
✅ Most users see your website on custom domain  
✅ Email services start working with custom domain

### **48 Hours**
✅ Global DNS propagation complete  
✅ 100% of users see custom domain  
✅ HTTPS certificate fully active

---

## **🔍 Troubleshooting**

### **Problem 1: Website Not Loading on Custom Domain**

**Solution 1**: Check DNS propagation
```bash
# Check if DNS updated
nslookup www.jaincommunications.com

# Should show: jaincommunications.github.io
```

**Solution 2**: Clear browser cache
- Open Incognito/Private window
- Visit: www.jaincommunications.com
- Should work

**Solution 3**: Wait longer
- DNS can take up to 48 hours
- Check again in 6-12 hours

---

### **Problem 2: HTTPS Not Working (Shows "Not Secure")**

**Solution**: Wait for certificate generation
- GitHub auto-generates HTTPS after DNS updates
- Takes 10-15 minutes after DNS propagation
- Don't refresh repeatedly (wait 10 mins between checks)

**Force refresh:**
- Hard refresh: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
- Clear cache: Ctrl + Shift + Delete

---

### **Problem 3: Shows Old Website or GitHub 404**

**Solution 1**: Verify CNAME in GitHub
```bash
# Check GitHub CNAME file
curl https://raw.githubusercontent.com/jaincommunications/jaincommunications.github.io/main/CNAME

# Should return: www.jaincommunications.com
```

**Solution 2**: Check DNS Settings
- Verify you added CNAME correctly in registrar
- Check for typos: `jaincommunications.github.io` (exact)
- Try again if you made mistakes

**Solution 3**: Reset GitHub CNAME
- Go to GitHub Settings → Pages
- Remove custom domain
- Wait 1 minute
- Re-add custom domain
- DNS updates again

---

### **Problem 4: Email Not Working**

**Issue**: Email might be blocked during DNS changes

**Solution**: 
- Wait 48 hours for full propagation
- Check email MX records separately
- Contact email provider if still broken

---

## **✅ Complete Checklist**

- [ ] **Repository created**: jaincommunications.github.io
- [ ] **Website live**: GitHub Pages deployed
- [ ] **Domain registered**: jaincommunications.com
- [ ] **GitHub CNAME added**: via Settings → Pages
- [ ] **DNS records updated**: CNAME in registrar
- [ ] **Waited 24+ hours**: DNS propagation complete
- [ ] **HTTPS enabled**: Green lock visible
- [ ] **Website tested**: All functions working
- [ ] **Root domain setup** (optional): @ records added
- [ ] **Email configured** (optional): MX records set

---

## **🚀 Advanced: Update Repository Settings**

After DNS is working, update your repository:

### **1. Update Repository Description**
```
Description: Premium Solar Energy Solutions by Jain Communications
Website: https://www.jaincommunications.com
```

### **2. Add Topics**
```
Topics: solar-energy renewable-energy solar-panels punjab
```

### **3. Add Social Preview**
- Image: Add a nice preview image
- Description: Catchy tagline

---

## **📧 Next Steps**

After your domain is live:

1. **Email Configuration** (Optional)
   - Set up business email: info@jaincommunications.com
   - Go to email provider (Gmail, Outlook, etc.)
   - Add MX records

2. **SSL Certificate** (Already automatic)
   - GitHub provides free HTTPS
   - Certificate auto-renews

3. **Email Forwarding** (Optional)
   - Forward jaincommunications.com emails to Gmail
   - Use service like Zoho Mail or Namecheap forwarding

4. **Monitor Analytics** (Optional)
   - Add Google Analytics
   - Track visitor behavior

5. **Marketing** (Important!)
   - Update business cards
   - Add website to Google My Business
   - Share on social media
   - List on directories

---

## **📞 Contact for Help**

If you're stuck:
- **Email**: navnkd@gmail.com
- **Phone**: +91 9041260001
- **WhatsApp**: +91 9041260001

---

## **🎯 Final Result**

After completing these steps:

✅ Website live at: **https://www.jaincommunications.com**  
✅ HTTPS secure: **https:// with green lock 🔒**  
✅ Mobile responsive: **Works on all devices**  
✅ SEO ready: **Search engines can index**  
✅ Professional: **Premium business presence**  

---

## **📊 DNS Record Examples**

### **Complete DNS Configuration**

```
CNAME Records:
─────────────────────────────────────────────
www    CNAME    jaincommunications.github.io

A Records (optional - for root domain):
─────────────────────────────────────────────
@      A        185.199.108.153
@      A        185.199.109.153
@      A        185.199.110.153
@      A        185.199.111.153

TXT Records (optional - verification):
─────────────────────────────────────────────
@      TXT      "v=spf1 include:_spf.google.com ~all"
```

---

**Last Updated**: June 11, 2024  
**Version**: 1.0  
**Status**: Complete Setup Guide ✅

