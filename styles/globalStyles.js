import { StyleSheet } from "react-native";

// globalStyles object to maintain reusable styling throughout the application
export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },

  screenTitle: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 24,
    letterSpacing: 2,
    fontWeight: 700,
    color: "#00C569",
  },

  description: {
    fontSize: 16,
    paddingHorizontal: 8,
    marginVertical: 24,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f8f6",
    borderRadius: 16,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 16,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  screenContent: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});
