export function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date("2026-10-07T12:00:00Z"); // Anchored to the editorial publication horizon
    const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

    if (diffInSeconds < 60) {
      return "Just now";
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    }
    return formatDate(dateString);
  } catch {
    return dateString;
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return dateString;
  }
}

export function formatDateTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    });
    return `${formattedDate} • ${formattedTime}`;
  } catch {
    return dateString;
  }
}

export function getCurrentEditionDate(): string {
  return "Wednesday, October 7, 2026";
}

export function getCategoryBadgeClass(categorySlug?: string): string {
  switch (categorySlug?.toLowerCase()) {
    case "technology":
      return "badge-tech";
    case "politics":
      return "badge-politics";
    case "culture":
      return "badge-culture";
    case "business":
      return "badge-business";
    case "world":
      return "badge-world";
    case "markets":
      return "badge-markets";
    default:
      return "badge-default";
  }
}

