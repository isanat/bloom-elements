# Publishing to NPM

## Prerequisites

1. **NPM Account**: Ensure you have an NPM account at https://www.npmjs.com/
2. **Organization Access**: The `@isanat` organization must be accessible from your account
3. **Permissions**: You must have publish permissions for `@isanat/bloom-elements`

## Steps

### 1. Login to NPM

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email (OTP will be sent if 2FA is enabled)

### 2. Build the Library

Ensure the dist/ folder is up-to-date:

```bash
npm run build:lib
```

### 3. Publish to NPM

For the first release:

```bash
npm publish --access public
```

**Note**: `--access public` makes the scoped package publicly available

### 4. Verify Publication

```bash
npm view @isanat/bloom-elements
```

Visit: https://www.npmjs.com/package/@isanat/bloom-elements

## Future Releases

For subsequent versions, update the version in `package.json`:

```bash
npm version patch  # For bug fixes (1.0.1)
npm version minor  # For new features (1.1.0)
npm version major  # For breaking changes (2.0.0)

npm publish
```

## Troubleshooting

### "You do not have permission to publish"
- Check that you're logged in: `npm whoami`
- Ensure your account has access to `@isanat` organization
- Check organization member permissions on npmjs.com

### "Invalid OTP"
- If using 2FA, make sure to enter the correct 6-digit code from your authenticator
- Wait a few seconds between attempts

### "Package already exists"
- Increment the version in `package.json`
- Then try publishing again

## Post-Publication

1. Update documentation to reference the new version
2. Inform team members about the release
3. Consider updating dependent projects (e.g., careapp)
