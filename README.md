# Twilio + Voiceflow Integration

A Node.js application that integrates Twilio with Voiceflow to create interactive voice and messaging experiences.

## Project Overview

This project aims to build a conversational AI system using Voiceflow for conversation design and Twilio for communication channels. The integration allows for:

- Voice calls with AI-powered responses
- SMS interactions with your Voiceflow agent
- WhatsApp messaging capabilities
- Webhook handling for custom logic
- Conversation state management

## Project Structure

```
twilio-voiceflow-app/
│
├── config/                      # Configuration files
│   ├── twilio.js                # Twilio credentials and config
│   ├── voiceflow.js             # Voiceflow API keys and settings
│   └── env.js                   # Environment variables management
│
├── src/
│   ├── controllers/             # Request handlers
│   │   ├── callController.js    # Handle incoming voice calls
│   │   ├── smsController.js     # Handle incoming SMS
│   │   └── webhookController.js # Process webhooks from both services
│   │
│   ├── services/
│   │   ├── twilioService.js     # Twilio API interactions
│   │   ├── voiceflowService.js  # Voiceflow API interactions
│   │   └── stateService.js      # Manage conversation state
│   │
│   ├── middleware/
│   │   ├── authentication.js    # Auth for API endpoints
│   │   ├── validation.js        # Input validation
│   │   └── errorHandler.js      # Centralized error handling
│   │
│   ├── utils/
│   │   ├── logger.js            # Logging utility
│   │   ├── formatter.js         # Format messages between platforms
│   │   └── helpers.js           # Common helper functions
│   │
│   ├── routes/
│   │   ├── calls.js             # Call-related routes
│   │   ├── messages.js          # SMS-related routes
│   │   └── api.js               # API endpoints for management
│   │
│   └── app.js                   # Express application setup
│
├── tests/                       # Test files
│   ├── unit/                    # Unit tests
│   ├── integration/             # Integration tests
│   └── mocks/                   # Test mocks and fixtures
│
├── scripts/                     # Utility scripts
│   ├── setup.js                 # Initial setup script
│   └── deploy.js                # Deployment script
│
├── public/                      # Static assets
│   ├── audio/                   # Audio files for IVR
│   └── responses/               # Custom response templates
│
├── .env                         # Environment variables (not in repo)
├── .gitignore                   # Git ignore file
├── package.json                 # Node.js dependencies
├── package-lock.json            # Locked dependencies
└── README.md                    # Project documentation
```

## Key Components

### Twilio Integration

- **Voice Calls**: Handle incoming calls with Twilio's Programmable Voice
- **SMS**: Process SMS conversations with Twilio's Programmable SMS
- **TwiML**: Generate TwiML for voice responses
- **Media Handling**: Process and respond to media messages (images, audio)

### Voiceflow Integration

- **Conversation Design**: Connect to Voiceflow-designed conversations
- **Dialog Management**: Process conversation turns via Voiceflow API
- **NLU Integration**: Leverage Voiceflow's natural language understanding
- **Multi-modal Responses**: Handle different response types (text, buttons, cards)

## Setup Instructions

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file with required credentials (see `.env.example`)
4. Configure your Twilio numbers in the Twilio dashboard
5. Set up Voiceflow project and obtain API credentials
6. Run the development server: `npm run dev`

## API Reference

### Twilio Webhook Endpoints

- `POST /api/calls/incoming` - Handle incoming voice calls
- `POST /api/sms/incoming` - Handle incoming SMS messages
- `POST /api/status/call` - Process call status updates
- `POST /api/status/message` - Process message delivery status

### Management API

- `GET /api/conversations` - List active conversations
- `GET /api/conversations/:id` - Get conversation details
- `DELETE /api/conversations/:id` - End a conversation
- `POST /api/broadcast` - Send a broadcast message to multiple users

## Environment Variables

```
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

# Voiceflow Configuration
VOICEFLOW_API_KEY=your_api_key
VOICEFLOW_VERSION_ID=your_version_id
VOICEFLOW_PROJECT_ID=your_project_id

# Server Configuration
PORT=3000
NODE_ENV=development
```

## Development

### Prerequisites

- Node.js v16 or higher
- npm v7 or higher
- Twilio account with phone number
- Voiceflow account with a designed project

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Deployment

This application can be deployed to various platforms:

- Heroku
- AWS Lambda
- Google Cloud Functions
- Azure Functions
- Docker container

A deployment script is included in the `scripts` directory.

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
